import React,{ useState , useEffect } from "react"
export default function Questionapi() {
    const thisIsSyncFunction = async() =>{
        const data = await fetch('https://codequiz.azurewebsites.net/data')
        .then(res => res.json())
        .then((response) => {result = response.data});
        console.log(data);
    }
    useEffect(()=>{
        thisIsSyncFunction()
    },[])
    return (
        <>
        </>
    )

}