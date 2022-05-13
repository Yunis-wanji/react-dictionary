import React from "react"

export default function Phonetics(props){

    if(props.phonetics){
    return (
        <div>
            {props.phonetics}
        </div>
    )}else{
        return null;
    }
}