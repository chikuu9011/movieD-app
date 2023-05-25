import  { useEffect, useState } from 'react'

export default function useFetch(apiPath) {

    var [apidata,setapidata]=useState([])

    useEffect(()=>{
        fetch(apiPath)
        .then(res=>res.json())
        .then(val=>{
            setapidata(val)
        })
        
    },[])

  return apidata
}
