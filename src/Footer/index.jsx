import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 1rem 2rem;
  border-top: 2px solid #1d1d1d;
`;

export default () => {
  return (
    <Footer>
      <p>Copyright ? 2017</p>
    </Footer>
  );
};
