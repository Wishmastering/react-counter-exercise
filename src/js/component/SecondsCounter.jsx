import React from "react";


const SecondsCounter = (props) => {

    return(
        <div className="app d-flex justify-content-center">
            <div className=" box icon"><p className="far fa-clock"></p></div>
            <div className=" box">{props.horaDecena}</div>
            <div className=" box">{props.horaUnit}</div>
            <div className=" box">{props.minutoDecena}</div>
            <div className=" box">{props.minutoUnit}</div>
            <div className=" box">{props.decenas}</div>
            <div className=" box">{props.unit}</div>
        </div>
    )
};


export default SecondsCounter;

