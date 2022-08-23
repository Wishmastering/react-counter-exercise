//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";
//import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

let unit = 0;
let decenas = 0;
let minutoUnit = 0;
let minutoDecena = 0;
let horaUnit = 0;
let horaDecena = 0;


setInterval(() => {
            unit++;
            if (unit > 9) {
                unit = 0;
                decenas++;
                if (decenas > 5) {
                    decenas = 0;
                    minutoUnit++;
                    if (minutoUnit > 9) {
                        minutoUnit = 0;
                        minutoDecena++
                        if (minutoDecena++ > 5) {
                            minutoDecena = 0;
                            horaUnit++;
                            if (horaUnit > 9) {
                                horaUnit = 0;
                                horaDecena++;
                            }
                        }
                    }
                }
            }

            ReactDOM.render( < SecondsCounter unit = {
                    unit
                }
                decenas = {
                    decenas
                }
                minutoUnit = {
                    minutoUnit
                }
                minutoDecena = {
                    minutoDecena
                }
                horaUnit = {
                    horaUnit
                }
                horaDecena = {
                    horaDecena
                }




                />, document.querySelector("#app"));

                counter++;
            }, 1000);