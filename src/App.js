import React, {useState, useEffect} from 'react';
import styles from './CSS/styles.module.css';
import ContactRow from './components/ContactRow';
import ContactsBanner from './components/ContactsBanner';
import CreateContact from './components/CreateContact';
import FavoriteSection from './components/FavoriteSection';
import Table from './components/Table';
import uuid from 'react-uuid';
import swal from 'sweetalert';



function App() {

  const [contactItems, setContactItems] = useState([{
    name: "Julian Fonseca",
    phone: 0,
    email: "juli@gmail.com",
    favorite: false,
    id: uuid()
  },{
    name: "Andres Sanchez",
    phone: 1,
    email: "andres@gmail.com",
    favorite: true, 
    id: uuid()
  }
])

// identifica si se ha marcado un elemento como favorito
const [favorite, setfavorite] = useState(false)

//Almacena el valor del id del contacto actual para poder editarlo
const [contactEditing, setContactEditing] = useState(null);

//Se establecen los valores que tendra el contacto tras un update
const initialValues =  {
  name: '',
  phone: 0,
  email: ''
}
const [edit, setEdit] = useState(initialValues);


// Funcion para crear un nuevo contacto 
const createNewContact = (contactName, contactPhone, contactEmail) => {
  if(!contactItems.find(t => t.phone === contactPhone)){
    setContactItems([...contactItems, {
      name: contactName, 
      phone: contactPhone,
      email: contactEmail,
      favorite: false, 
      id: uuid()
    }])
  }else{ 
    alert("El numero registrado ya existe en su libreta de contactos")
  }
}

// Funcion para actualizar un contacto
  function submitEdits() {
    let updatedContacts = [...contactItems]
    updatedContacts.map((contact) => {
      if (contact.id === contactEditing) {
        contact.name = edit.name;
        contact.phone = edit.phone;
        contact.email = edit.email;
      }
      return contact
    });
    setContactItems(updatedContacts);
    setContactEditing(null);
    setEdit(initialValues)
  }


  
// Funcion que marac un contacto como favorito
const toggleFavorite = (contact) => 
setContactItems(contactItems.map(
  c => (c.name === contact.name ? {...c,favorite: !c.favorite} : c)
))

// Funcion para borrar un contacto
const deleteContact = contactName => {
  const removeContact = [...contactItems].filter(contact => contact.name !== contactName)
  swal({
    title: "Se eliminará tu tarea",
    text: "Quieres continuar?",
    icon: "warning",
    buttons: ["No", "Si"]
    }).then(respuesta => {
    if(respuesta){
         setContactItems(removeContact)
  }
})
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
   edit ={setContactEditing}
   />
 ))

 const contactTableRows = () => 
 contactItems.map(contact => (
   <ContactRow
   key= {contact.name}
   contact = {contact}
   toggleFavorite={toggleFavorite}
   delete = {deleteContact}
   edit = {setContactEditing}
   />
 ))





 useEffect(()=> {
   let data = localStorage.getItem("contacts")
   if(data != null){
     setContactItems(JSON.parse(data))
   }else{
     setContactItems([
      {
        name: "Julian Fonseca Example",
        phone: 0,
        email: "juli@gmail.com",
        favorite: false, 
        id:uuid()
      },{
        name: "Andres Sanchez Example",
        phone: 1,
        email: "andres@gmail.com",
        favorite: true, 
        id: uuid()
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
      {
        contactEditing !== null ? (
          <CreateContact
                callback = {submitEdits}
                contactEditing = {contactEditing}
                setEdit = {setEdit}
                edit = {edit}
                />
        ):(
          
          <CreateContact 
          callback = {createNewContact}
          contactEditing = {contactEditing}
          setEdit = {setEdit}
          edit = {edit}
        />
        )
      }







  
      

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


