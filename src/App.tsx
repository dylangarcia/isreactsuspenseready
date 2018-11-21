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

interface IState {
  hasTimeElapsed: boolean;
}

class App extends React.Component<{}, IState> {
  state = {
    hasTimeElapsed: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hasTimeElapsed: true,
      });
    }, 5000);
  }

  render() {
    const { hasTimeElapsed } = this.state;
    const text = hasTimeElapsed ? 'No.' : 'Loading...';

    return (
      <Background>
        <Loader
          type="Oval"
          color="#BA0C2F"
          height="100"
          width="100"
        />
        <Text>{ text }</Text>
      </Background>
    );
  }
}

export default App;
