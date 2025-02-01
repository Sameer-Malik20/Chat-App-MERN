import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import MainForm from "./components/MainForm"
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div className="container-fluid bg-light text-dark d-flex justify-content-center align-items-center "style={{height: '100vh'}}>
      <Router>
        <Routes>
          <Route index element={<MainForm/>} />
          <Route path="/chat/:roomName" element={<ChatRoom/>} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
