import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background: red;
  color: #fff;
`;

export default () => {
  return (
    <Header>
      <a href="/">
        <img src="" alt="Features I have Used and Loved logo" />
      </a>
    </Header>
  );
};
