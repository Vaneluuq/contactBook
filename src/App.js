import React, {useState} from 'react';
import './App.css';
import ContactRow from './components/ContactRow';
import ContactsBanner from './components/ContactsBanner';
import CreateContact from './components/CreateContact';
import FavoriteSection from './components/FavoriteSection';

function App() {

  const [favorite, setfavorite] = useState(true)

  const [contactItems, setContactItems] = useState([{
    name: "Julian Fonseca",
    phone: 0,
    email: "juli@gmail.com",
    favorite: false
  },{
    name: "Andres Sanchez",
    phone: 1,
    email: "andres@gmail.com",
    favorite: true
  }
])

const toggleFavorite = (contact) => 
setContactItems(contactItems.map(
  c => (c.name === contact.name ? {...c,favorite: !c.favorite} : c)
))

const contactTableRows = (favoriteValue) => 
 contactItems
 .filter(contact => contact.favorite === favoriteValue)
 .map(contact => (
   <ContactRow
   key= {contact.name}
   contact = {contact}
   toggleFavorite={toggleFavorite}
   />
 ))


 const createNewContact = (contactName, contactPhone, contactEmail) => {
   if(!contactItems.find(t => t.phone === contactPhone)){
     setContactItems([...contactItems, {
       name: contactName, 
       phone: contactPhone,
       email: contactEmail,
       favorite: false
     }])
   }else{
     alert("el numero registrado ya existe en su libreta de contactos")
   }

 }

  return (
    <div>
      <ContactsBanner
      contactItems= {contactItems.length}
      />
      <CreateContact callback = {createNewContact}/>
      <table>
      <thead>
      <tr>
          <th>Nombre Completo</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Favorito</th>
        </tr>
      </thead>
      <tbody>
        {contactTableRows(false)}
        {contactTableRows(true)}
      </tbody>
      </table>
      <div>
        <FavoriteSection
        isChecked = {favorite}
        callback = {checked => setfavorite(checked)}
        />
      </div>

      {
        favorite && (
          <table>
            <thead>
              <tr>
                <th>Nombre Completo</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Favorito</th>
              </tr>
            </thead>
            <tbody>
              {contactTableRows(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;
