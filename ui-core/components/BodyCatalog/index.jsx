import OptionCatalog from "../OptionCatalog"
import styles from './styles.module.css';

const BodyCatalog = ({navigate, catalogo}) => {

    console.log("Catalogo recibido en BodyCatalog:", catalogo);
    

    return(
        <div className={styles.body_catalog_principal}>
            {catalogo.map((element)=>{
                return <OptionCatalog key={element.name} component={element} navigate={navigate}/>
            })}
        </div>
    )

}

export default BodyCatalog