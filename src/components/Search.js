import React, { useContext, useEffect, useState } from 'react'
import Context from './Contexdata'
import record from "../env"
import Movie from './Movie'

const Search = () => {
    const Sdata = useContext(Context)
    const [apival,setapival] = useState([])

    useEffect(() => {
        const apipath = `${record.path}3/search/movie?api_key=${record.key}&language=en-US&query=${Sdata}&page=1`

        fetch(apipath)
        .then(res=>res.json())
        .then(val=>{
            setapival(val.results)

        })
    }, [Sdata])
    return (
        <div>
            <Movie val={apival}/>
        </div>
    )
}

export default Search
