import React from "react";
import "./Dictionary.css"



export default function Dictionary(){
    return (
        <div className="Dictionary">
        <form>
            <input type="text" placeholder="Type Word"/>
            <button>Search</button>
        </form>
        </div>
    )
}