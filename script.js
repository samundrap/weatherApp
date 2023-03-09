let weather = {
    "apikey" : "4aa9418e96d9642eb2cb559574340ff4",
    fetchWeather: function(city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city
         + "&units=metric&appid="
         + this.apikey
         )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));

    },
    displayWeather : function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const   {temp,humidity}= data.main;
        const   {speed}= data.wind;
        document.querySelector(" .city").innerHTML = "Weather in " + name;
        document.querySelector(" .icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(" .description").innerHTML = description;
        document.querySelector(" .temp").innerHTML = temp + " °C";
        document.querySelector(" .humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(" .wind").innerHTML = "Wind speed: " + speed + "km/h";
        document.querySelector(" .weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/2000x1100/?" + name + "')"
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click",function(){
weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key== "Enter")
    {
        weather.search();
    }
});

weather.fetchWeather("Denver");