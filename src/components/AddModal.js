import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const AddModal =(props)=>{

 return(
     
        <Modal show={props.addModalVisible} onHide={()=>props.setAddModalVisible(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
        type="text"
        name="name"
        required="required"
        placeholder="Enter name..."
        value={props.newUserData.name}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, name: e.target.value })}
        />
        <input
        type="email"
        name="email"
        required="required"
        placeholder="Enter email..."
        value={props.newUserData.email}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, email: e.target.value })}
        />
         <input
        type="text"
        name="phone"
        required="required"
        placeholder="Enter phone number..."
        value={props.newUserData.phone}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, phone: e.target.value })}
        />
        <input
        type="text"
        name="age"
        required="required"
        placeholder="Enter age..."
        value={props.newUserData.age}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, age: e.target.value })}
        />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={()=>props.setAddModalVisible(false)}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>props.formSubmit()}>
            ADD
        </Button>
        </Modal.Footer>
        </Modal>
    )
}

export default AddModal