import Stackgraph from '../../components/stack/graph';


function Card(props) {
    return (
        <div>
            <div className="card card-width bg-dark">
                <img className="card-img-top" src={props.image} alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title font-weight-500 fs-5">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                <div className="d-flex m-2 flex-wrap justify-content-center gap-2">
                    <Stackgraph stackgraph={props.stack1}/>
                    <Stackgraph stackgraph={props.stack2}/>
                    <Stackgraph stackgraph={props.stack3}/>
                </div>
            </div>
        </div>
    );
}
export default Card;