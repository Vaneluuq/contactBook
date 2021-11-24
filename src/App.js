import React, {useState, useEffect} from 'react';
import styles from './CSS/styles.module.css';
import ContactRow from './components/ContactRow';
import ContactsBanner from './components/ContactsBanner';
import CreateContact from './components/CreateContact';
import FavoriteSection from './components/FavoriteSection';
import Table from './components/Table';

function App() {

  const [favorite, setfavorite] = useState(false)

  const [contactItems, setContactItems] = useState([{
    name: "Julian Fonseca",
    phone: 0,
    email: "juli@gmail.com",
    favorite: false,
  },{
    name: "Andres Sanchez",
    phone: 1,
    email: "andres@gmail.com",
    favorite: true, 
  }
])

const toggleFavorite = (contact) => 
setContactItems(contactItems.map(
  c => (c.name === contact.name ? {...c,favorite: !c.favorite} : c)
))

const deleteContact = contactName => {
  const removeContact = [...contactItems].filter(contact => contact.name !== contactName)
  alert("Se eliminara tu contacto")
  setContactItems(removeContact)
  }


 

const contactTableRowsFavorite = (favoriteValue) => 
 contactItems
 .filter(contact => contact.favorite === favoriteValue)
 .map(contact => (
   <ContactRow
   key= {contact.name}
   contact = {contact}
   toggleFavorite={toggleFavorite}
   delete = {deleteContact}

   />
 ))

 const contactTableRows = () => 
 contactItems.map(contact => (
   <ContactRow
   key= {contact.name}
   contact = {contact}
   toggleFavorite={toggleFavorite}
   delete = {deleteContact}
 
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
     alert("El numero registrado ya existe en su libreta de contactos")
   }
 }



 useEffect(()=> {
   let data = localStorage.getItem("contacts")
   if(data != null){
     setContactItems(JSON.parse(data))
   }else{
     setContactItems([
      {
        name: "Julian Fonseca example",
        phone: 0,
        email: "juli@gmail.com",
        favorite: false, 
      },{
        name: "Andres Sanchez example",
        phone: 1,
        email: "andres@gmail.com",
        favorite: true
      }
     ])
     setfavorite(true)
   }
 }, [])

 useEffect(() => {
   localStorage.setItem('contacts', JSON.stringify(contactItems))
 }, [contactItems])

  return (
    <div className= {styles.container}>
      <ContactsBanner contactItems= {contactItems.length}/>
      <CreateContact callback = {createNewContact}/>
      <Table function = {contactTableRows()}/>
      <div>
        <FavoriteSection
        isChecked = {favorite}
        callback = {checked => setfavorite(checked)}
        />
      </div>

      {
        favorite && (
         <Table function = {contactTableRowsFavorite(true)}/>
        )
      }
    </div>
  );
}

export default App;
