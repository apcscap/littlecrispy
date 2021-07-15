// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Row from './components/Row';
import Card from './components/Card';
import Surprise from './components/Surprise';
import SurpriseButton from './components/SurpriseButton';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import thegang from './the-gang.jpg'
import dabestcouple from './dabestcouple.jpeg'
import thebringer from './the-bringer.png'
import bringersinger from './singernosound2.mov'

function App() {

  const [isHovered, onHovered] = useState(false);

  const hover = (val) => {
    onHovered(val);
  }

  const title1 = "Hello There"
  const letter1 = "Sheeshers! It's me, the unofficial fifth member of the val squad. However, you can alawys call me the \"big ego silent carry who doesn't come to practice anymore guy.\" Anyways I wish you a big HAPPY BURTHDA!"

  const title2 = "Triggered?"
  const letter2 = "Thank you for being a good friend unlike our enemy Joshua Basset :). You work towards healing hearts not destroying them. I appreciate that you took the effort of hosting a prom at your house. Your parents were very generous to give you permission and now I realize where your traits of considerateness and kindness come from."

  const title3 = "{ Driver's License Age Requirement }"
  const letter3 = "I hope your happy and that you'll be happier in the future. Thank you for making senior year a fun ride. But, remember that I was the one who taught you Mr. Brightside :). Happy Birthday, I hope you like da website!"

  const title4 = "Happy Birthday!"
  const letter4 = "Happy birthday! I hope you have a nice birthday and I hope your best wishes come true! Tanks for keeping my brother company and for being nice to me. Happy Birthday! - Callan."

  return (
    <Router basename='/littlecrispy'>
      <div className="container">
        <Route exact path='/' exact render={(props) => (
          <>
            <Header/>
            <Row>
              <Card title={title1} text={letter1} imgPath={thegang} video={false} onHover={hover}/>
              <Card title={title2} text={letter2} imgPath={dabestcouple} video={false} onHover={hover}/>
            </Row>
            <Row>
              <Card title={title3} text={letter3} imgPath={thebringer} video={false} onHover={hover}/>
              <Card title={title4} text={letter4} imgPath={bringersinger} video onHover={hover}/>
            </Row>
            <p style={{textAlign: 'center', fontStyle: 'normal', }}>If your name is Courtney "Sage" Wong you can claim this website. Must show proof that you have an identical name.- This Website was made by Callan</p>
            <Link to='/surprise'><SurpriseButton>Claim Val Points</SurpriseButton></Link>
          </>
        )}/>
        <Route exact path='/surprise' component={Surprise}/>
      </div>
    </Router>
  );
}

export default App;
