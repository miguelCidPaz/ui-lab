export const Info = ({data}) => {
    
    if(data === null || data === undefined){
        return <div>cargando...</div>
    }

    return (
        <div>
            <p>Nombre dado al componente dentro de la aplicacion: {data.name}  </p>
            <p>Lugares donde se usa este componente: {data.useIn}</p>
            <div>
                <p>EndPoint:</p>
                <p>status del endpoint: {data.endpoint.status}</p>
                <p>direccion endpoint: {data.endpoint.direction} </p>
                <div>
                    <p>Ejemplo JSON de respuesta</p>
                    <p> {data.endpoint.objeto} </p>
                </div>
            </div>

        </div>
    )
}