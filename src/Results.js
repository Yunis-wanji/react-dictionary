import React from "react"
import "./Results.css"
import Meanings from "./Meanings"
import Phonetics from "./Phonetics"

export default function Results(props){
    if(props.result){
        return (
            <div className="Result">
                <h2>{props.result.word}</h2>
                <Phonetics phonetics={props.result.phonetic}/>
            
              {props.result.meanings.map(function(meaning, index){
                 return( <div key={index}>
                     <Meanings meaning={meaning}/>
                                          </div>
                     )
             })}
            
            </div>
        )
    }else{
        return "Loading"
    }
    
    
}