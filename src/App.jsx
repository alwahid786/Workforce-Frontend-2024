import { Suspense, lazy } from 'react'
import './styles/app.scss'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import GlobalLoader from './components/loader/GlobalLoader'
const Login = lazy(() => import('./pages/auth/Login'))

function App() {
  const loader = <GlobalLoader />

  return (
    <Router>
      <Routes>
        <Route path='/login' element={
          <Suspense fallback={loader}>
            <Login />
          </Suspense>
        } />
      </Routes>
    </Router>
  )
}

export default App
