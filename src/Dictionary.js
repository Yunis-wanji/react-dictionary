import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"



export default function Dictionary(){
 
    const[word, setWord]=useState("")

    function showResponse(response){
        console.log(response)
    }

     function search(event){
         event.preventDefault();
         alert(`searching for ${word}`)

         let apiUrl="https://api.dictionaryapi.dev/api/v2/entries/en/sunset"
         axios.get(apiUrl).then(showResponse)
         
     }

     function showWord(event){
     setWord(event.target.value)
     }

    return (
        <div className="Dictionary">
        <form onSubmit={search} >
            <input onChange={showWord} type="search" placeholder="Type Word" />
            <button>Search</button>
        </form>
        </div>
    )
}