import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home  from './components/Home';
import Design from '../src/components/DesignTab';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }s
          />

          <Route path="/design" element={<Design />} />


          {/* <Route path="/py" element={<Pyramid />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
