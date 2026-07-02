const input=document.getElementById('searchInput');
//i access input 
input.addEventListener('click',(e)=>{
    e.preventDefault();
    //stop browser from refreshing 
    searchValue=input.value.trim();
    //remove space from text 
    if(searchValue==""){
        alert('please enter your city name');
    }
    else{
        fetch('https:api.openweathermap.org/data/2.5/weather?q=${searchValue},{state code},{country code}&appid={e3664bf39d1fb15328dce55e6b7aa8cf}')
        //i enter api key 
        //send openWeather server to give me data
        .then((res)=>res.json())
        .then((data)=> {
            showDataOnUi(data);
             input.value="";
        });
        //making a function that will show data from server 
        function showDataOnUi(data){
            console.log(data);
            if(data.cod == 404){
                //data.cod always data object have a data cod value
                alert('404 city not found');
            }
            else{
                const temperature= data.main.temp;
                const location=data.location;
                //const weatherSituation=data.weatherSituation;
                const weatherSituation=data.weather[0].main;
                const icon=data.icon[0];
                // developers get these variable from data object
                const html=""

            }
        }
     

    }
})