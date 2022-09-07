console.log(222);
const status = 'active';
//document.getElementById(' ');
fetch('http://example.com/movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));