import './App.css'
import UserProfile from './components/UserProfile/UserProfile.jsx'
import './index.css'


function App() {
  const UserDetails = [{
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"John",
  role:"Web Developer"
},
{
  imageUrl:"https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
  name:"floyd miles",
  role:"Backend Developer"
},
{
  imageUrl:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
  name:"Bargav",
  role:"Designer"
},
{
  imageUrl:"https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
  name:"Ravi",
  role:"Tester"
}]
  return (
    <>
    <div className='list-container'>
        <h1 className='title'>Users List</h1>
        <ul>
          {UserDetails.map((eachItem)=> (
      <UserProfile UserDetails={eachItem}/>
    ))}
        </ul>
    </div>
    </>
  )
}

export default App
