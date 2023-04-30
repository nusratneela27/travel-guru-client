import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaArrowCircleRight } from 'react-icons/fa';

const Banner = () => {
    const fakeData = useLoaderData()
    const [travel, setTravel] = useState(fakeData[0]);

    const onClickHandler = (id) => {
        const findingData = fakeData.find(data => data.id === id)
        setTravel(findingData)
    }

    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const content = fakeData.map(singleData =>
        <div
            key={singleData.id}
            onClick={() => onClickHandler(singleData.id)}
        >
            <img src={singleData.img} style={{ width: "95%" }} alt="" />
            <h5 style={{ color: 'white', position: 'absolute', top: '80%', padding: '5px' }}>{singleData.title.toLocaleUpperCase()}</h5>
        </div>)

    return (
        <>
            <Container>
                <Row>
                    <Col md={6} className='mt-5'>
                        <h1 className='text-white fw-bold fs-1'>{travel.title.toLocaleUpperCase()}</h1>
                        <p className='text-white'>{travel.description}</p>
                        <Button className='bg-warning'>
                            <Link to={`/travel/${travel.id}`} className='text-decoration-none text-black fw-bold'>Booking <FaArrowCircleRight></FaArrowCircleRight></Link>
                        </Button>
                    </Col>
                    <Col md={6} className='mt-5'>
                        <Slider {...settings}>
                            {
                                content
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Banner;