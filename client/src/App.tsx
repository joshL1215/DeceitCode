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
          <Route path="/problems" element={<Problems />} />
          <Route path="/problems/:slug" element={<Workspace />} />
          <Route path="/settings" />
        </Route>
      </Routes>
    </div>

  )
}


export default App
