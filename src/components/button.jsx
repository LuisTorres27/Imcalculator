import React from "react";

export function Button(props){
    return(
        <button id="button" className="btn btn-success btn my-3" type="button" onClick={props.function}>Calcular</button>
    )
}
