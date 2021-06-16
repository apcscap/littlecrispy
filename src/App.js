// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Row from './components/Row';
import Card from './components/Card';
import {useState} from 'react';

function App() {

  const [isHovered, onHovered] = useState(false);

  const hover = (val) => {
    onHovered(val);
  }

  return (
    <div className="container">
      <Header/>
      <Row>
        <Card title="Hello" text="Candice" onHover={hover}/>
        <Card title="Hello" text="Candice" onHover={hover}/>
      </Row>
      <Row>
        <Card title="Hello" text="Candice" onHover={hover}/>
        <Card title="Hello" text="Candice" onHover={hover}/>
      </Row>
    </div>
  );
}

export default App;
