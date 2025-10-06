import React, { useEffect, useState } from 'react'
import './Time_recorder.css'

const Time_recorder = () => {

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('de-DE', { hour12: false });
            setCurrentTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);


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
                        <button type="button" className="btn btn-secondary">Start</button>
                        <button type="button" className="btn btn-secondary">Pause</button>
                        <button type="button" className="btn btn-secondary">Stop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Time_recorder
