import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home.jsx';
import LoadingPage from "./pages/loadingPage/loadingPage.jsx";
import { HelmetProvider } from 'react-helmet-async';
function App() {
<<<<<<< HEAD
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<LoadingPage />} />
          </Routes>
        </Router>
    </>
  )
=======
    const helmetContext = {}
    return (
        <HelmetProvider context={helmetContext}>
            <Router>
                <Routes>
                        <Route path="/" element={<Home />} />
                            {/* <Route path="/redirect" element={<LoadingPage />} /> */}
                        <Route path="/:slug" element={<LoadingPage />} />
                </Routes>
            </Router>
        </HelmetProvider>
    )
>>>>>>> 2de6d21f5b5a32c955c6ae6599d4291125c17ff8
}
export default App
