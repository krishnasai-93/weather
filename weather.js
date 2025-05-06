const InpValue=document.getElementById('Inpvalue')
const searchBtn=document.getElementById('btn')
const ForecastImg=document.getElementById('weatherImg')
const apiKey="12a15334ee2ff243c9bf080ae0666f77"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

async function App(e){
    const res=await fetch(apiUrl+e+`&appid=${apiKey}`
)
    const data=await res.json()
    console.log(data)

    document.getElementById('temp').innerHTML=data.main.temp
    document.getElementById('city').innerHTML=data.name
    document.getElementById('wind').innerHTML=data.wind.speed+"km/hr"
    document.getElementById('humidity').innerHTML=data.main.humidity+"%"


    if(data.weather[1].main==="Clouds"){
        ForecastImg.src='img/C:\Users\ASUS\OneDrive\Desktop\krishna fullstack\weather\img\cloud.png'
    }else if(data.weather[1].main==="Haze"){
        ForecastImg.src='C:\Users\ASUS\OneDrive\Desktop\krishna fullstack\weather\img\haze.png'
    }else if(data.weather[1].main==="Clear"){
        ForecastImg.src='C:\Users\ASUS\OneDrive\Desktop\krishna fullstack\weather\img\clear.png'
    }

    document.querySelector('.weather').style.display='block'

}

searchBtn.addEventListener('click',()=>{
    App(InpValue.value)
})
