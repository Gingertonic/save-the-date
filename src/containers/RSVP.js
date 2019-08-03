
import React, { useState } from 'react';
import UserID from '../secrets';


const RSVP = () => {
   
    // const [name, status] = useState({
    //     name: "",
    //     status: "cannot"
    // })

    const [details, setDetails] = useState({
        name: "",
        status: "",
        submitted: false,
        formEmailSent: false
    });

    const handleStatusChange = e => {
        setDetails({...details, status: e.target.value})
    } 

    const handleNameChange = e => {
        setDetails({...details, name: e.target.value})
    } 

    const sendRSVP = (templateId, senderName, status) => {
        window.emailjs.send(
            'mailgun',
            templateId,
            {
                senderName,
                status
            }, UserID
          )
          .then(res => {
            setDetails({...details, formEmailSent: true})
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => {
              console.error('Failed to send feedback. Error: ', err)
              alert("That didn't come through! Try again!")
          })
      }

    const handleSubmit = e => {
        e.preventDefault();
        if(details.status === "" || details.name === "") {
            alert(`Please let us know your name and if you can come!`)
            return null;
        }

        alert(`Now chosen ${details.status}`)

        const template = "template_shuPpkdS"

        sendRSVP(
          template,
          details.name,
          details.status
        )

        setDetails({...details, name: "", status: "", submitted: true})
    }


    return (
        <div id={"rsvp"} className="interaction">
           <form className="rsvp-form" onSubmit={handleSubmit}>
                <div className="form-check">
                    <label className="checkbox">
                    I'll be there! 
                    <input
                        type="checkbox"
                        value="can"
                        checked={details.status === "can"}
                        onChange={handleStatusChange}
                        className="form-check-input"
                    />
                    <span>
                    </span>
                    </label>
                </div>

                <div className="form-check">
                    <label>
                    I hope to be there...     
                    <input
                        type="checkbox"
                        value="may"
                        checked={details.status === "may"}
                        onChange={handleStatusChange}
                        className="form-check-input"
                    />
                    </label>
                </div>

                <div className="form-check">
                    <label>
                    I can't make it. 
                    <input
                        type="checkbox"
                        value="cannot"
                        checked={details.status === "cannot"}
                        onChange={handleStatusChange}
                        className="form-check-input"
                    />
                    </label>
                </div>
                <br />
                <div id="submit-container" >
                    <div className="name-input">
                        <input
                            type="text"
                            id="name-input"
                            value={details.name}
                            placeholder="Your name(s)"
                            onChange={handleNameChange}
                            className="form-check-input"
                        />
                    </div>

                    <div className="form-group">
                        <button className="saveTheDate" type="submit">
                            <img className="saveTheDate" src="images/stamp.png" alt="save the date" />
                        </button>
                    </div>
                 </div>
            </form>

         </div>
    )
} 


export default RSVP;
