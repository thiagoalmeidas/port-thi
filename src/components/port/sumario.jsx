
function Sumario(props) {
    return (
        <table className="table table-hover table-dark">
        <tbody>
            <tr>
                <th className='col-3'> Projeto </th>
                <td>{props.projeto}</td>
            </tr>
            <tr>
                <th scope="row"> Objetivo </th>
                <td>{props.objetivo}</td>
            </tr>
            <tr>
                <th scope="row"> Plataformas </th>
                <td>{props.plataformas}</td>
            </tr>                                    
            <tr>
                <th scope="row"> Stacks </th>
                <td>{props.stacks}</td>
            </tr>                                  
            <tr>
                <th scope="row"> Estado </th>
                <td>{props.estado}</td>
            </tr>
            <tr>
                <th scope="row"> Site </th>
                <td> <a href={props.site}>{props.site}</a></td>
            </tr> 
            <tr>
                <th scope="row"> GitHub </th>
                <td> <a href={props.gitlink}>{props.gitname}</a></td>
            </tr>         

        </tbody>
    </table>
    );
}

export default Sumario;