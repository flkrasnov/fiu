import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  position: relative;
  background: #ececec;
`;

const Block1 = styled.div`
  height: 600px;
  background: #cac;
`;

const Block2 = styled.div`
  height: 600px;
  background: #aca;
`;

const Block3 = styled.div`
  height: 600px;
  background: #cca;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <div>
          <Block1 />
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
