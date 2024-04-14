import React, { useState } from "react";

//create your first component
export const TrafficLight = () => {

    const [ color, setColor ] = useState("red");
	return  (
		<div>
            <div className="trafficTop"></div>
            <div className="container card">
                <div 
                    onClick={() => setColor("red")}
                    className={"red row " + (color === "red" ? "glowRed" : "")}>
                </div>
                <div
                    onClick={() => setColor("yellow")}
                    className={"yellow row " + (color === "yellow" ? "glowYellow" : "")} >
                </div>
                <div 
                    onClick={() => setColor("green")}
                    className={"green row " + (color === "green" ? "glowGreen" : "")}>
                </div>
            </div>
		</div>
	);
};

export default TrafficLight;
