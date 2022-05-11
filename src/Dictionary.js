import React, {useState} from "react";
import "./Dictionary.css"



export default function Dictionary(){
 
    const[word, setWord]=useState(null)

     function search(event){
         event.preventDefault();
         alert("searching")
         
     }

    return (
        <div className="Dictionary">
        <form onSubmit={search} >
            <input type="text" placeholder="Type Word"/>
            <button>Search</button>
        </form>
        </div>
    )
}