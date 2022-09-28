/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import './timer.scss';



const Timer = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [secs, setSecs] = useState('00')


    let timeInterval = useRef();

    const startTimer = () => {
        const countDownDate = new Date("Oct 3, 2022 00:00:00");

        timeInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const dys = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hrs = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const mnts = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const scnds = Math.floor((distance % (1000 * 60)) / 1000)


            if (distance < 0) {
                clearInterval(timeInterval.current);
            } else {
               
                setDays(dys)
                setHours(hrs)
                setMinutes(mnts)
                setSecs(scnds)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(timeInterval.current);
        }
    })


    return (
        <section>
            <div className="main-timer">
                <div className="days times">
                    <p>{days}</p>
                    <span>DAYS</span>
                </div>
                <div className="hours times">
                    <p>{hours}</p>
                    <span>HRS</span>
                </div>
                <div className="minutes times">
                    <p>{minutes}</p>
                    <span>MINS</span>
                </div>
                <div className="seconds times">
                    <p>{secs}</p>
                    <span>SECS</span>
                </div>
            </div>
        </section>
    )
}

export default Timer