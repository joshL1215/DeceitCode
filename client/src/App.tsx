import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Workspace from './pages/Workspace';
import Problems from './pages/Problems';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/Home" />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/settings" />
        </Route>
      </Routes>
    </div>

  )
}


export default App
