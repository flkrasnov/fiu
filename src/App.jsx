import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
