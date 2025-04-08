import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home.jsx';
import LoadingPage from "./pages/loadingPage/loadingPage.jsx";
import { HelmetProvider } from 'react-helmet-async';
function App() {
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
}
export default App
