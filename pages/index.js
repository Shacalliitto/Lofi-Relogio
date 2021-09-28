import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sol from '../public/imgs/sol.png'
import Lua from '../public/imgs/lua.png'
import { func } from 'prop-types'

export default function Home() {
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

  var now = new Date()
  var weekDay = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado"]
  var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  function changeMode(){
    var checkbox = event.target
    if(checkbox.checked) return document.querySelector('html').classList.add("lightMode")
    document.querySelector('html').classList.remove("lightMode")
  }

  return (
    <>
    <div className={styles.luz}>
      <input type="checkbox" className={styles.checkbox} onChange={changeMode}></input>
      <iframe className={styles.lofi} src="https://www.youtube.com/embed/DWcJFNfaw9c?autoplay=1&rel=0" frameBorder="0"></iframe>
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