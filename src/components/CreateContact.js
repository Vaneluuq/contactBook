import React, {useState} from 'react';

const CreateContact = (props) => {

        const [newContactName, setNewContactName] = useState("")
        const [newContactPhone, setNewContactPhone] = useState(0)
        const [newContactEmail, setNewContactEmail] = useState("")
        
        const handleSubmit = (e) => {
            e.preventDefault();
            props.callback(newContactName, newContactPhone, newContactEmail)
            setNewContactName("")
            setNewContactPhone("")
            setNewContactEmail("")
        }

        const handleInputName = e => setNewContactName(e.target.value)
        const handleInputPhone = e => setNewContactPhone(e.target.value)
        const handleInputEmail = e => setNewContactEmail(e.target.value)

    return ( <div>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    onChange={handleInputName}
                    placeholder="Nombre Completo"
                    value= {newContactName}
                />
                <input
                    type="tel"
                    onChange={handleInputPhone}
                    placeholder="Telefono"
                    value= {newContactPhone}
                />
                <input
                    type="email"
                    onChange={handleInputEmail}
                    placeholder="Email"
                    name="email"
                    value= {newContactEmail}
                />
                <button type="submit">Añadir nuevo Contacto</button>
                </form>
            </div> );
}
 
export default CreateContact;