import React from 'react'
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Button, Row, Col, ListGroup, Image, Card} from 'react-bootstrap'
import CheckoutSteps from '../Components/CheckoutSteps';

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if(!cart.shippingAdress.adress) {
        navigate('/shipping');
    } else if (!cart.paymentMethod) {
        navigate('/payment');
    }
  
  }, [cart.paymentMethod, cart.shippingAdress.adress, navigate])
  
  
    return <>
    <CheckoutSteps step1 step2 step3 step4/>
    <Row>
        <Col md={8}>Column</Col>
        <Col md={4}>Column</Col>
    </Row>
    </>
    
  
}

export default PlaceOrderScreen