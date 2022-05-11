import React, {useState} from "react";
import "./Dictionary.css"



export default function Dictionary(){
 
    const[word, setWord]=useState("")

     function search(event){
         event.preventDefault();
         alert(`searching for ${word}`)
         
     }

     function showWord(event){
     setWord(event.target.value)
     }

    return (
        <div className="Dictionary">
        <form onSubmit={search} >
            <input onChange={showWord} type="search" placeholder="Type Word"/>
            <button>Search</button>
        </form>
        </div>
    )
}