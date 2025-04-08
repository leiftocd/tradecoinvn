import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home.jsx';
import LoadingPage from "./pages/loadingPage/loadingPage.jsx";
import { HelmetProvider } from 'react-helmet-async';
function App() {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:slug" element={<LoadingPage />} />
                </Routes>
            </Router>
        </HelmetProvider>
    )
}
export default App
