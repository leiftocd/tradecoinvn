import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home.jsx';
import LoadingPage from "./pages/loadingPage/loadingPage.jsx";
function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loadingPage" element={<LoadingPage />} />
          </Routes>
        </Router>
    </>
  )
}
export default App
