import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Beftn from "../pages/Beftn";
import Bach from "../pages/Bach";
import Rtgs from "../pages/Rtgs";
import NoPage from "../pages/NoPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/beftn" element={<Beftn />} />
                    <Route path="bach" element={<Bach />} />
                    <Route path="rtgs" element={<Rtgs />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

// https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
