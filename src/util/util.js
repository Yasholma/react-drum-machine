export const MODE = {
    smooth: "smooth",
    heater: "heater",
};

export const getDisplay = (label, mode) => {
    if (label === "Q") {
        return mode === MODE.heater ? "Heater 1" : "Chord 1";
    }
    if (label === "W") {
        return mode === MODE.heater ? "Heater 2" : "Chord 2";
    }
    if (label === "E") {
        return mode === MODE.heater ? "Heater 3" : "Chord 3";
    }
    if (label === "A") {
        return mode === MODE.heater ? "Heater 4" : "Shaker";
    }
    if (label === "S") {
        return mode === MODE.heater ? "Clap" : "Open HH";
    }
    if (label === "D") {
        return mode === MODE.heater ? "Open HH" : "Closed HH";
    }
    if (label === "Z") {
        return mode === MODE.heater ? "Kick n' Hat" : "Punchy Kick";
    }
    if (label === "X") {
        return mode === MODE.heater ? "Kick" : "Side Stick";
    }
    if (label === "C") {
        return mode === MODE.heater ? "Closed HH" : "Snare";
    }
};
