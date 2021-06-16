// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Row from './components/Row';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Header/>
      <Row>
        <Card/>
        <Card/>
      </Row>
      <Row>
        <Card/>
        <Card/>
      </Row>
    </div>
  );
}

export default App;
