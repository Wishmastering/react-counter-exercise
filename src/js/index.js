//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";
//import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

let counter = 0;

 setInterval( () => {
                    //SecondsCounter lo que hace es "decirle al DOM.Render" 
                    //lo que quiere que muestre, en este caso seria
                    //la funcion compleja que hicimos en el otro lado
                    //para hacer un "Counter"
                    // ---------------------------------------------
                                    //Seconds es la PROPIEDAD que queremos usar en el props
                                    //su valor es {counter} que se vera aumentada ++ cada 1 segundo
                                    //ya que eso es lo que pusimos en el setInterval 
                                    // ------------------------------
                                                        // Esto supongo que lo que hace es 
                                                        //"Colocarlo" en donde debe ir para que se muestre
    ReactDOM.render(<SecondsCounter seconds={counter}/>, document.querySelector("#app"));
                                    // Porque es necesario definir "counter = 0"?
                                    // en vez de eso que pasar al hacer "seconds = 0" directamente ..?
    counter++ ;
} , 1000); 



 /* function hello(par){
    let myVar1 = Math.trunc(par/10);
    let myVar2 = par%10;

    console.log(myVar1);
    console.log(myVar2);
}

const message = "Hello World"
console.log(message)
hello(12) */
