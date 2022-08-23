import React from "react";

                        // PORQUE DEFINE PROPS COMO UNA FUNCION ACA..?
                        // Que es lo que se gana al hacer eso, no me queda claro
                        // PORQUE LA CHICA HIZO TODO EL 100% DENTRO DE LA FUNCION, PORQUE ES ESO NECESARIO ???
const SecondsCounter = (props) => {
    // Aca simplemente se llama la propiedad "Seconds", que fue definida como "Seconds = {counter}" 
    //, donde "counter = 0", asi que basicamente no hemos echo NADA, solo dijimos unit = 0
    // Porque es necesario definir "counter = 0" y en vez de eso , solo hacer "seconds = 0" directamente ???
     
    // Que pasaria si no se usara "props.seconds" aca, que es lo que lo hace necesario..?
    let unit = props.seconds;
    let decenas = 0;
    let hundreds = 0;
    let thousands = 0;
    let tenThousands = 0;
    let hundredThousands = 0;

    if(unit > 9){
        decenas = Math.floor(unit/10); 
        unit = unit%10;
        if(decenas > 5){
        decenas = 0;
        hundreds = Math.floor(decenas/5);
            if(hundreds > 9){
             thousands++;
             hundreds = hundreds % 10;
                if(thousands> 5){
                tenThousands += 1;
                thousands = thousands % 10;
                    if(tenThousands> 9){
                    hundredThousands += 1;
                    tenThousands = tenThousands % 10;   
                    }
                }
            }
        }
    }
    return(
        <div className="app d-flex justify-content-center">
            <div className=" box icon"><p className="far fa-clock"></p></div>
            <div className=" box">{hundredThousands}</div>
            <div className=" box">{tenThousands}</div>
            <div className=" box">{thousands}</div>
            <div className=" box">{hundreds}</div>
            <div className=" box">{decenas}</div>
            <div className=" box">{unit}</div>
        </div>
    )


};


export default SecondsCounter;

