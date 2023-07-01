import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Client from './Components/Client/Client';
import Brief from './Components/ClientRoutes/Brief';
import Tasks from './Components/ClientRoutes/Tasks';
// import Temp from './Components/ClientRoutes/Temp';
import Members from './Components/ClientRoutes/Members';
import Doc from './Components/ClientRoutes/Doc';
import Board from './Components/ClientRoutes/Board';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Client/Brief" element={<Brief />} />
        <Route path="/Client/Tasks" element={<Tasks />} />
        {/* <Route path="/Client/Temp" element={<Temp />} /> */}
        <Route path="/Client/Board" element={<Board />} />
        <Route path="/Client/Members" element={<Members />} />
        <Route path="/Client/Doc" element={<Doc />} />
      </Routes>
    </Router>
  );
}

export default App;
