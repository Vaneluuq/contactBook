import React from 'react';
import styles from '../CSS/styles.module.css';


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
            <td>
                <button className={styles.buttonEdit} 
                        onClick={()=> props.edit(props.contact.id)}>
                            <i className="fas fa-user-edit"></i>
                </button>
            </td>
            <td>
                <button className={styles.buttonDelete} 
                        onClick={() => props.delete(props.contact.name)}>
                            <i className="far fa-trash-alt"></i>
                </button>
            </td>
        </tr>
       )
}
 
export default ContactRow;