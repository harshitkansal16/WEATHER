var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var weather = {};

//weather.temp={
//unit : "celcius"
//}
//var KELVIN:273;
button.addEventListener('click',function(name){ 
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=64b2476a76110b595b8f213d93363b26')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
 var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  tempValue = tempValue - 273.15;
  temp.innerHTML = "Temp -  "+tempValue+" Celcius" ;
  input.value ="";

})
  
.catch(err => alert("Wrong city name!"));
})