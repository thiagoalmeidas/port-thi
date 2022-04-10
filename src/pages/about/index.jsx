import Header from '../../components/header';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';



function Home() {
    return (
        <div>
            <Header />

            <section className="wow animate__fadeIn parallax" data-parallax-background-ratio="0.5" style={{ backgroundImage: "url('img/banner-experiencias-thiago.jpg')" }}>
                <div className="container-fluid pt-5 mt-5 padding-five-lr">
                    <div className="row justify-content-end">
                        <div className="col-12 col-xxl-5 col-xl-6 col-lg-7">
                            <div className="padding-ten-all md-padding-70px-all sm-padding-25px-all bg-white box-shadow-light">
                                <FaQuoteLeft />
                                <h5 className="text-extra-dark-gray margin-50px-bottom md-margin-20px-bottom alt-font">
                                    Olá, sou Frontend Developer com conhecimento em UI/UX Designer & Backend, Formado em Desenvolvedor FullStack pela RecodePro.
                                </h5>
                                <ul className="text-medium list-style-3">
                                    <li><span className="w-30 lg-w-35 md-w-30 xs-w-35 xs-padding-5px-right d-inline-block">Nome:</span>Thiago de Almeida Silva</li>
                                    <li><span className="w-30 lg-w-35 md-w-30 xs-w-35 xs-padding-5px-right d-inline-block">Email:</span><a href="mailto:thiago_as@hotmail.com">thiago_as@hotmail.com</a></li>
                                    <li><span className="w-30 lg-w-35 md-w-30 xs-w-35 xs-padding-5px-right d-inline-block">Whats:</span><a href="https://wa.me/5511946703672?text=Olá%20%20Podemos%20conversar%20sobre%20o%20seu%20trabalho">+55 (11) 94670-3672</a></li>                        
                                    <li><span className="w-30 lg-w-35 md-w-30 xs-w-35 xs-padding-5px-right d-inline-block">Nascimento:</span>11 Abril 1987</li>
                                    <li><span className="w-30 lg-w-35 md-w-30 xs-w-35 xs-padding-5px-right d-inline-block">Nacionalidade:</span>Brasileiro</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="wow animate__fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 wow animate__fadeIn">
                            <div className="position-relative icon-with-paragraph">
                                <span className="text-deep-pink position-absolute left-0 top-0 alt-font special-char-extra-large d-none d-lg-block">*</span>
                                <h5 className="font-weight-300  w-90 padding-nineteen-left lg-padding-twenty-left lg-w-100 md-no-padding-left sm-margin-five-bottom">
                                    Sou amante da arte e a tecnologia pra mim é a nova arte, somos impactados visualmente e somos conduzidos pelas sua engrenagens ao comando do ser humano.
                                </h5>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 col-lg-5 offset-lg-1 offset-xl-0 col-md-6 wow animate__fadeIn last-paragraph-no-margin" data-wow-delay="0.2s">
                            <p className="text-medium font-weight-400 w-70 line-height-26 lg-w-100">
                                Sou orientado por ideias diferentes e únicas, trabalhando com um forte foco no design e na experiência do usuário. meus projetos devem envolver seu público com simplicidade e robustes, sempre me preocupando com as condicoes do frontend e backend, minhas qualificações me permitem navegar pelo lado cliente e servidor.
                            </p>
                            <a href="#expertise" className="inner-link text-uppercase alt-font margin-15px-top d-inline-block font-weight-600 text-deep-pink text-extra-small">Veja minhas Formacoes<FaArrowDown className="margin-5px-left text-medium position-relative top-2"/></a>
                        </div>
                    </div>
                </div>
            </section>          

            {/* start information section */}
            <section class="p-0 wow animate__fadeIn bg-light-gray" id='expertise'>
                <div class="container-fluid">
                    <div class="row row-cols-1 row-cols-lg-2">
                        <div class="col cover-background md-h-450px wow animate__fadeInLeft" style={{backgroundImage:"url('img/about-me-3.jpg')"}}></div>
                        <div class="col wow animate__fadeInRight padding-five-tb padding-five-lr md-padding-nine-half-tb xs-padding-15px-lr xs-padding-50px-tb">
                            <div class="row row-cols-1 row-cols-xl-2 row-cols-lg-1 row-cols-md-2 row-cols-sm-2">
                                {/* start feature box item */}
                                <div class="col margin-six-bottom md-margin-40px-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div class="row">
                                        <div class="col-12 col-lg-3 text-center">
                                            <h3 class="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">01</h3>
                                        </div>
                                        <div class="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span class="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">University of Design</span>
                                            <span class="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Bachelor of arts 1990</span>
                                            <p class="d-inline-block w-90 xl-w-95">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div class="col margin-six-bottom md-margin-40px-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div class="row">
                                        <div class="col-12 col-lg-3 text-center">
                                            <h3 class="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">02</h3>
                                        </div>
                                        <div class="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span class="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Design University</span>
                                            <span class="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Degree of Web Design 2003</span>
                                            <p class="d-inline-block w-90 xl-w-95">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div class="col md-margin-40px-bottom lg-margin-six-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div class="row">
                                        <div class="col-12 col-lg-3 text-center">
                                            <h3 class="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">03</h3>
                                        </div>
                                        <div class="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span class="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Master of Branding</span>
                                            <span class="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Master of branding 2006</span>
                                            <p class="d-inline-block w-90 xl-w-95">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div class="col last-paragraph-no-margin text-center text-md-start">
                                    <div class="row">
                                        <div class="col-12 col-lg-3 text-center">
                                            <h3 class="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">04</h3>
                                        </div>
                                        <div class="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span class="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">UK Design Institute</span>
                                            <span class="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Master of Graphics 2007</span>
                                            <p class="d-inline-block w-90 xl-w-95">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end information section */}

            <section className="wow animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 col-md-10 text-center">
                            <i className="fas fa-quote-left icon-small text-deep-pink d-block margin-25px-bottom"></i>
                            <h5 className="alt-font text-extra-dark-gray font-weight-600 margin-5px-bottom">Unity is strength...</h5>
                            <h5 className="alt-font text-extra-dark-gray font-weight-300">When there is teamwork and collaboration, wonderful things can be achieved.</h5>
                            <span className="text-uppercase text-extra-small alt-font letter-spacing-3 text-medium-gray">Mattie Stepanek</span>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Home;
