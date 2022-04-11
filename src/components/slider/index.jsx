import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Slider() {
    
    return (
        <section className="p-0 position-absolute w-100 h-100 top-0">
            <div className="swiper-auto-slide swiper-container white-move" data-slider-options='{ "allowTouchMove":true, "slidesPerView":"auto", "spaceBetween": 15, "centeredSlides":true, "observer":true, "speed":1000, "pagination": { "el": null }, "scrollbar": { "el": ".swiper-scrollbar", "draggable": true, "hide": false, "snapOnRelease": true }, "autoplay": { "delay": 3000 }, "breakpoints": { "1200": { "spaceBetween": 80 }, "992": { "spaceBetween": 60 }, "768": { "spaceBetween": 30 } }, "mousewheel": { "invert":false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "navigation": { "nextEl": ".swiper-next-style2", "prevEl": ".swiper-prev-style2" }}'>
                <div className="swiper-wrapper">

                    <div className="swiper-slide cover-background" style={{ backgroundImage: "url('img/banner-experiencias-thiago3.jpg')" }}>
                        <div className="opacity-extra-medium bg-black"></div>
                        <div className="position-relative h-100">
                            <div className="absolute-middle-center w-100 text-center">
                                <div className="parallax-text">
                                    <h2 className="text-white-2 alt-font font-weight-600 parallax-text-shadow">
                                        <Link to="/sobre" className="text-white-2 text-white-2-hover" title="Sobre">Experiências</Link>
                                    </h2>
                                </div>
                            </div>
                            <span className="text-medium position-absolute bottom-50 text-light-gray w-100 text-center">
                                <Link to="/sobre" className="text-white-2 text-white-2-hover" title="Sobre">Ensinos & Formações</Link>
                            </span>
                        </div>
                    </div>

                    <div className="swiper-slide cover-background" style={{ backgroundImage: "url('img/homepage-2-slider-img-2.jpg')" }}>
                        <div className="opacity-extra-medium bg-black"></div>
                        <div className="position-relative h-100">
                            <div className="absolute-middle-center w-100 text-center">
                                <div className="parallax-text">
                                    <h2 className="text-white-2 alt-font font-weight-600 parallax-text-shadow">
                                        <Link to="/frontend" className="text-white-2 text-white-2-hover" title="FrontEnd">FrontEnd</Link>
                                    </h2>
                                </div>
                            </div>
                            <span className="text-medium position-absolute bottom-50 text-light-gray w-100 text-center">
                            <Link to="/frontend" className="text-white-2 text-white-2-hover" title="FrontEnd">Projetos & Trabalhos</Link>
                            </span>
                        </div>
                    </div>

                    <div className="swiper-slide cover-background" style={{ backgroundImage: "url('img/homepage-2-slider-img-3.jpg')" }}>
                        <div className="opacity-extra-medium bg-black"></div>
                        <div className="position-relative h-100">
                            <div className="absolute-middle-center w-100 text-center">
                                <div className="parallax-text">
                                    <h2 className="text-white-2 alt-font font-weight-600 parallax-text-shadow">
                                        <Link to="/backend" className="text-white-2 text-white-2-hover" title="BackEnd">BackEnd</Link>
                                    </h2>
                                </div>
                            </div>
                            <span className="text-medium position-absolute bottom-50 text-light-gray w-100 text-center">
                                <Link to="/backend" className="text-white-2 text-white-2-hover" title="BackEnd">Projetos & Trabalhos</Link>
                            </span>
                        </div>
                    </div>

                    <div className="swiper-slide cover-background" style={{ backgroundImage: "url('img/homepage-2-slider-img-4.jpg')" }}>
                        <div className="opacity-extra-medium bg-black"></div>
                        <div className="position-relative h-100">
                            <div className="absolute-middle-center w-100 text-center">
                                <div className="parallax-text">
                                    <h2 className="text-white-2 alt-font font-weight-600 parallax-text-shadow">
                                        <Link to="/graphics" className="text-white-2 text-white-2-hover" title="Graphics">Graphics</Link>
                                    </h2>
                                </div>
                            </div>
                            <span className="text-medium position-absolute bottom-50 text-light-gray w-100 text-center">
                                <Link to="/graphics" className="text-white-2 text-white-2-hover" title="Graphics">Projetos & Trabalhos</Link>
                            </span>
                        </div>
                    </div>

                    <div className="swiper-slide cover-background" style={{ backgroundImage: "url('img/homepage-2-slider-img-5.jpg')" }}>
                        <div className="opacity-extra-medium bg-black"></div>
                        <div className="position-relative h-100">
                            <div className="absolute-middle-center w-100 text-center">
                                <div className="parallax-text">
                                    <h2 className="text-white-2 alt-font font-weight-600 parallax-text-shadow">
                                        <Link to="/branding" className="text-white-2 text-white-2-hover" title="Branding">Branding</Link>
                                    </h2>
                                </div>
                            </div>
                            <span className="text-medium position-absolute bottom-50 text-light-gray w-100 text-center">
                            <Link to="/branding" className="text-white-2 text-white-2-hover" title="Branding">Projetos & Trabalhos</Link>
                            </span>
                        </div>
                    </div>

                   

                </div>

                <div className="swiper-pagination swiper-pagination-square swiper-pagination-black"></div>

                <div className="swiper-scrollbar d-none bg-white opacity-75 d-md-inline-block"></div>

                <div className="swiper-next-style2 text-small alt-font d-none d-md-inline-block">  
                    Próx <FaArrowRight />
                </div>

                <div className="swiper-prev-style2 text-small alt-font d-none d-md-inline-block">
                    <FaArrowLeft /> Ant
                </div>
                
            </div>
        </section>
    );
}

export default Slider;