// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Row from './components/Row';
import Card from './components/Card';
import Surprise from './components/Surprise';
import Button from './components/Button';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {

  const [isHovered, onHovered] = useState(false);

  const hover = (val) => {
    onHovered(val);
  }

  return (
    <Router>
      <div className="container">
        <Route path='/' exact render={(props) => (
          <>
            <Header/>
            <Row>
              <Card title="Hello" text="Candice" onHover={hover}/>
              <Card title="Hello" text="Candice" onHover={hover}/>
            </Row>
            <Row>
              <Card title="Hello" text="Candice" onHover={hover}/>
              <Card title="Hello" text="Candice" onHover={hover}/>
            </Row>
            <p style={{textAlign: 'center', fontStyle: 'normal', }}>If your name is Courtney "Sage" Wong you can claim this website. Must show proof of identical name with birth certificate.</p>
            <Link to='/surprise'><Button>Click here for your radiant points</Button></Link>
          </>
        )}/>
        <Route path='/surprise' component={Surprise}/>
      </div>
    </Router>
  );
}

export default App;
