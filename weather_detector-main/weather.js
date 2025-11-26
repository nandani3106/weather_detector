let apiKey= "8fc02632f7371d2e9221605c8d4906b8";
let apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox= document.querySelector(".search input");
let searchBtn= document.querySelector(".search button");

async function checkWeather(city){
    let response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data= await response.json();
    console.log(data);

   document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= data.main.temp +"°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";
    
}

searchBtn.addEventListener("click" ,()=>{
 checkWeather(searchBox.value);   
});


