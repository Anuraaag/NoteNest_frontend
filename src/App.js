import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NoteState'
// import AlertState from './context/alert/AlertState'
import Alert from './components/Alert'

function App() {

  return (
    <>
      {/* <AlertState> */}
        <NoteState>
          <Router>
            <Navbar title="NoteNest" />
            <Alert />
            <div className='container'>
              <Routes>
                <Route exact path="/" element={<Home />} ></Route>
                <Route exact path="/about" element={<About />} ></Route>
              </Routes>
            </div>
          </Router>
        </NoteState>
      {/* </AlertState> */}

    </>
  );
}

export default App