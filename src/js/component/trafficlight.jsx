import React, {useState} from "react";

const TrafficLight = () =>{    

    const [lightOn, setLightOn] = useState("green");
    const colorSelected = (color) => {
        setLightOn(color);        
    }

    return(
        <main>
            <div className="stick">

            </div>
            <div className="lightContent">
                <div 
                    className={`red ${(lightOn==="red")? "light" : ""}`}
                    onClick={ () => {colorSelected("red")}}
                ></div>
                <div 
                    className={`yellow ${(lightOn==="yellow")? "light" : ""}`}
                    onClick={ () => {colorSelected("yellow")}}
                ></div>
                <div 
                    className={`green ${(lightOn==="green")? "light" : ""}`}
                    onClick={ () => {colorSelected("green")}}
                ></div>
            </div>
            <button className="color-button">Change Color</button>
        </main>
    )
}

export default TrafficLight;