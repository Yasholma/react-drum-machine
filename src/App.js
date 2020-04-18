import React from "react";
import Drum from "./components/drum/drum";

import logo from "./logo.png";

import { MODE, getDisplay } from "./util/util";
import "./App.css";

const soundKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

function App() {
    const [mode, setMode] = React.useState(MODE.heater);
    let defaultDisplay =
        mode === MODE.heater ? "Heater Kit" : "Smooth Paino Kit";
    const [display, setDisplay] = React.useState(defaultDisplay);
    const [volume, setVolumne] = React.useState(30);
    const [power, setPower] = React.useState(true);

    const powerState = React.useRef(power);

    React.useEffect(() => {
        window.addEventListener("keydown", e => {
            const id = e.key.toUpperCase();
            const audio = document.getElementById(id);

            console.log(e);

            if (powerState.current && audio) {
                audio.currentTime = 0;
                audio.volume = volume / 100;
                audio.play();

                setDisplay(getDisplay(id, mode));
            }
        });

        return function cleanup() {
            window.removeEventListener("keydown", e => setPower(!power));
        };
    }, [power, volume, mode]);

    const changeMode = () => {
        let newMode = MODE[mode] === MODE.heater ? MODE.smooth : MODE.heater;
        setMode(newMode);
        setDisplay(`${defaultDisplay}`);
    };

    const changeVolume = e => {
        e.persist();
        setVolumne(e.target.value);
        setDisplay(`Volume: ${e.target.value}`);
    };

    const togglePower = data => {
        powerState.current = data;
        setPower(data);
    };

    return (
        <div className="App" id="drum-machine">
            <div className="logo-container">
                <img src={logo} className="logo" alt="Logo" />
            </div>
            <div className="drum-container">
                {soundKeys.map(sound => (
                    <Drum
                        key={sound}
                        power={power}
                        label={sound}
                        vol={volume}
                        mode={mode}
                        setDisplay={setDisplay}
                    />
                ))}
            </div>

            <div className="toggles">
                <div>
                    <h5>Power Switch</h5>
                    <label className="toggle">
                        <input
                            type="checkbox"
                            checked={power}
                            onChange={() => togglePower(!power)}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
                <div>
                    <h5>Mode Switch</h5>
                    <label className="toggle">
                        <input
                            type="checkbox"
                            checked={mode === MODE.heater}
                            onChange={() => changeMode()}
                            disabled={!power}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="vol-container">
                <input
                    type="range"
                    id="vol"
                    name="vol"
                    min="0"
                    onChange={e => changeVolume(e)}
                    value={volume}
                    disabled={!power}
                    className="volume"
                />
            </div>
            <div id="display" className="display">
                {display}
            </div>
        </div>
    );
}

export default App;
