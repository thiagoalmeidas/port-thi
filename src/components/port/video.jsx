
function Video(props) {
    return (
        <div className="row justify-content-center">
            <div className="col-12 text-center d-flex align-items-center md-margin-50px-bottom sm-margin-30px-bottom wow animate__fadeIn" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                <div className="overflow-hidden position-relative w-100">
                    <div className="opacity-medium bg-extra-dark-gray"></div>
                    <img src={props.url} className="w-100" alt={props.alt} data-no-retina="" />
                    <div className="absolute-middle-center text-center">
                        <span className="text-medium-gray text-extra-small letter-spacing-1 alt-font text-uppercase margin-20px-bottom d-block">Assistir Projeto</span>
                        <h5 className="alt-font text-white-2 w-70 md-w-100 mx-auto">{props.title}</h5>
                        <a href={props.youtube} className="popup-youtube btn btn-medium btn-transparent-white text-medium btn-rounded">Video Online <i className="fab fa-youtube icon-very-small" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;