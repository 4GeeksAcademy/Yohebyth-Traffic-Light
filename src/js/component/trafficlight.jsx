import React, {useState, useEffect} from "react";
import AddPurple from "./addpurple";

const TrafficLight = () =>{    

    const [lightOn, setLightOn] = useState("green");
    const colorSelected = (colorClick) => {
        setLightOn(colorClick);        
    }
    const [alternateColor, setAlternateColor] = useState (false);
    useEffect (()=>{
        if(alternateColor===true){
            setTimeout(() => {               
                if(lightOn === "green"){
                    setLightOn("yellow");                    
                } else if(lightOn === "yellow"){
                    setLightOn("red");
                } else setLightOn("green");
            }, 1500)            
        }                
    },[alternateColor, lightOn]);
    const [purpleState, setPupleState] = useState(false);


    return(
        <main>
            <div className="stick">

            </div>
            <div className={`lightContent ${(purpleState)===true? "purpleActive" : "purpleDesactive"}`}>
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
                {(purpleState)===true? <AddPurple/> : ""}
            </div>
            
            <button 
                type="button" className="color-button btn btn-primary"
                onClick={() => setAlternateColor(!alternateColor)}
            >
                Alternate light color
            </button>
            <button 
                type="button" className="color-button btn btn-primary"
                onClick={() => setPupleState(!purpleState)}
            >
                Add Purple Light
            </button>
        </main>
    )
}

export default TrafficLight;