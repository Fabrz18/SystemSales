
function ContentPrincipalItem(props) {
    return (        
        <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text"><span>Cantidad:</span> {props.cantidad}</p>
                <p className="card-text"><span>Precio:</span> {props.precio}</p>
                <p className="card-text"><span>Descripcion:</span> {props.description}</p>
        </div>
    );
}
export { ContentPrincipalItem};