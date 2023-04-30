import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Booking = () => {
    const bookingInfo = useLoaderData();

    return (
        <Container className='mt-5'>
            <Row>
                <Col md={7} className='mt-5'>
                    <h1 className='text-white fw-bold fs-1'>{bookingInfo.title.toLocaleUpperCase()}</h1>
                    <p className='text-white'>{bookingInfo.description}</p>
                </Col>
                <Col md={5} className='mt-5'>
                    <div>
                        <form className='mt-5 p-3' style={{ background: 'white' }}>
                            <div>
                                <p className='px-3 py-1'>Origin</p>
                                <input type="text" style={{ background: '#F2F2F2' }} value='Dhaka' disabled className='form-control' />
                            </div>
                            <div>
                                <p className='mt-3 px-3 py-1'>Origin</p>
                                <input type="text" value={bookingInfo.title} disabled className='form-control' />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} className='mt-3'>
                                <div>
                                    <p>From</p>
                                    <input type="date" className='form-control' />
                                </div>
                                <div>
                                    <p>To</p>
                                    <input type="date" className='form-control' />
                                </div>
                            </div>
                            <Link to={`/booking/${bookingInfo.id}`}>
                                <Button type='submit' className='bg-warning mt-4 text-black fw-bold w-100'>Booking</Button>
                            </Link>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;