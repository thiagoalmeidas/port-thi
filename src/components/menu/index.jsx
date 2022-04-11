import { Link } from 'react-router-dom';
import Socials from '../socials';

function Menu() {
    return (
        <div className="col text-end pe-0">
        <div className="hamburger-menu">
            <div className="btn btn-hamburger border-none">
                <button className="navbar-toggler mobile-toggle" type="button" id="open-button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="hamburger-menu-wrepper">
                <div className="hamburger-logo text-start">
                    <a href="https://thiagoalmeidas.github.io/port-thi" className="logo">
                        <img src="img/logo-white.png" alt="Thiago Almeida" width="180px"/>
                    </a>
                </div>
                <div className="btn btn-hamburger border-none">
                    <button className="close-menu close-button-menu" id="close-button"></button>
                </div>
                <div className="animation-box">
                    <div className="menu-middle">
                        <div className="menu-wrapper d-md-flex flex-md-row justify-content-center text-start h-100">
                            <div className="col-lg-8 col-md-7 d-flex align-items-center">
                                <ul className="hamburger-menu-links pt-4 mt-4 alt-font">
                                    <li><a href="https://thiagoalmeidas.github.io/port-thi">Home</a>{/*<Link to="/home" title="Home">Home</Link>*/}</li>
                                    <li><Link to="/sobre" title="Sobre">Experiencia</Link></li>
                                    <li><Link to="/" title="Backend">Backend</Link></li>
                                    <li><Link to="/" title="Frontend">Frontend</Link></li>
                                    <li><Link to="/" title="Graphics">Graphics</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-5 d-flex align-items-center social-style-3">

                                <div className="w-100">
                                    <span className="text-extra-large text-deep-pink alt-font d-block margin-15px-bottom">Estúdio Thiago Almeida</span>
                                    <span className="text-medium alt-font d-block font-weight-500 margin-15px-bottom line-height-30">São Paulo,<br/>Liberdade, Centro, SP.<br/>Whats - <a href="https://wa.me/5511946703672?text=Olá%20%20Podemos%20conversar%20sobre%20o%20seu%20trabalho">+55 (11) 94670 3672</a><br/>Email - <a href="mailto:thiago_as@hotmail.com">thiago_as@hotmail.com</a></span>
                                    <div className="separator-line-horrizontal-medium-light2 bg-deep-pink margin-25px-tb sm-margin-15px-tb d-inline-block"></div>
                                    <Socials/>                                  
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Menu;