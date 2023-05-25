import React from 'react'
import { Container } from 'react-bootstrap'
import record from '../env'
import useFetch from '../hooks/useFetch'
import Movie from './Movie'

export default function Popular() {
  var { path, key } = record
  var finalpath = path + `3/movie/popular?api_key=${key}&language=en-US&page=1`

  const ans = useFetch(finalpath)
  console.log(ans.results);
  return (
    <Container className='movie-data'>
      <Movie val={ans.results} />
    </Container>
  )
}

