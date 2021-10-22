import {useState, useEffect} from 'react'
import {render} from 'react-dom'
import axios from 'axios';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
//  JS do relogio
  function relogio(){
    var tempo=new Date();
    var hor=tempo.getHours();
    var min=tempo.getMinutes();
    var sec=tempo.getSeconds();

    if(hor<10)hor="0"+hor;
    if(min<10)min="0"+min;
    if(sec<10)sec="0"+sec;

    var hora=`${hor}:${min}:${sec}`;
    document.getElementById("rel").value=hora;
  }
  setInterval(relogio, 1000);

  //  JS da data
  var now = new Date()
  var weekDay = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado"]
  var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  function changeMode(){
    var checkbox = event.target
    if(checkbox.checked) return document.querySelector('html').classList.add("lightMode")
    document.querySelector('html').classList.remove("lightMode")
  }

  // JS da temperatura
  const [location, setLocation] = useState(false);
  const [userInfo, setUserInfo] = useState({temp: '', city: '', max_temp: '', min_temp: ''})


  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })

    let getWeather = async (lat, long) => {
      let query = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4a669b065ef4433bc986cc722b0c0e04&lang=pt&units=metric`)
      const data = query.data
      setUserInfo({temp:data.main.temp, city: data.name, max_temp: data.main.temp_max, min_temp: data.main.temp_min})
    }
  }, [])
  
  return (
    <>
    <div className={styles.controles}>
      <Link href="/Chroma" passHref><p className={styles.chroma}>Chroma mode</p></Link>
      <input type="checkbox" className={styles.checkbox} onChange={changeMode}></input>
      <iframe className={styles.lofi} src="https://www.youtube.com/embed/DWcJFNfaw9c?autoplay=1&rel=0" frameBorder="0"></iframe>
    </div>
    <div className={styles.weather}>
        <h2>Fazem {userInfo.temp > 23 ? '🌞' : '⛄'} {userInfo.temp} ºC  em {userInfo.city}.</h2>

        <h3>A max é de: {userInfo.max_temp}ºC  e minima de: {userInfo.min_temp}ºC</h3>
        <h4>A localidade é baseada na sede mais proxima do seu provedor de internet 😉</h4>
    </div>
    <div className={styles.clock}>
      <h1>Lofi Clock</h1>
      <div className={styles.content}>
        <input type="text" id="rel" className={styles.hora}/>
        <h2 className={styles.date}>{weekDay[now.getDay()]}, {now.getDate()} de {months[now.getMonth()]} de {now.getFullYear()}</h2>
      </div>
      
    </div>
      
    </>
  )
}