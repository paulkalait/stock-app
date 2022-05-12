import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import News  from './components/News';
import Stats from './components/Stats';


function App() {
  return (
    <div className="App">
      {/* Header */}
    
      <div className='app__header'>
      <Header />
      </div>
      {/* body */}
      <div className='app__body'>
        <div className='app__container'>
        <News />
      {/* stats */}
        <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
