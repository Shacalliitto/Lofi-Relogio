import styles from '../styles/chroma.module.css'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import axios from 'axios';

export default function chroma(){
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

 

    return(
      <>
      <div className={styles.bgGradiente}>
        <div className={styles.controles}>
          <Link href="/"><p className={styles.chroma}>Home page</p></Link>
          <iframe className={styles.lofi} src="https://www.youtube.com/embed/DWcJFNfaw9c?autoplay=1&rel=0" frameBorder="0"></iframe>
        </div>
        <div className={styles.clock}>
          <h1>Lofi Clock</h1>
          <p>Chrome mode</p>
          <div className={styles.content}>
            <input type="text" id="rel" className={styles.hora}/>
            <h2 className={styles.date}>{weekDay[now.getDay()]}, {now.getDate()} de {months[now.getMonth()]} de {now.getFullYear()}</h2>
          </div>
        </div>
      </div>  
      </>
    )
}
    