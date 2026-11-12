import { Component } from "react";
import '../index.css'
class Resume extends Component {
    state = {
        description:"",
        prevresume:""
    }

    getJobDescription = (event) => {
        const text = event.target.value;
        console.log(text);
    }

    render () {
        return(
            <div className="back">
            <div className="background">
                <div className="left">
                    <div className="job-description">
                        <p className="sub-heading"><label for="jobDescription" >Job Description</label></p>
                        <textarea rows={13} id="jobDescription" onChange={this.getJobDescription}></textarea>
                        <p className="sub-heading"><label for="previousResume">Previous Resume</label></p>
                        <textarea rows={13} id="previousResume"></textarea>
                    </div>
                </div>

                <div className="right">
                    <p className="sub-heading">Updated Resume</p>
                    <textarea id="updatedResume" rows={13}></textarea>
                </div>
            </div>
            <button className="generate-btn" onChange={this.onGenerate}>Generate</button>
            </div>
        )
    }
}

export default Resume