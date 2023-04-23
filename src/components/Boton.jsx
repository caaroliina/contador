import React from "react";

function Boton({ texto, esBotonDeclick, manejarClick}){
    return(
        <button 
            className={ esBotonDeclick ? "botton-click" : "boton-reiniciar" } 
            onClick={manejarClick}>
            {texto}
        </button>

    ) 
}

export default Boton;