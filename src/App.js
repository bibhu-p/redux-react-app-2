import React, { useEffect, useState } from 'react';
import {Table , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './components/AddModal';
import { useSelector, useDispatch } from 'react-redux';
import {allUser  } from './redux/actions/action';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function App() {
  const [myState, setMyState] = useState(useSelector((state)=> state.crudOp))
  const reduxAllUsers = useSelector((state)=> state.crudOp);
  const dispatch = useDispatch();
  const [addModalVisible, setAddModalVisible] = useState(false);

  const [newUserData, setNewUserData] = useState(
    {
      name: "",
      email:'',
      age: '',
      phone: '',
      
    }
  )
  useEffect(()=>{
    setMyState(reduxAllUsers)
  },[reduxAllUsers])

  const clear = () => {
    setNewUserData({ ...newUserData, name: '', email: "", phone: "", age: ""})
  }
  const createModal = ()=>{
    setAddModalVisible(true)
  }
  const formSubmit = () =>{
    setAddModalVisible(false)
    dispatch(allUser(newUserData));
    clear()
  }
  const viewData=()=>{

  }
  const onDelete =()=>{

  }

  return (
    <>
    {/* MAIN View */}
    <div className='App'>
    <Button className='mt-3 ms-3 mb-3' style={{"backgroundColor":'#7ea2e9',"color":"black","border":"none"}} onClick={createModal}>Add User</Button>
    <h3 className='text-center mb-2'>USERS DATA</h3>
      <Table bordered >
        <thead>
          <tr>
            <th>SL NO</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myState.map((data, i) => 
             <tr>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.age}</td>
              <td><Button style={{"backgroundColor":"#b8ccf3", "border":"none"}} onClick={()=>viewData(i)} ><BiEditAlt color='black' /></Button><Button style={{"backgroundColor":"#b8ccf3", "border":"none", "marginLeft":"10px"}}  onClick={()=>onDelete(i)}><RiDeleteBinLine color='black' /></Button></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>

    {addModalVisible && <AddModal
      addModalVisible = {addModalVisible}
      setAddModalVisible = {setAddModalVisible}
      formSubmit = {formSubmit}
      newUserData = {newUserData}
      setNewUserData = {setNewUserData}
     />}
    </>
  )
}
export default App;