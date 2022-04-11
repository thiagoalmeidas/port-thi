import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Sobre from './pages/about';


function RoutesApp(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sobre" element={<Sobre />}/>
            </Routes>
        </HashRouter>
    )
}

export default RoutesApp;