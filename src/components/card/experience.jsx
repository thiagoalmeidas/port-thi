
function Cardexperience(props) {
    return (
        <div className="col last-paragraph-no-margin text-center text-md-start">
            <div className="row">
                <div className="col-12 col-lg-3 text-center">
                    <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">{props.num}</h3>
                </div>
                <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-start">
                    <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">{props.title}</span>
                    <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">{props.subtitle}</span>
                    <p className="d-inline-block w-90 xl-w-95">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}
export default Cardexperience;