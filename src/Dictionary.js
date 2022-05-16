import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";
import Photos from "./Photos";
// import dictionary from "./dictionary.jpg"



export default function Dictionary(){
 
    const[word, setWord]=useState("");
    const [result, setResult]=useState(null)
    const [photos, setPhotos] = useState(null)

    function showResponse(response){
        
        setResult(response.data[0]);
    }

    function handlePexelsResposnse(response){
        setPhotos(response.data.photos);

    }

     function search(event){
         event.preventDefault();
         

         let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
         console.log(apiUrl)
         axios.get(apiUrl).then(showResponse)

         let pexelsApiKey= "563492ad6f9170000100000173545b995deb460ba00e1e9a0aa3baea"
         let headers = {Authorization: `Bearer ${pexelsApiKey}`};
         let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`
         axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResposnse);
         
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
        <Photos photos={photos} />
        </div>
    )
}