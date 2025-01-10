import { useEffect } from "react";
import "./App.css";
import CriminalGuessGame from "./CriminalGuessGame";
import {
    getRemainingGuessCounts,
    resetRemainingGuessCounts,
} from "./utils/helper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    useEffect(() => {
        let remainingCounts = getRemainingGuessCounts();
        if (remainingCounts <= 0) resetRemainingGuessCounts();
        // window.location.href = "/game-over";
    });
    return (
        <>
            {/* <CriminalGuessGame /> */}
            <Router>
                <Routes>
                    <Route path="/" element={<CriminalGuessGame />} />
                    {/* <Route path="/game" element={<CriminalGuessGame />} /> */}
                    {/* <Route path="/game-over" element={<CriminalGuessGame />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
