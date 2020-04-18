import React from "react";

import { MODE, getDisplay } from "../../util/util";

import heater1 from "../../sounds/Heater_1.mp3";
import chord1 from "../../sounds/Chord_1.mp3";
import heater2 from "../../sounds/Heater_2.mp3";
import chord2 from "../../sounds/Chord_2.mp3";
import heater3 from "../../sounds/Heater_3.mp3";
import chord3 from "../../sounds/Chord_3.mp3";
import heater4 from "../../sounds/Heater_4.mp3";
import shaker from "../../sounds/Shaker.mp3";
import openhh from "../../sounds/Open_HH.mp3";
import closedhh from "../../sounds/Closed_HH.mp3";
import clap from "../../sounds/Clap.mp3";
import kicknhat from "../../sounds/Kick_n'_Hat.mp3";
import kick from "../../sounds/Kick.mp3";
import punchykick from "../../sounds/Punchy_Kick.mp3";
import sidestick from "../../sounds/Side_Stick.mp3";
import snare from "../../sounds/Snare.mp3";

const soundMap = (lab, mode) => {
    switch (lab) {
        case "Q":
            return mode === MODE.heater ? heater1 : chord1;
        case "W":
            return mode === MODE.heater ? heater2 : chord2;
        case "E":
            return mode === MODE.heater ? heater3 : chord3;
        case "A":
            return mode === MODE.heater ? heater4 : shaker;
        case "S":
            return mode === MODE.heater ? clap : openhh;
        case "D":
            return mode === MODE.heater ? openhh : closedhh;
        case "Z":
            return mode === MODE.heater ? kicknhat : punchykick;
        case "X":
            return mode === MODE.heater ? kick : sidestick;
        case "C":
            return mode === MODE.heater ? closedhh : snare;
        default:
            return false;
    }
};

const Drum = ({ label, mode, setDisplay, vol, power }) => {
    const playSound = key => {
        if (power) {
            let audioEl = document.querySelector(`#${key}`);
            audioEl.volume = vol / 100;
            audioEl.currentTime = 0;
            audioEl.play();
            setDisplay(getDisplay(label, mode));
        }
    };

    return (
        <button
            id={label.toLowerCase()}
            className="drum-pad"
            onClick={() => playSound(label)}
        >
            {label}
            <audio src={soundMap(label, mode)} className="clip" id={label} />
        </button>
    );
};

export default Drum;
