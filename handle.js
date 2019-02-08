
var xhr = new XMLHttpRequest();
xhr.onload = () =>{
    data = xhr.response;
    data = JSON.parse(data);
    console.log(data);
}
xhr.open('GET', 'http://localhost:8080/responses.json',true)
xhr.send();


