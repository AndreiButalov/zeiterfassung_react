import React, { useEffect, useState } from 'react';
// import { db } from "../../firebase";
// import { ref, set } from "firebase/database";
import './Time_recorder.css';


const Time_recorder = () => {

    const [currentTime, setCurrentTime] = useState('');
    const [startTime, setStartTime] = useState('-');
    const [pauseTime, setPauseTime] = useState('-');
    // const [endTime, setEndTime] = useState('-');
    const [isStartDisabled, setIsStartDisabled] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [showStopButton, setStopButton] = useState(false);
    const [hidePauseButton, setPauseButton] = useState(true);
    // const [userName] = useState('andrei');

    const getCurrentTime = (options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) => {
        return new Date().toLocaleTimeString('de-DE', options);
    };


    useEffect(() => {
        const updateTime = () => setCurrentTime(getCurrentTime());

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);


    const getCurrentStart = () => {
        setStartTime(getCurrentTime({ hour: '2-digit', minute: '2-digit', hour12: false }));
        setIsStartDisabled(true);
        setShowTable(true);
    };


    const startPauseTime = () => {
        setPauseTime(getCurrentTime({ hour: '2-digit', minute: '2-digit', hour12: false }));
        setStopButton(true);
        setPauseButton(false);
    };


    const getPauseTime = () => {
        setStopButton(false)
        setPauseButton(true)
    }


    return (
        <div>
            <div className='time_recorder_button_section'>
                <div className='time_recorder_current_time'>
                    <div className='current_time'>
                        {currentTime}
                    </div>
                </div>
                <div className='time_recorder_button_group'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" 
                            disabled={isStartDisabled} 
                            onClick={getCurrentStart}
                            >Start
                        </button>
                        {hidePauseButton && 
                            <button type="button" className="btn btn-secondary" 
                                disabled={!isStartDisabled} 
                                onClick={startPauseTime}
                                >Pause
                            </button>
                        }
                        {showStopButton &&
                            <button type="button" className="btn btn-secondary" 
                                disabled={!isStartDisabled} 
                                onClick={getPauseTime}
                                >Stop
                            </button>
                        }
                        <button type="button" className="btn btn-secondary" disabled={!isStartDisabled}>Ende</button>
                    </div>
                    {showTable && (
                        <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Start</th>
                                    <th scope="col">Pause</th>
                                    <th scope="col">Ende</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{startTime}</td>
                                    <td>{pauseTime}</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Time_recorder
