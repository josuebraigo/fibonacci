import React from 'react';
import img from '../images/fibonacci.jpg'

export default function Header() {
    return (
        <>
            <img src={img} alt="Fibonacci" />
            <h1 className="container-fluid text-center">Fibonacci</h1>
        </>
    )
}