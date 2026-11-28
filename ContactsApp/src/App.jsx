import { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import ContactItem from './components/ContactItem'

const initialContactsList = [
  {
    id:uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]
class App extends Component {
  state = {
    contactList:initialContactsList,
    name:"",
    mobileNumber:0,
  }

  onSubmit = (event) => {
    event.preventDefault()
    const {name,mobileNo} = this.state;
    const newContact = {
      id:uuidv4(),
      name,
      mobileNo,
      isFavorite:false
    }
    this.setState(prevState=>({
      contactList:[...prevState.contactList,newContact],
      name:"",
      mobileNo:""
    }))
  }
  onChangeName = (event) => {
    const name = event.target.value;

    this.setState({
      name:name
    })
  }
  onChangemobileNumber = (event) => {
    const mobileNo = event.target.value;

    this.setState({
      mobileNo:mobileNo
    })
  }
  onClickFavourite = (id) => {
     this.setState(prevState => ({
    contactList: prevState.contactList.map(contact => {
      if (contact.id === id) {
        return { ...contact, isFavorite: !contact.isFavorite }
      }
      return contact
    }),
  }))
  }
  render() {
    const {contactList} = this.state;
    return(
      <>
      <h1 className='heading'>Contacts App</h1>
    <form className='form' onSubmit={this.onSubmit}>
      <input onChange={this.onChangeName} className='input' type='text' placeholder='Name'/>
      <input onChange={this.onChangemobileNumber} className='input' type='number' placeholder='Mobile number'/>
      <button className='button' type='submit'>Add</button>
    </form>
    <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Mobile Number</p>
            </li>
    {contactList.map(eachContact=> {
      return <ContactItem initialContactsList = {eachContact} onClickFavourite={this.onClickFavourite}/>
    })}
    </ul>
    </>
    )
  }
}


export default App
