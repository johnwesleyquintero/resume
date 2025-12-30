import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Resume from './pages/Resume'
import WesJobAI from './pages/WesJobAI'
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
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
