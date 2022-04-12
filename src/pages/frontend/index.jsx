import Header from '../../components/header'


function Frontend() {
    return (
        <div>
            <Header />
            <section className="wow animate__fadeIn">
                <div className="p-4 justify-content-center">
                    <div className="row">
                        <div className="col-md-6">

                            <div className="row justify-content-center">
                                <div className="col-12 text-center d-flex align-items-center md-margin-50px-bottom sm-margin-30px-bottom wow animate__fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                                    <div className="overflow-hidden position-relative w-100">
                                        <div className="opacity-medium bg-extra-dark-gray"></div>
                                        <img src="img/site-vanessa-leme-hair.jpg" className="w-100" alt="site vanessa leme" data-no-retina=""/>
                                            <div className="absolute-middle-center text-center">
                                                <span className="text-medium-gray text-extra-small letter-spacing-1 alt-font text-uppercase margin-20px-bottom d-block">Assistir Projeto</span>
                                                <h5 className="alt-font text-white-2 w-70 md-w-100 mx-auto">Vanessa Leme - Hair Stylist</h5>
                                                <a href="https://youtu.be/hXOnhb6K_KI" className="popup-youtube btn btn-medium btn-transparent-white text-medium btn-rounded">Video Online <i className="fab fa-youtube icon-very-small" aria-hidden="true"></i></a>
                                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=" col-md-6">
                            <table className="table table-hover table-dark">
                                <tbody>
                                    <tr>
                                        <th className='col-3'> Projeto </th>
                                        <td>Vanessa Leme Hair</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Objetivo </th>
                                        <td>Graphics - BackEnd - FrontEnd</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Plataformas </th>
                                        <td>Desktop - Mobile</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Stacks </th>
                                        <td>Figma - Photoshop - Illustrator - SQL - React</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Estado </th>
                                        <td> Em Construcao </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> GitHub </th>
                                        <td> <a href="https://github.com/thiagoalmeidas/vanhair ">github.vanhair</a></td>
                                    </tr>
                                    

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Frontend;