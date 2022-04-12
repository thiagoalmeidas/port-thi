import Header from '../../components/header';
import Video from '../../components/port/video';
import Sumario from '../../components/port/sumario';


function Backend() {
    return (
        <div>
            <Header />
            <section className="wow animate__fadeIn">
                <div className="p-4 justify-content-center">

                    <div className="row">
                        <div className="col-md-6">
                            <Video 
                                url='img/site-andor.jpg' 
                                title='Andor - Refugiados' 
                                alt='Projeto Andor Refugiados' 
                                youtube='https://www.youtube.com/watch?v=pNamBOfJwiw'
                            />                        
                        </div>
                        <div className=" col-md-6">
                            <Sumario 
                                projeto='Andor - Refugiados' 
                                objetivo='Graphics - BackEnd - FrontEnd' 
                                plataformas='Desktop - Mobile' 
                                stacks='JAVA - SPRINGBOOT - CSHARP - DOT.NET - SQLSERVER' 
                                estado='Trabalho em grupo - Pronto' 
                                gitlink='https://github.com/squad46/ANDOR-4.0' 
                                gitname='github.andor'
                                site='https://projetoandor.azurewebsites.net/'
                            />                             
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Backend;