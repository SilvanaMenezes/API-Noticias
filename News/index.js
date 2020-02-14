//Consulta uma API enviando o link
document.querySelector('#link-url').onclick = function () {
    let a_link = document.querySelector ('#link-url');
    carregarCep(a_link.value);
}
let url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=6c3b1c5632834197986ee2ec38c9903c';
let req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })