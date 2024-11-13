import React, {useState, useEffect} from "react";

const TrafficLight = () =>{    

    const [lightOn, setLightOn] = useState("green");
    const colorSelected = (colorClick) => {
        setLightOn(colorClick);        
    }
    const [changeColor, setChangeColor] = useState (false);
    useEffect (()=>{
        if(changeColor===true){
            setTimeout(() => {
                console.log("me ejecuto");                
                if(lightOn === "green"){
                    setLightOn("yellow");                    
                } else if(lightOn === "yellow"){
                    setLightOn("red");
                } else setLightOn("green");
            }, 1500)            
        }                
    },[changeColor, lightOn]);


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
            
            <button 
                type="button" className="color-button btn btn-primary"
                onClick={() => setChangeColor(!changeColor)}
            >
                Change light color
            </button>
        </main>
    )
}

export default TrafficLight;