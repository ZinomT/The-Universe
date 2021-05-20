import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Earth from '../img/Earth.svg';
import Moon from '../img/Moon.svg';
import Mars from '../img/Mars.svg';


class Ruler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <UniverseWrapper>
        <EarthWrapper>
          <EarthDiv/>
            <EarthText>Earth is 12,742km in Diameter</EarthText>
        </EarthWrapper>

        <Example>
          <ExampleTitle>
            <h2>100,000km</h2>
          </ExampleTitle>
          <ExampleFigure/>
        </Example>

        <EarthToMoon>
          <EarthToMoonFigure/>
        </EarthToMoon>

        <MoonWrapper>
          <MoonDiv/>
          <MoonText>We got to the moon pretty quickly!</MoonText>
        </MoonWrapper>

        <MoonToMars>
          <MoonToMarsFigure/>
        </MoonToMars>

        <MarsWrapper>
          <MarsDiv/>
          <MarsText>Finally found Mars!</MarsText>
        </MarsWrapper>

        <Example2>
          <ExampleFigure2/>
        </Example2>

      </UniverseWrapper>
    )
  }
}

const UniverseWrapper = styled.div`
  display: inline-flex;
`;

const EarthWrapper = styled.div`
`;

const EarthDiv = styled.div`
  width: 100%;
  height: 100px;
  /* right: 0;
  bottom: 0; */
  padding-top: 100%;
  padding-left: 250px;
  background-image: url(${Earth});
  background-repeat: no-repeat;
  background-size: 127.42px;
  background-position: 298px;
`;

const ExampleTitle = styled.div`
  align-self: flex-start;
  text-align: center;
  position: sticky;
  left: 0;
  margin-bottom: 5px;
  color: #FFF;
  margin-top: 0;
`;

const EarthText = styled.div`
  position: absolute;
  font-size: 35px;
  display: table;
  color: #FFF;
`;

const Example = styled.div`
  margin: 1em 3em;
`;

const ExampleFigure = styled.div`
  background-color: #FFF;
  align-items: center;
  display: flex;
  width: 1000px;
  height: 1px;
  margin-top: 5px;
`;

const EarthToMoon = styled.div`
margin: 1em 3em;
`;

const EarthToMoonFigure = styled.div`
  background-color: #FFF;
  align-items: center;
  display: flex;
  width: 2526.4px;
  height: 1px;
  margin-top: 5px;
  opacity: 0%;
`;

const MoonWrapper = styled.div`
`;

const MoonDiv = styled.div`
  width: 100%;
  height: 100px;
  /* right: 0;
  bottom: 0; */
  padding-top: 100%;
  padding-left: 250px;
  background-image: url(${Moon});
  background-repeat: no-repeat;
  background-size: 34.4034px;
  background-position: 298px;
`;

const MoonText = styled.div`
  position: absolute;
  font-size: 35px;
  display: table;
  color: #FFF;
`;

const MoonToMars = styled.div`
margin: 1em 3em;
`;

const MoonToMarsFigure = styled.div`
  background-color: black;
  align-items: center;
  display: flex;
  width: 541814px;
  height: 1px;
  margin-top: 5px;
  opacity: 0%;
`;

const MarsWrapper = styled.div`
`;

const MarsDiv = styled.div`
  width: 100%;
  height: 100px;
  /* right: 0;
  bottom: 0; */
  padding-top: 100%;
  padding-left: 250px;
  background-image: url(${Mars});
  background-repeat: no-repeat;
  background-size: 67.86px;
  background-position: 298px;
`;

const MarsText = styled.div`
  position: absolute;
  font-size: 35px;
  display: table;
  color: #FFF;
`;

const Example2 = styled.div`
  margin: 1em 3em;
`;

const ExampleFigure2 = styled.div`
  background-color: #FFF;
  align-items: center;
  display: flex;
  width: 2500px;
  height: 1px;
  margin-top: 5px;
  opacity: 0%;
`;

export default Ruler;