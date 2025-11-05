import React, { useEffect, useState } from 'react';
import './Time_recorder.css';

const Time_recorder = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [startTime, setStartTime] = useState('-');
    const [endTime, setEndTime] = useState('-');
    const [pauseStartTime, setPauseStartTime] = useState('-'); // Anzeige Pause Start
    const [pauseStart, setPauseStart] = useState(null); // für Berechnung
    const [totalPauseTime, setTotalPauseTime] = useState(0); // in Sekunden
    const [isStartDisabled, setIsStartDisabled] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [showStopButton, setStopButton] = useState(false);
    const [hidePauseButton, setPauseButton] = useState(true);
    const [startDateTime, setStartDateTime] = useState(null); // Date für Start
    const [isPauseDisabled, setIsPauseDisabled] = useState(false);

    const dummyUsers = [
        { userId: 'u1', userName: 'Max Mustermann' },
        { userId: 'u2', userName: 'Erika Musterfrau' }
    ];

    const getCurrentTime = (options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) => {
        return new Date().toLocaleTimeString('de-DE', options);
    };

    // const [user, setUser] = useState(dummyUsers[0]);

    useEffect(() => {
        const updateTime = () => setCurrentTime(getCurrentTime());
        updateTime();
        const interval = setInterval(updateTime, 1000);
        console.log(dummyUsers[0]);
        
        return () => clearInterval(interval);
    }, []);

    // START
    const getCurrentStart = () => {
        const now = new Date();
        setStartDateTime(now); // echte Date
        setStartTime(now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', hour12: false }));
        setIsStartDisabled(true);
        setShowTable(true);
        
        
    };

    // PAUSE starten
    const startPauseTime = () => {
        const now = new Date();
        setPauseStart(now);
        setPauseStartTime(
            now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', hour12: false })
        );
        setStopButton(true);
        setPauseButton(false);
    };

    // STOP Pause
    const getPauseTime = () => {
        if (pauseStart) {
            const pauseEnd = new Date();
            const diffSeconds = Math.floor((pauseEnd - pauseStart) / 1000);
            setTotalPauseTime(prev => prev + diffSeconds);
        }

        setPauseStart(null);
        setStopButton(false);
        setPauseButton(true);
    };

    // ENDE
    const getEndTime = () => {
        const now = new Date();
        setEndTime(now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', hour12: false }));

        if (startDateTime) {
            const totalSeconds = Math.floor((now - startDateTime) / 1000) - totalPauseTime;
            setTotalWorkTime(formatTime(totalSeconds));
        }

        setIsPauseDisabled(true);
    };

    const [totalWorkTime, setTotalWorkTime] = useState('-');

    // Hilfsfunktion hh:mm:ss
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // Gesamtpause formatieren mm:ss
    const formatPauseTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}m ${seconds}s`;
    };

    return (
        <div>
            <div className='time_recorder_button_section'>
                <div className='time_recorder_current_time'>
                    <div className='current_time'>{currentTime}</div>
                </div>

                <div className='time_recorder_button_group'>
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            disabled={isStartDisabled}
                            onClick={getCurrentStart}
                        >
                            Start
                        </button>

                        {hidePauseButton && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                disabled={!isStartDisabled || isPauseDisabled}
                                onClick={startPauseTime}
                            >
                                Pause
                            </button>
                        )}

                        {showStopButton && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                disabled={!isStartDisabled}
                                onClick={getPauseTime}
                            >
                                Stop
                            </button>
                        )}

                        <button
                            type="button"
                            className="btn btn-secondary"
                            disabled={!isStartDisabled || isPauseDisabled}
                            onClick={getEndTime}
                        >
                            Ende
                        </button>
                    </div>

                    {showTable && (
                        <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Start</th>
                                    <th scope="col">Pause</th>
                                    <th scope="col">Gesamt Pausenzeit</th>
                                    <th scope="col">Ende</th>
                                    <th scope="col">Arbeitszeit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{startTime}</td>
                                    <td>{pauseStartTime}</td>
                                    <td>{formatPauseTime(totalPauseTime)}</td>
                                    <td>{endTime}</td>
                                    <td>{totalWorkTime}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Time_recorder;
