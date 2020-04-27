import React, { Component } from 'react';
import Card from './card'
import Form from './form'
import { connect } from 'react-redux'
import{getContacts, handleDelete, editContact, addContact} from '../actions/actions'
import '../style.scss'
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class contactList extends Component{



componentDidMount(){
    this.props.getContacts()
}


render () {
    return (
         
     <div>
       <div className="container">
        <div className="col-xs-8">
        <h1>Contact List APP</h1>
          <div className="card">
            <div className="card-body div1"> 
              <h5 className="card-title">Click this button to add a new contact!</h5>
              
             <div>  </div> 
             <button className="addButton" title="Add new contact">ADD
             <Form handleAdd={this.props.addContact} />
             </button> 
            </div>
          </div>
        </div> 
        </div>
      
<div className="frames">
    
{this.props.contacts.map((el,i)=> (
    <Card
    Key = {i}
    contact = {el}
    handleDelete={this.props.handleDelete}
    handleEdit={this.props.editContact}
    
    />
)
)}
    </div> 
    </div>

    )}}

    const mapStateToProps=(state)=>{
        return{contacts:state.contacts}
    }



export default   connect(mapStateToProps,{getContacts, handleDelete, editContact, addContact})  (contactList)