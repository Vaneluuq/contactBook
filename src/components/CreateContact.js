import React, {useState} from 'react';
import styles from '../CSS/styles.module.css'
import uuid from 'react-uuid'

const CreateContact = (props) => {

    const initialValues = {
        name: '',
        phone: 0,
        email: '', 
        id : uuid()
    }

    const [data, setData] = useState(initialValues)

    const handleInputChange = (e) => {
        if(props.contactEditing === null ){
            setData({
                ...data,
                [e.target.name] : e.target.value
            })
        }else{
            props.setEdit({
                ...props.edit,
                [e.target.name] : e.target.value
            })
        }
        
    }


        const handleSubmit = (e) => {
            e.preventDefault();
            if(props.contactEditing === null ){
                props.callback(data.name, data.phone, data.email, data.id)
            }else{
                props.callback(props.id)
            }
            e.target.reset()
        }

    return ( <div className= {styles.containerForm}>
                <form onSubmit={handleSubmit} className= {styles.form}>
                <label htmlFor="Favorite">Nombre Completo</label>
                    <input
                    id="name" 
                    type="text"
                    onChange={handleInputChange}
                     name= "name"
                    //  value = {props.contactEditing === null ?  "" : data.name}
                     placeholder="Ej. Juanito Perez"
                    required
                />
                <label htmlFor="Favorite">Telefono</label>
                <input
                    id="phone" 
                    type="tel"
                    onChange={handleInputChange}
                    placeholder="Ej. 0000000"
                    name= "phone"
                    value = {props.contactEditing !== null ?  data.phone : "hola"}
                />
                <label htmlFor="Favorite">Email</label>
                <input
                    id="email" 
                    type="email"
                    onChange={handleInputChange}
                    placeholder="Ej. juanito@example.com"
                    name="email"
                    required
                    // value = {props.contactEditing === null ?  "" : data.email}
                />
                <button type="submit">{
                props.contactEditing === null ?
                "Añadir nuevo contacto" : "editar"}</button>
                </form>
            </div> );
}
 
export default CreateContact;