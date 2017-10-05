import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 2rem;
  border-top: 2px solid #1d1d1d;
  background: #fff;
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

export default () => {
  return (
    <Footer>
      <Copyright>Copyright ? 2017</Copyright>
    </Footer>
  );
};
