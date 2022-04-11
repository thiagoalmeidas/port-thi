import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Sobre from './pages/about';
import Frontend from './pages/frontend';
import Backend from './pages/backend';
import Graphics from './pages/graphics';
import Branding from './pages/branding';


function RoutesApp(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sobre" element={<Sobre />}/>
                <Route path="/frontend" element={<Frontend />}/>
                <Route path="/backend" element={<Backend />}/>
                <Route path="/graphics" element={<Graphics />}/>
                <Route path="/branding" element={<Branding />}/>
            </Routes>
        </HashRouter>
    )
}

export default RoutesApp;