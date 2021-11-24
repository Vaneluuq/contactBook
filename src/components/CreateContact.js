import React, {useState} from 'react';
import styles from '../CSS/styles.module.css'

const CreateContact = (props) => {

    const initialValues = {
        name: '',
        phone: 0,
        email: ''
    }

    const [data, setData] = useState(initialValues)

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

        const handleSubmit = (e) => {
            e.preventDefault();
            props.callback(data.name, data.phone, data.email)
            e.target.reset()
        }

    return ( <div className= {styles.containerForm}>
                <form onSubmit={handleSubmit} className= {styles.form}>
                <label htmlFor="Favorite">Nombre Completo</label>
                    <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Ej. Juanito Perez"
                    name= "name"
                />
                <label htmlFor="Favorite">Telefono</label>
                <input
                    type="tel"
                    onChange={handleInputChange}
                    placeholder="Ej. 0000000"
                    name= "phone"
                />
                <label htmlFor="Favorite">Email</label>
                <input
                    type="email"
                    onChange={handleInputChange}
                    placeholder="Ej. juanito@example.com"
                    name="email"
                />
                <button type="submit">Añadir nuevo Contacto</button>
                </form>
            </div> );
}
 
export default CreateContact;