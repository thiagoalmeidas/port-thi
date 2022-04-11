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
            <section className="p-0 wow animate__fadeIn bg-light-gray" id='expertise'>
                <div className="container-fluid">
                    {/*col comeca aqui*/}
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col wow animate__fadeInRight padding-five-tb padding-five-lr md-padding-nine-half-tb xs-padding-15px-lr xs-padding-50px-tb">
                            <h5 className="text-center border-bottom border-primary pb-1 fs-5 text-primary"><strong>Cursos/Formações</strong></h5>
                            <div className="row row-cols-1 row-cols-xl-2 row-cols-lg-1 row-cols-md-2 row-cols-sm-2">
                                {/* start feature box item */}
                                <div className="col margin-six-bottom md-margin-40px-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div className="row">
                                        <div className="col-12 col-lg-3 text-center">
                                            <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">01</h3>
                                        </div>
                                        <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Desenvolvedor FullStack</span>
                                            <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Recode 540hs (Set/21 a Abr/22)</span>
                                            <p className="d-inline-block w-90 xl-w-95">Desenvolvimento de software, foco em backend e frontend, softskills e hardskills</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div className="col margin-six-bottom md-margin-40px-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div className="row">
                                        <div className="col-12 col-lg-3 text-center">
                                            <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">02</h3>
                                        </div>
                                        <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Trilhas Fundamentar e Conectar (FullStack)</span>
                                            <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Rocketseat (2021)</span>
                                            <p className="d-inline-block w-90 xl-w-95">Curso FullStack 420 aulas 24 hrs, conceitos intermediários sobre Javascript, NodeJS, React, ExpressJS, EJS, Responsividade ...</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div className="col margin-six-bottom md-margin-40px-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div className="row">
                                        <div className="col-12 col-lg-3 text-center">
                                            <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">03</h3>
                                        </div>
                                        <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Designer Gráfico</span>
                                            <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Escola de Artes Pan Amricana (2007/2010)</span>
                                            <p className="d-inline-block w-90 xl-w-95">Comunicação visual e bases do ambiente digital, criação, design e direção de arte.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                
                                {/* start feature box item */}
                                <div className="col md-margin-40px-bottom lg-margin-six-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div className="row">
                                        <div className="col-12 col-lg-3 text-center">
                                            <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">04</h3>
                                        </div>
                                        <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Javascript Avançado</span>
                                            <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Udemy (2021)</span>
                                            <p className="d-inline-block w-90 xl-w-95">Curso do intermediário ao avançado com duração de 688 aulas – 97 hrs</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div className="col last-paragraph-no-margin text-center text-md-start">
                                    <div className="row">
                                        <div className="col-12 col-lg-3 text-center">
                                            <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">05</h3>
                                        </div>
                                        <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Robô de investimentos</span>
                                            <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Udemy (2021)</span>
                                            <p className="d-inline-block w-90 xl-w-95">Curso de criação de robô de investimentos focado na plataforma MetaTrader utilizando a linguagem MQL5 81 aulas – 6hrs</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div className="col last-paragraph-no-margin text-center text-md-start">
                                    <div className="row">
                                        <div className="col-12 col-lg-3 text-center">
                                            <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">06</h3>
                                        </div>
                                        <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Git e Github</span>
                                            <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Udemy (2021)</span>
                                            <p className="d-inline-block w-90 xl-w-95">Versionamento utilizando o git 30 aulas – 2 hrs</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                            </div>
                        </div>


                        <div className="col wow animate__fadeInRight padding-five-tb padding-five-lr md-padding-nine-half-tb xs-padding-15px-lr xs-padding-50px-tb">
                        <h5 className="text-center border-bottom border-primary pb-1 fs-5 text-primary"><strong>Trabalhos/Experiências</strong></h5>
                            <div className="row row-cols-1 row-cols-xl-2 row-cols-lg-1 row-cols-md-2 row-cols-sm-2">
                                {/* start feature box item */}
                                <div className="col margin-six-bottom md-margin-40px-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div className="row">
                                        <div className="col-12 col-lg-3 text-center">
                                            <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">01</h3>
                                        </div>
                                        <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Murb - Branding</span>
                                            <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Sócio Proprietário (2011/2019)</span>
                                            <p className="d-inline-block w-90 xl-w-95">Designer de estampas, Desenvolvedor Web, Modelista, Marketing, Produção de roupas e ensaios fotográficos para moda.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div className="col margin-six-bottom md-margin-40px-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div className="row">
                                        <div className="col-12 col-lg-3 text-center">
                                            <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">02</h3>
                                        </div>
                                        <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Estamper - Uniformes</span>
                                            <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Sócio Proprietário (2008 a 2011)</span>
                                            <p className="d-inline-block w-90 xl-w-95">Coordenação de equipes para confecção de uniformes escolares e promocionais.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div className="col margin-six-bottom md-margin-40px-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div className="row">
                                        <div className="col-12 col-lg-3 text-center">
                                            <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">03</h3>
                                        </div>
                                        <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">AdonaiRicci - Gráfica</span>
                                            <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Designer Gráfico, operador de plotter (2006 a 2007)</span>
                                            <p className="d-inline-block w-90 xl-w-95">Criação de layouts para impressão de banners e adesivos, operar plotter de impressão.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                
                                {/* start feature box item */}
                                <div className="col md-margin-40px-bottom lg-margin-six-bottom last-paragraph-no-margin text-center text-md-start">
                                    <div className="row">
                                        <div className="col-12 col-lg-3 text-center">
                                            <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">04</h3>
                                        </div>
                                        <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                                            <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">Proassp - Assessoria e Projetos</span>
                                            <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">Desenhista Projetista (2004 a 2006)</span>
                                            <p className="d-inline-block w-90 xl-w-95">Desenhista Projetista de impermeabilização, desenho de arquitetura e engenharia civil.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end feature box item */}
                                
                            </div>
                        </div>


                    </div>
                     {/*col termina aqui*/}
                     
                </div>
            </section>
            {/* end information section */}

            <section className="wow animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 col-md-10 text-center">
                            <h5 className="alt-font text-primary font-weight-600 margin-5px-bottom">Tecnologia/Pensamentos</h5>
                            <h5 className="alt-font font-weight-300">“Temo o dia em que a tecnologia irá superar a nossa interação humana. O mundo irá ter uma geração de idiotas”</h5>
                            <span className="text-uppercase text-extra-small alt-font letter-spacing-3 text-medium-gray">Albert Einstein</span>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Home;
