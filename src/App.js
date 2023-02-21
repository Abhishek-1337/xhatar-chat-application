import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import { AuthContext } from './store/auth-context';
import { useContext } from "react";

function App() {

    const {currentUser} = useContext(AuthContext);
    console.log(currentUser);

    const ProtectedRoute = ({children}) => {
        if(!currentUser){
            return <Navigate to="/login" />
        }
        return children;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;