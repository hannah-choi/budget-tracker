import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Create } from "./pages/Create/Create";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='create' element={<Create />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
