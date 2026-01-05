import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Resume from './pages/Resume'
import WesJobAI from './pages/WesJobAI'
import Faqs from './pages/Faqs'
import Downloads from './pages/Downloads'
import { Toaster } from 'react-hot-toast'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/wesai" element={<WesJobAI />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
