import React, { Component } from 'react';
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll';

class App extends Component {
  render() {
    return (
      <ScrollContainer>
        <ScrollSection
          style={{
            backgroundColor: '#cfb5cf'
          }}
          pageId={0}
        />

        <ScrollSection
          style={{
            backgroundColor: '#cfcfb5'
          }}
          pageId={1}
        />

        <ScrollSection
          style={{
            backgroundColor: '#b5cfcf'
          }}
          pageId={2}
        />
      </ScrollContainer>
    );
  }
}

export default App;
