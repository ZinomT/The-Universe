import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Earth from '../img/Earth.svg'

class Ruler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
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
            <h2>100000km</h2>
          </ExampleTitle>
          <ExampleFigure/>
        </Example>
        <EarthToMoon>
          <EarthToMoonFigure/>
        </EarthToMoon>
        {/* <MoonToMars>
          <MoonToMarsFigure/>
        </MoonToMars> */}
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
  color: black;
  margin-top: 0;
`;

const EarthText = styled.div`
  position: absolute;
  font-size: 35px;
  display: table;
`;

const Example = styled.div`
  margin: 1em 3em;
`;

const ExampleFigure = styled.div`
  background-color: black;
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
  background-color: black;
  align-items: center;
  display: flex;
  width: 40000px;
  height: 1px;
  margin-top: 5px;
  opacity: 0%;
`;

const MoonToMars = styled.div`
margin: 1em 3em;
`;

const MoonToMarsFigure = styled.div`
  background-color: black;
  align-items: center;
  display: flex;
  width: 546910px;
  height: 1px;
  margin-top: 5px;
  opacity: 0%;
`;

export default Ruler;