import Header from '../../components/header';
import Video from '../../components/port/video';
import Sumario from '../../components/port/sumario';


function Frontend() {
    return (
        <div>
            <Header />
            <section className="wow animate__fadeIn">
                <div className="p-4 justify-content-center">

                    <div className="row">
                        <div className="col-md-6">
                            <Video 
                                url='img/site-vanessa-leme-hair.jpg' 
                                title='Vanessa Leme - Hair Stylist' 
                                alt='site vanessa leme' 
                                youtube='https://youtu.be/hXOnhb6K_KI'
                            />                        
                        </div>
                        <div className=" col-md-6">
                            <Sumario 
                                projeto='Vanessa Leme Hair' 
                                objetivo='Graphics - BackEnd - FrontEnd' 
                                plataformas='Desktop - Mobile' 
                                stacks='HTML5 - CSS3 - REACTJS - SASS - NODEJS - EJS' 
                                estado='Em Andamento' 
                                gitlink='https://github.com/thiagoalmeidas/vanhair' 
                                gitname='github.vanhair'
                            />                             
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Frontend;