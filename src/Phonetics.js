import React from "react"

export default function Phonetics(props){
console.log(props.phonetics.text)
    if(props.phonetics){
    return (

        <div>
          <a href={props.phonetics.audio} rel="blank">
          Listen
          </a>

            <br/>
            {props.phonetics.text}
        </div>
    )}else{
        return null;
    }
}