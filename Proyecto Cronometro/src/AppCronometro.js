import React, { useState, useEffect } from 'react'
import './index.css';

// Functional Component Cronometro

const AppCronometro = () =>{

    const [ segundos, setSegundos ] = useState(0);
    const [ minutos, setMinutos ] = useState(0);
    const [ horas, setHoras ] = useState(0);
    const [cronometroOn, setCronometro] = useState(false);
    const [ timerIdState, setTimer]  = useState()
    let timerId;

    const startChronometer = (e) => {

        if(cronometroOn === false){
            setCronometro(true);
            timerId= !timerId && setInterval(() => {
                setSegundos(Segundos => Segundos + 1)
            }, 1000);
            setTimer(timerId);
        }
    }

    const pauseChronometer = (e) =>{

        clearInterval(timerIdState);
        setCronometro(false);
    } 
    
    const resetChronometer = (e) => {

        clearInterval(timerIdState)
        setSegundos(0);
        setMinutos(0);
        setHoras(0);
        setCronometro(false);
    }

    const checkTimeVariables = () => {

        if(segundos === 60){
            setSegundos(0);
            setMinutos(minutos + 1);
            if(minutos === 59){
                setMinutos(0);
                setHoras(horas + 1);
            }
        }
    } 

    useEffect(() => {
        checkTimeVariables();
        return () => clearInterval(timerIdState)
    }, [])

    return (
        <>
        <div className ="cronometroBox">
            <span className ="conteo" id='horas'>{ horas >= 10? horas: `0${horas}`}:</span>
            <span className ="conteo" id="minutos">{ minutos >= 10? minutos: `0${minutos}` }:</span>   
            <span className ="conteo" id="segundos">{ segundos >= 10? segundos: `0${segundos}` }</span>
        </div>

        <div className = "ButtonsBox">  
            <span className ="boton">
                <button className="btn-beg" onClick={ startChronometer }>Start</button>
            </span>
            <span className ="boton">
                <button className="btn-pause" onClick={ pauseChronometer }>Pause</button>
            </span>
            <span className ="boton">
                <button className="btn-res" onClick={ startChronometer }>Resume</button>
            </span>
            <span className ="boton">
                <button className="btn-reset" onClick={ resetChronometer }>Reset</button>
            </span>
        </div>
        </>
    )
}
export default AppCronometro;