import React from 'react';

const ContactsBanner = (props) => {
    return ( 
        <h4>
            Libreta de contactos ({props.contactItems} contactos)
        </h4>
     );
}
 
export default ContactsBanner;