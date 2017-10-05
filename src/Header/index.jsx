import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  border-bottom: 2px solid #1d1d1d;
`;

const Logo = styled.a`
  display: inline-block;
  font-size: 2.5rem;
  color: #1d1d1d;
  text-decoration: none;
  line-height: 2rem;
  &:hover {
    color: #00f;
  }
`;

const MenuLink = styled.a`
  display: inline-block;
  padding: 1rem 1.5rem;
  font-weight: 700;
  color: #1d1d1d;
  text-decoration: none;
  &:hover {
    color: #00f;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: ${props => (props.isVisible ? '3rem' : '0')};
  transition: height 0.4s cubic-bezier(0.36, -0.73, 0.63, 1.62);
`;

function Menu(props) {
  return (
    <Container isVisible={props.isVisible}>
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/explore">Explore</MenuLink>
      <MenuLink href="/contact">Contact</MenuLink>
    </Container>
  );
}

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ isOpened: true });
  }

  mouseLeave() {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <Wrapper onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <Logo href="/">
          Features I have Used<br />and Loved
        </Logo>
        <Menu isVisible={this.state.isOpened} />
      </Wrapper>
    );
  }
}

export default Header;
