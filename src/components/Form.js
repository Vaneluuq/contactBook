import React, {useState, useEffect} from 'react';
import { useLocalStorage } from './UseLocalStorage';

const FormContacts = () => {

    const [data, setData] = useState({
        name: '',
        phone: 0,
        email:''
    })
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })};
    
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }


    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
      }, [data]);

 

    return ( 
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            onChange={handleInputChange}
            name="name"
            placeholder="Nombre Completo"
           />
           <input
            type="tel"
            onChange={handleInputChange}
            placeholder="Telefono"
            name="phone"
           />
           <input
            type="email"
            onChange={handleInputChange}
            placeholder="Email"
            name="email"
           />
           <button type="submit">Submit</button>
        </form>
     );
}
 
export default FormContacts;