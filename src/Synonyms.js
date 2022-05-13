import React from "react"
 

export default function Synonyms(props){
    
    if(props.synonyms){
    
    return(
        <ul className=" Synonyms list-unstyled">
        <strong>
            {props.synonyms.map(function(synonym, index){
                return(
                    <li>
                    <span key={index}>
                    {synonym}
                    </span>
                    </li>
                )
            })}
        </strong>
        </ul>
    )}else{
        return null
    }
}