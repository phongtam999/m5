import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ContactModel from './../models/ContactModel';
import ProductModel from '../models/ProductModel';

function Contacts(props) {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    useEffect (() =>{
      ContactModel.getAll()
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        throw err;
      });
    },[]);
   
    const handleDelete = (id) => {
        ContactModel.delete(id)
          .then((res) => {
            // navigate("/");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            alert("Đã có lỗi xảy ra ");
          });
      };
    return (
      <div>
            <table class="table table-bordered">
        <thead>
            <h1 className='text align-center'>Contacts</h1>
          <button className='btn btn-light'> <Link to={"/contacts/create"}>Add</Link> </button> 
          <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Email </th>
            <th> Phone </th>
            <th> Image </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, key) => (
            <tr key={key}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td> <img width={50} src={contact.image}/> </td>
              <td>
               <button className='btn btn-warning'> <Link to={"/contacts/" + contact.id + "/edit"}>Edit</Link> </button>||
                <button className='btn btn-danger' onClick={ () => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
}

export default Contacts;