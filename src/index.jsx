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
      name: '',
      email: '',
      message: ''
    }

  }
  componentDidMount() {
    console.log('W')
  }

  handleSubmit(e){
    e.preventDefault();
    // axios({
    //   method: "POST",
    //   url:"http://localhost:5000/send",
    //   data:  this.state
    // }).then((response)=>{
    //   if (response.data.status === 'success') {
    //     alert("Message Sent.");
    //     this.resetForm()
    //   } else if (response.data.status === 'fail') {
    //     alert("Message failed to send.")
    //   }
    // })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }


  render () {
    return (
    <MainWrapper>
      <UniverseWrapperRow1>
        <TitleWrapper>
          <MainTitle>Our Solar System</MainTitle>
          <Email>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </Email>
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
font-family: Lucida Bright,Georgia,serif;
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

const Email = styled.div`
  bottom: 50px;
  left: 40px;
  width: 150px;
  height: 165px;
  position: absolute;
  color: #FFF;
`;

ReactDOM.render(<App />, document.getElementById('app'));