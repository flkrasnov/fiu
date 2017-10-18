import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;

  @media screen and (min-width: 48rem) {
    align-items: flex-end;
  }
`;

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  font-size: 2rem;
`;

const Caption = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.5rem;
  margin-bottom: 0.725rem;
`;

const Portrait = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 300px;
  padding: 1rem 2rem;
  background: url(media/images/Dmitry.jpg);
`;

const Head = styled.img`
  display: block;
  position: absolute;
  left: 81px;
  top: 16px;
  width: 147px;
  height: 198px;
  animation: head-animation 3s linear infinite;
`;

class Summary extends Component {
  render() {
    return (
      <OuterContainer>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <Description>
                <Heading>Dmitry Krasnov</Heading>
                <Caption>Junior+ frontend developer from Minsk, Belarus.</Caption>
              </Description>
            </Col>

            <Col xs={12} sm={6}>
              <Portrait>
                <Head src="/media/images/portrait-head.png" />
              </Portrait>
            </Col>
          </Row>
        </Grid>
      </OuterContainer>
    );
  }
}

export default Summary;
