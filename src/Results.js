import React from "react"
import "./Results.css"

export default function Results(props){
    if(props.result){
        return (
            <div className="Result">
                <h2>{props.result.word}</h2>
            
              {props.result.meanings.map(function(meaning, index){
                 return meaning.definitions[0].definition;
             })}
            
            </div>
        )
    }else{
        return "Loading"
    }
    
    
}