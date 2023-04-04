/* eslint-disable padded-blocks */
import React from 'react';
import styled from 'styled-components';
import Button from './Button.js';

const Header = ({ title, bgColor }) => {
  const Container = styled.div`
background-color: ${bgColor};
color: #666;
font-size:20px;

.topnav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end
}

li:nth-child(2n) {
  font-size: 12px;
  color: red;
}

h1 {
  text-decoration: underline;
}

`
  return (
    <Container>
      <nav className="topnav">
        <ul>
          <li href="#home">About</li>
          <li href="#news">Trips</li>
          <li href="#contact">Pricing</li>
          <li href="#about">Contact</li>
        </ul>
      </nav>
      <h1>Get ready for {title}!</h1>
      <Button>Order!</Button>
    </Container>
  );
}

export default Header;