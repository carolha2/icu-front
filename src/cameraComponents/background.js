import React from 'react';
import ReactDOM from 'react-dom';
import Wave from 'react-wavify';
import styled from "styled-components";


const WaveContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 75px;
  height: ${(props) => props.level + 'vh'};
  display: flex;
  z-index: -1;
  transform: rotate(360deg);
`;

export function Background() {
  return (
    <div style={{ marginTop: "-200px" }}>
      <WaveContainer level={90}>
        <Wave
           fill="#FADA5E"
          paused={false}
          opacity="0.30"
          options={{
            height: 520,
            amplitude: 10,
            speed: 0.2,
            points: 3,
          }}
        />
      </WaveContainer>
      <WaveContainer level={90}>
        <Wave
           fill="#FFC30B"
          opacity="0.80"
          paused={false}
          options={{
            height: 575,
            amplitude: 20,
            speed: 0.3,
            points: 2,
          }}
        />
      </WaveContainer>
      <WaveContainer level={90}>
        <Wave
            fill="#FEDC56"
          paused={false}
          opacity="0.5"
          options={{
            height: 545,
            amplitude: 30,
            speed: 0.1,
            points: 4,
          }}
        />
      </WaveContainer>
    </div>
  );
}