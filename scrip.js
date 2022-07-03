async function per(){
    var response= await fetch("https://dog.ceo/api/breeds/image/random");
    var responseJason = await  response.json();
    var img = responseJason.message;
    var conte = document.querySelector('.contenedor')
    conte.innerHTML = "<img src='"+img+"'>";

}