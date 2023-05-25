import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import record from '../env'

import useFetch from '../hooks/useFetch'

const Singlemovie = () => {
    let { movieId } = useParams()
    console.log(movieId);

    var ans_single = useFetch(`${record.path}3/movie/${movieId}?api_key=${record.key}&language=en-US`)
    const imgpost = record.imgpath + ans_single.poster_path
    const imgback = record.imgpath + ans_single.backdrop_path
    const rating = Math.round(ans_single.vote_average)
    const GEN = ans_single.genres
    var ans_cast = useFetch(`${record.path}3/movie/${movieId}/credits?api_key=${record.key}&language=en-US`)
    console.log(ans_single);
    console.log(ans_cast);
    const CAST = ans_cast['cast']
    return (
        <>
            <Container xxl>
                <Row>
                    <Col xl={6}>
                        <Row>
                            <Col xl={4}>
                                <img src={imgpost} alt='img' className='img-fluid' />

                            </Col>
                            <Col xl={8}>
                                <h5>
                                    {ans_single.original_title}
                                </h5>
                                <h6>
                                    Rating:{rating}/10
                                </h6>
                                <h6>
                                    <span>{ans_single.runtime}min</span>

                                    {
                                        GEN && GEN.map(val =>

                                            <span> {val.name}, </span>)
                                    }


                                </h6>
                                <h6>
                                    Release data : {ans_single.release_date}
                                </h6>

                            </Col>
                            <h5>Overview</h5>
                            <h6>
                                {ans_single.overview}
                            </h6>
                        </Row>
                    </Col>
                    
                    <Col xl={6}>
                        <img src={imgback} alt='img' className='img-fluid' />
                    </Col>


                </Row>
            </Container >
            <br />
            <Container>
                <Row>

                    {
                        CAST && CAST.map(val =>
                            <Col xl={2} >
                                <img src={record.imgpath + val.profile_path} className='img-fluid' alt='cast-img' />
                                <h6>{val.name}</h6>
                                <h6>{val.character}</h6>
                            </Col>

                        )
                    }

                </Row>
            </Container>
        </>
    )
}

export default Singlemovie
