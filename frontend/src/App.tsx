import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Client from './Components/Client/Client';
import Brief from './Components/ClientRoutes/Brief';
import Tasks from './Components/ClientRoutes/Tasks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Client/Brief" element={<Brief />} />
        <Route path="/Client/Tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
