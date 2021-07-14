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
import bringersinger from './singer.MOV'

function App() {

  const [isHovered, onHovered] = useState(false);

  const hover = (val) => {
    onHovered(val);
  }

  return (
    <Router basename='/littlecrispy'>
      <div className="container">
        <Route exact path='/' exact render={(props) => (
          <>
            <Header/>
            <Row>
              <Card title="Hello" text="Candice" imgPath={thegang} video={false} onHover={hover}/>
              <Card title="Hello" text="Candice" imgPath={dabestcouple} video={false} onHover={hover}/>
            </Row>
            <Row>
              <Card title="Hello" text="Candice" imgPath={thebringer} video={false} onHover={hover}/>
              <Card title="Hello" text="Candice" imgPath={bringersinger} video onHover={hover}/>
            </Row>
            <p style={{textAlign: 'center', fontStyle: 'normal', }}>If your name is Courtney "Sage" Wong you can claim this website. Must show proof of identical name with birth certificate.</p>
            <Link to='/surprise'><SurpriseButton>Click here for your radiant points</SurpriseButton></Link>
          </>
        )}/>
        <Route exact path='/surprise' component={Surprise}/>
      </div>
    </Router>
  );
}

export default App;
