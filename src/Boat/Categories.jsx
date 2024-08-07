import React from "react";
import { WatchBoat } from "./Watch";
import { SpeackerBoat } from './Speacker';
import { NeckbandBoat } from './NeckbandBoat';
import { HeadphoneBoat } from "./HeadphoneBoat";
import { TwsBoat } from "./Tws";
import { PartyspeakerBoat } from "./Partyspeaker";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

export function CategoriesBoat(){
    // const {name}=useParams();


    // const [Api,setApi]=useState([{

    // }]);

    // useEffect(() => { 
    //     axios.get(`https://jsonplaceholder.typicode.com/posts?id=${name}`)
    //   .then(json => console.log(json.data))
    //  },[]);

    // useEffect(() => { 
    //     axios.get(`https://jsonplaceholder.typicode.com/posts?id=${name}`)
    //   .then(json => setApi(json.data))
    //  },[]);

return(
    <>

{/* {
            Api.map((data)=>{
                return(
                    <>
                    <p>{data.userId}</p>
                    </>
                )
            })
        } */}

<TwsBoat/>
<WatchBoat/>
<SpeackerBoat/>
<HeadphoneBoat/>
<NeckbandBoat/>
<PartyspeakerBoat/>
    </>
)
}