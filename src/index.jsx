import React from 'react';
import ReactDOM from 'react-dom';
import Ruler from './components/Ruler.jsx';
import styled from 'styled-components';
import img from './img/right.svg';


// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }
  componentDidMount() {
    console.log('dont say hello')
  }


  render () {
    return (
    <MainWrapper>
      <UniverseWrapperRow1>
        <TitleWrapper>
          <MainTitle>Our Solar System</MainTitle>
          <ScrollThatWay>
            <span>Scroll Right</span>
            <Instructions>
              <span>To scroll right, use shift + mousewheel. If you have a touchpad, swipe sideways.</span>
            </Instructions>
          </ScrollThatWay>
        </TitleWrapper>
        <Ruler/>
      </UniverseWrapperRow1>
    </MainWrapper>
    )
  }
}




const MainWrapper = styled.div`
  font-family: sans-serif;
  overflow: visible;
  display: inline-block;
`;

const UniverseWrapperRow1 = styled.div`
  min-height: 100%;
  display: inline-flex;
`;

const TitleWrapper = styled.div`
  width: 100vw;
`;

const MainTitle = styled.div`
  text-align: center;
  font-size: 60px;
  line-height: 0.9;
  width: 100%;
  margin-top: 100px;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const ScrollThatWay = styled.div`
  align-self: flex-end;
  width: 360px;
  height: 165px;
  position: absolute;
  right: 0;
  bottom: 0;
  padding-top: 42px;
  padding-left: 48px;
  font-size: 30px;
  color: #00000033;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50px 40px;
  /* animation-name: bouncy-arrow;
  animation-delay: 0;
  animation-iteration-count: infinite;
  animation-direction: forward;
  animation-duration: 3s; */
`;

const Instructions = styled.div`
  transition: opacity 300ms;
  margin-top: 40px;
  max-width: 80%;
  color: black;
  font-size: 14px;
`;


ReactDOM.render(<App />, document.getElementById('app'));