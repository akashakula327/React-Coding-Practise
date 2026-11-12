import {Component} from 'react'
import '../index.css'

 class UserProfile extends Component{
  onDelete = () => {
    const {deleteUser,userDetailsList} = this.props
    const {uniqueNo} = userDetailsList
    deleteUser(uniqueNo)
    console.log(Hello)
  }
  render() {
    const {userDetailsList,deleteUser} = this.props
    const {uniqueNo,imageUrl,name,role} = userDetailsList;
    return (
      <div className='profile-card' id={uniqueNo}>
        <img src={imageUrl} className='avatar' alt='avatar-img'/>
        <h1 className='name'>{name}</h1>
        <h3 className='role'>{role}</h3>
        <button onClick={this.onDelete}>x</button>
      </div>
    )
  }
 }

 export default UserProfile