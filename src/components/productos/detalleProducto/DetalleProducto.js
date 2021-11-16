import React from 'react';
import { useParams } from 'react-router';
import { bebidas, guajalotas, tamales } from '../../../helpers/url';
import { useGetId } from '../../../hooks/useGetId';
import LogoCarrito from '../../Varios/LogoCarrito';
import Vertor from '../../vector/Vertor';
import { DetalleProductoDiv, DetalleProductoDivCr, DetalleProductoImg } from './DetalleStyle';


const Detalleproducto = () => {
    let { id, producto } = useParams();
    let path = ""; //almacenamos la url que le enviamos a la peticion 
    if (producto === "guajolotas") { //serie de if para validar que que producto debemos buscar
        path = guajalotas
    }
    else if (producto === "bebidas") {
        path = bebidas
    }
    else if (producto === "tamales") {
        path = tamales
    }

    let { data, error } = useGetId(path+id);//se realiza una consulta a la api del producto
    console.log(data);

    return (
        <div>
            <Vertor />
            <LogoCarrito/>
            
           <DetalleProductoDiv>
               <DetalleProductoImg src={data.imagen} alt={data.nombre}/>
               <DetalleProductoDivCr></DetalleProductoDivCr>
           </DetalleProductoDiv>
        
           
        </div>
    );
}

export default Detalleproducto;
