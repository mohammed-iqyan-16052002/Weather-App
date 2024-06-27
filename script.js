let url="https://api.openweathermap.org/data/2.5/weather"
let appId="f00c38e0279b7bc85480c3fe775d518c"
let text=document.getElementById('in')
let city=document.getElementById('cityName');
let date=document.getElementById('date');
let temp=document.getElementById('temp');
let describe=document.getElementById('des');
let speed=document.getElementById('speed');
let btn=document.getElementById('btn')
async function weather(){
    let val=`${url}?q=${text.value}&appid=${appId}&units=metric`;
    try{
     let response=await fetch(val)
     let data=await response.json()
    if(response.ok){
        city.innerHTML = `City Name: ${data.name}`;
        date.innerHTML = `Date: ${new Date().toLocaleDateString()}`; 
        temp.innerHTML = `Temperature: ${data.main.temp}°C`;
        describe.innerHTML = `Weather: ${data.weather[0].description}`;
        speed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
    }
    else{
        alert("City Not Found")
    }
    }
    catch(err){
   console.log(err,'City Not Foud')
    }

}
btn.addEventListener('click',weather)