import './App.css';
import { Poster, Letter } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Poster />} />
          <Route path="/letter" element={<Letter />} />
          {/* <Route path="/poster" component={Poster} /> */}
          {/* 可以继续添加更多的路由 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
