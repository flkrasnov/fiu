import React, { Component } from 'react';
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll';
import Summary from './Slides/Summary';
import Gallery from './Slides/Gallery';
import Contacts from './Slides/Contacts';

class App extends Component {
  render() {
    return (
      <ScrollContainer>
        <ScrollSection pageId={0}>
          <Summary />
        </ScrollSection>

        <ScrollSection pageId={1}>
          <Gallery />
        </ScrollSection>

        <ScrollSection pageId={2}>
          <Contacts />
        </ScrollSection>
      </ScrollContainer>
    );
  }
}

export default App;
