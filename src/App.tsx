import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Text = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
`;

class App extends React.Component {
  render() {
    return (
      <Background>
        <Loader
          type="Oval"
          color="#BA0C2F"
          height="100"
          width="100"
        />
        <Text>Still loading...</Text>
      </Background>
    );
  }
}

export default App;
