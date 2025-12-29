import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import WesJobAI from './pages/WesJobAI';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/wesjobai" element={<WesJobAI />} />
      </Routes>
    </Router>
  );
};

export default App;
