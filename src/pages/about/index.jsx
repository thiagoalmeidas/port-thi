import Header from '../../components/header';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import Stackgraph from '../../components/stack/graph';
import Stackfront from '../../components/stack/front';
import Stackback from '../../components/stack/back';
import Experience from '../../components/card/experience';


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
                                    Olá, sou Desenvolvedor FullStack formado pela RecodePro.
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


            <section className="wow p-4 animate__fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 wow p-4 animate__fadeIn">
                            <div className="position-relative icon-with-paragraph">
                                <span className="text-deep-pink position-absolute left-0 top-0 alt-font special-char-extra-large d-none d-lg-block">*</span>
                                <h5 className="font-weight-300 fs-4 w-90 padding-nineteen-left lg-padding-twenty-left lg-w-100 md-no-padding-left sm-margin-five-bottom">
                                Sou orientado por ideias diferentes e únicas, trabalhando com um forte foco na experiência do usuário. meus projetos devem envolver seu público com simplicidade e robustes, sempre me preocupando com as condicoes do frontend e backend, minhas qualificações me permitem navegar pelo lado cliente e servidor.
                                </h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>  

            <section className="wow animate__fadeIn bg-white py-5">
                <div className="container">
                <h5 className="text-center border-bottom border-primary pb-1 fs-5 text-primary"><strong>Stacks</strong></h5>
                    <div className="row font-weight-500">

                        
                        <div className="col-12 col-xl-4 col-lg-5 offset-lg-1 offset-xl-0 col-md-6 wow animate__fadeIn last-paragraph-no-margin" data-wow-delay="0.2s">
                            <h4 className="m-2 fs-5"><strong>FrontEnd</strong></h4>
                            <div className="d-flex flex-wrap gap-2">
                                <Stackfront stackfront='HTML5'/>
                                <Stackfront stackfront='CSS3'/>
                                <Stackfront stackfront='SASS'/>
                                <Stackfront stackfront='BOOTSTRAP'/>
                                <Stackfront stackfront='JAVASCRIPT'/>
                                <Stackfront stackfront='REACTJS'/>
                                <Stackfront stackfront='EJS'/>
                           
                            </div>
                        </div>

                        <div className="col-12 col-xl-4 col-lg-5 offset-lg-1 offset-xl-0 col-md-6 wow animate__fadeIn last-paragraph-no-margin" data-wow-delay="0.2s">
                            <h4 className="m-2 fs-5"><strong>BackEnd</strong></h4>
                            <div className="d-flex flex-wrap gap-2">
                                <Stackback stackback='JAVA / SPRINGBOOT'/>
                                <Stackback stackback='CSHARP / DOT.NET'/>
                                <Stackback stackback='NODEJS'/>
                                <Stackback stackback='EXPRESSJS'/>
                                <Stackback stackback='MYQSL'/>
                                <Stackback stackback='MONGODB'/>
                            </div>             
                        </div>

                        <div className="col-12 col-xl-4 col-lg-5 offset-lg-1 offset-xl-0 col-md-6 wow animate__fadeIn last-paragraph-no-margin" data-wow-delay="0.2s">
                            <h4 className="m-2 fs-5"><strong>Graphics</strong></h4>
                            <div className="d-flex flex-wrap gap-2">
                                <Stackgraph stackgraph='FIGMA'/>
                                <Stackgraph stackgraph='PHOTOSHOP'/>
                                <Stackgraph stackgraph='ILLUSTRATOR'/>               
                            </div>                         
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
                                <Experience num='01' title='Desenvolvedor FullStack' subtitle='Recode 540hs (Set/21 a Abr/22)' desc='Desenvolvimento de software, foco em backend e frontend, softskills e hardskills'/>
                                <Experience num='02' title='Trilhas Fundamentar e Conectar (FullStack)' subtitle='Rocketseat (2021)' desc='Curso FullStack 420 aulas 24 hrs, conceitos intermediários sobre Javascript, NodeJS, React, ExpressJS, EJS, Responsividade ...'/>
                                <Experience num='03' title='Designer Gráfico' subtitle='Escola de Artes Pan Amricana (2007/2010)' desc='Comunicação visual e bases do ambiente digital, criação, design e direção de arte.'/>
                                <Experience num='04' title='Javascript Avançado' subtitle='Udemy (2021)' desc='Curso do intermediário ao avançado com duração de 688 aulas – 97 hrs'/>                              
                                <Experience num='05' title='Robô de investimentos' subtitle='Udemy (2021)' desc='Curso de criação de robô de investimentos focado na plataforma MetaTrader utilizando a linguagem MQL5 81 aulas – 6hrs'/>
                                <Experience num='06' title='Git e Github' subtitle='Udemy (2021)' desc='Versionamento utilizando o git 30 aulas – 2 hrs'/>                                
                            </div>
                        </div>

                        <div className="col wow animate__fadeInRight padding-five-tb padding-five-lr md-padding-nine-half-tb xs-padding-15px-lr xs-padding-50px-tb">
                        <h5 className="text-center border-bottom border-primary pb-1 fs-5 text-primary"><strong>Trabalhos/Experiências</strong></h5>
                            <div className="row row-cols-1 row-cols-xl-2 row-cols-lg-1 row-cols-md-2 row-cols-sm-2">
                                <Experience num='01' title='Murb - Branding' subtitle='Sócio Proprietário (2011/2019)' desc='Designer de estampas, Desenvolvedor Web, Modelista, Marketing, Produção de roupas e ensaios fotográficos para moda.'/>
                                <Experience num='02' title='Estamper - Uniformes' subtitle='Sócio Proprietário (2008 a 2011)' desc='Coordenação de equipes para confecção de uniformes escolares e promocionais.'/>                              
                                <Experience num='03' title='AdonaiRicci - Gráfica' subtitle='Designer Gráfico, operador de plotter (2006 a 2007)' desc='Criação de layouts para impressão de banners e adesivos, operar plotter de impressão.'/>
                                <Experience num='04' title='Proassp - Assessoria e Projetos' subtitle='Desenhista Projetista (2004 a 2006)' desc='Desenhista Projetista de impermeabilização, desenho de arquitetura e engenharia civil.'/>
                            </div>
                        </div>

                    </div>
                     {/*col termina aqui*/}
                     
                </div>
            </section>
            {/* end information section */}

            <div className="flex-fill bg-primary">
                <h4 className="fs-5 text-center font-weight-600"><a className="text-white" href="img/CV-Thiago de Almeida Silva.pdf" download="Curriculo Thiago">Baixe meu Currículo <FaCloudDownloadAlt/></a></h4>
            </div>

            <section className="wow animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 col-md-10 text-center">
                            <h5 className="alt-font text-primary font-weight-600 margin-5px-bottom">Tecnologia/Pensamentos</h5>
                            <h5 className="alt-font font-weight-400">“Só por que alguma coisa não faz o que você planejou que ela fizesse não quer dizer que ela seja inútil”</h5>
                            <span className="text-uppercase text-extra-small alt-font letter-spacing-3 text-medium-gray">Thomas Edison</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
