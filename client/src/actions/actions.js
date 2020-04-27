import axios from "axios"
import {GET_CONTACTS} from "./actionsTypes"
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

export const getContacts=()=>dispatch=>{
    axios.get("/contact-list").then(res=>
        dispatch({
            type:GET_CONTACTS,
            payload:res.data
        }))
}



export const handleDelete=(id, name)=>dispatch=>{
    axios.delete(`/contact-list/${id}`).then(res=>
     dispatch(getContacts())
     ).then(toaster.notify("contact of " + name +" is deleted"))
     
        
 }


 export const addContact =(newContact) => dispatch=>{
     axios.post('/contact-list', newContact).then(res=>dispatch(getContacts()))
 }

export const editContact=(id, newContact) => dispatch=>{
    axios.put(`/contact-list/${id}`,newContact).then(res=>dispatch(getContacts()))
}
