import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";

function App() {
    const location = useLocation();
    const auth = useAuth();

    const onlyLogo = ["/login", "/signup"].includes(location.pathname);
    return (
        <main>
            <Header onlyLogo={onlyLogo} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {auth?.isLoggedIn && auth.user && (
                    <Route path="/chat" element={<Chat />} />
                )}
                {auth?.isLoggedIn && auth.user && (
                    <Route path="/chat/:id" element={<Chat />} />
                )}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default App;
