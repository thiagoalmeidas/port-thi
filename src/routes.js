import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Sobre from './pages/about';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sobre" element={<Sobre />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;