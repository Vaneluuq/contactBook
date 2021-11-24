import React from 'react';

const ContactRow = (props) => {
    return(
        <tr key={props.contact.name}>
            <td>{props.contact.name}</td>
            <td>{props.contact.phone}</td>
            <td>{props.contact.email}</td>
            <td>
                <input 
                    type="checkbox" 
                    checked={props.contact.favorite} 
                    onChange={() => props.toggleFavorite(props.contact)}/>
            </td>
        </tr>
       )
}
 
export default ContactRow;