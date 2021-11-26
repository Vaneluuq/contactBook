import React from 'react';
import styles from '../CSS/styles.module.css'


const Table = (props) => {
    return (   
    <table data-testid="my-table" className= {styles.containerTable}>
        <thead>
        <tr>
            <th>Nombre Completo</th>
            <th>Teléfono</th>
            <th>Correo electrónico</th>
            <th>Favorito</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {props.function}
        </tbody>
    </table>);
}
 
export default Table;