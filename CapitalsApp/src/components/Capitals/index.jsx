import { Component } from "react";
import './index.css'

const countryAndCapitalsList = [
  {
    id: "NEW_DELHI",
    capitalDisplayText: "New Delhi",
    country: "India",
  },
  {
    id: "LONDON",
    capitalDisplayText: "London",
    country: "United Kingdom",
  },
  {
    id: "PARIS",
    capitalDisplayText: "Paris",
    country: "France",
  },
  {
    id: "KATHMANDU",
    capitalDisplayText: "Kathmandu",
    country: "Nepal",
  },
  {
    id: "HELSINKI",
    capitalDisplayText: "Helsinki",
    country: "Finland",
  },
];


class Capitals extends Component {
    state = {
        defaultCapitalText : countryAndCapitalsList[0].capitalDisplayText
    }

    onChangeCity = (event) => {
        const capital = event.target.value
        this.setState({
            defaultCapitalText:capital
        })
    }
    render() {
        const {defaultCapitalText} = this.state;
        const updateCountry = countryAndCapitalsList.filter(each=> {
            return each.capitalDisplayText===defaultCapitalText
        })
        const {country} = updateCountry[0]
        return(
            <div className="background">
                <div className="card">
                    <h1>Countries and Capitals</h1>
                    <div className="row">
                    <select className="selectItem" onChange={this.onChangeCity}>
                    {countryAndCapitalsList.map(each=> {
                        return(
                            <>
                            <option>{each.capitalDisplayText}</option>
                            </>
                        )
                    })}
                    </select>
                    <p>is capital of which country ?</p>
                    </div>
                    <p>{country}</p>
                </div>
            </div>
        )
    }
}

export default Capitals