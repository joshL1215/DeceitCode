import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Workspace from './pages/Workspace';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/Home" />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/settings" />
        </Route>
      </Routes>
    </div>

  )
}


export default App
