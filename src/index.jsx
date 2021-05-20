import React from 'react';
import ReactDOM from 'react-dom';
import Ruler from './components/Ruler.jsx';
import styled from 'styled-components';
import img from './img/right.svg';
import Tracker from './components/Tracker.jsx';


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
      currentKilo: 0,
    }

  }
  componentDidMount() {
    console.log('w')
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
          <Tracker/>
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
  color: #FFF;
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
  color: #FFF;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50px 45px;
  /* animation-name: bouncy-arrow;
  animation-delay: 0;
  animation-iteration-count: infinite;
  animation-direction: forward;
  animation-duration: 3s; */
`;

const Instructions = styled.div`
  margin-top: 40px;
  max-width: 80%;
  color: #FFF;
  font-size: 20px;
`;

const Current = styled.div`
  position: fixed;
  top: 0px;
  left: 10px;
`;

ReactDOM.render(<App />, document.getElementById('app'));