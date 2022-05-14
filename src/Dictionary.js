import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";
// import dictionary from "./dictionary.jpg"



export default function Dictionary(){
 
    const[word, setWord]=useState("");
    const [result, setResult]=useState(null)

    function showResponse(response){
        console.log(response.data[0]);
        setResult(response.data[0]);
    }

     function search(event){
         event.preventDefault();
         

         let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
         console.log(apiUrl)
         axios.get(apiUrl).then(showResponse)
         
     }

     function showWord(event){
     setWord(event.target.value)
     }

    return (
        <div className="Dictionary">

        <p className="header">SEARCH FOR A WORD</p>

            <section className="Form">
        <form onSubmit={search} >
            <input onChange={showWord} type="search" placeholder="Type Word" />
            <button>Search</button>
        </form>
        </section>
        <Results result={result}/>
        </div>
    )
}