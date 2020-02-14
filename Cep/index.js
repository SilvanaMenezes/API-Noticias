//Consulta uma API enviando o link
document.querySelector('#carregar-cep').onclick = function () {
    let input_cep = document.querySelector ('#cep');
    carregarCep(input_cep.value);
}

function carregarCep(cep) {
    fetch('https://viacep.com.br/ws/' + cep +'/json')
        //THEN: Espera o fetch ser resolvido e 
        //      executa a função passada por parametro
        .then(function (response) {
            response.json().then(function (data) {
                //Data: Resultado da consulta da API em Array
                console.log(data);
                document.querySelector('#conteudo').innerHTML = `
                        <p>Cep: ${data.cep}</p>
                        <p>Bairro: ${data.bairro}</p>
                        <p>Rua: ${data.logradouro}</p>
                    `
            })
        }).catch(function (error) {
            alert('Deu erro aqui!');
        })
}