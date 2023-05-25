import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import record from '../env'

export default function Movie(props) {
  var results = props['val']
  var { imgpath } = record
  return (
    <Row className='text-center'>
      {
        results && results.map(obj =>
          <Col xl={3} sm={6}>
            <img src={imgpath + obj.poster_path} className="img-fluid"  alt='img-movie'/>
            <h6>{obj.original_title}</h6>
            <h6>{obj.vote_average}/10</h6>
            <Link to={"/Single-movie/"+obj.id}>visit</Link>
          </Col>

        )
      }
    </Row>
  )
}
