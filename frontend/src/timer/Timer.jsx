// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Timer.css'; // Ensure the CSS is properly imported
import useUpdateTime from '../hooks/useUpdateTime';
import useGetTime from '../hooks/useGetTime';
import './Timer.css';

const Timer = () => {
    const [counter, setCounter] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const { updateTime } = useUpdateTime();
    const { elapsedTimed } = useGetTime();

    useEffect(() => {
        initialMidnightCheck();

        return () => {
            if (counter) {
                clearInterval(counter);
                setCounter(null);
            }
        };
    }, []);

    useEffect(() => {
        setElapsedTime(elapsedTimed || 0)
    }, [elapsedTimed])

    useEffect(() => {
        const newHours = Math.floor(elapsedTime / 3600);
        const newMinutes = Math.floor((elapsedTime % 3600) / 60);
        const newSeconds = Math.floor(elapsedTime % 60);

        setHours(newHours);
        setMinutes(newMinutes);
        setSeconds(newSeconds);
    }, [elapsedTime])

    const timer = () => {
        setElapsedTime((prevTime) => prevTime + 1);

        checkForMidnightReset();
    };

    const reset = () => {
        setElapsedTime(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);

        if (counter) {
            clearInterval(counter);
            setCounter(null);
        }
    };

    const checkForMidnightReset = () => {
        const now = new Date();
        if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
            reset();
        }
    };

    const initialMidnightCheck = () => {
        const now = new Date();
        const msToMidnight = ((23 - now.getHours()) * 3600 + (59 - now.getMinutes()) * 60 + (60 - now.getSeconds())) * 1000;
        setTimeout(() => {
            reset();  // Reset at midnight
            setCounter(setInterval(timer, 1000));  // Set to reset every 24 hours thereafter
        }, msToMidnight);
    };

    const startTimer = () => {
        if (!counter) {
            setCounter(setInterval(timer, 1000));
        }
    };

    const stopTimer = async () => {
        if (counter) {
            clearInterval(counter);
            setCounter(null);
            console.log(elapsedTime)
            await updateTime(elapsedTime);
        }
    };

    return (
        <div className="timer-container">
            <h1 className="heading">Study timer</h1>
            <div className="timer">
                <div className="sub_timer">
                    <h1 className="digit">{String(hours).padStart(2, '0')}</h1>
                    <p className="digit_name">hr</p>
                </div>
                <div className="sub_timer">
                    <h1 className="digit">{String(minutes).padStart(2, '0')}</h1>
                    <p className="digit_name">min</p>
                </div>
                <div className="sub_timer">
                    <h1 className="digit">{String(seconds).padStart(2, '0')}</h1>
                    <p className="digit_name">sec</p>
                </div>
            </div>

            <div className="button">
                <div className="sub_button">
                    <button id="startButton" onClick={startTimer}>Start</button>
                </div>
                <div className="sub_button">
                    <button id="stopButton" onClick={stopTimer}>Stop</button>
                </div>
            </div>
        </div>
    );
};

export default Timer;