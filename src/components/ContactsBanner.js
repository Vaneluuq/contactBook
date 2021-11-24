import React from 'react';

const ContactsBanner = (props) => {
    return ( 
        <header>
            <h2>Libreta de contactos</h2>
            <h5>Total de contactos: {props.contactItems}</h5>
        </header>
     );
}
 
export default ContactsBanner;