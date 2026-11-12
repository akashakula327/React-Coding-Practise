import {Component} from 'react'
import UserProfile from './UserProfile.jsx'
import '../index.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

class List extends Component {
    state= {
        searchinput:"",
        userDetailsList:initialUserDetailsList
    }
    onSearchInput = (event) => {
        this.setState({
            searchinput:event.target.value
        })
    }
    deleteUser = (uniqueNo)=> {
        const{userDetailsList} = this.state;
        const filtereduserDetailsList = userDetailsList.filter(each=> {
            return each.uniqueNo!=uniqueNo
        })
        this.setState({
            userDetailsList:filtereduserDetailsList
        })
    }
    render () {
        const {searchinput,userDetailsList} = this.state;
        const searchedUserDataList = userDetailsList.filter(each=> {
            return each.name.toLowerCase().includes(searchinput)
        })
        return(
            <div className='background'>
                <h1 className='heading'>User List Application</h1>
                <input type='search' className='search-input' onChange={this.onSearchInput}/>
                {searchedUserDataList.map(each=> {
                    return(
                        <UserProfile userDetailsList={each} deleteUser={this.deleteUser} />
                    )
                })}
            </div>
        )
    }
}

export default List;