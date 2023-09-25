import React, { useState } from 'react';
import "../../../css/main/contact.css";

const Contact = () => {
    
    const [person, setPerson] = useState({firstName: '', lastName: '', email: '', message: ''})
    const [messages, setMessage] = useState([])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({...person, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(person.firstName && person.lastName && person.email && person.message){
            const newMessage = {...person, id: new Date().getTime().toString()}
            setMessage([...messages, newMessage])
            setPerson({firstName: '', lastName: '', email: '', message: ''})
        }
        else{
            alert("Hello please enter all of the information")
        }
        console.log(messages)
        

    }


    return(
        <div className="contact-container">
            <h1 className="contact-title">Contact us</h1>
            <h6 className="contact-title">Reach out to us and let us know if there is anything we can do for you</h6>
            <form>
                <div className="contact-input">
                    <input type="text" id="fname" name="firstName" placeholder="First Name"
                    value={person.firstName}
                    onChange={handleChange}/>
                </div>
                <div className="contact-input">
                    <input type="text" id="lname" name="lastName" placeholder="Last Name" 
                    value={person.lastName}
                    onChange={handleChange}/>
                </div>
                <div className="contact-input">
                    <input type="text" id="email" name="email" placeholder="Email" 
                    value={person.email}
                    onChange={handleChange}/>
                </div>
                <div className="contact-input">
                    <textarea placeholder="Message"
                    name="message"
                    value={person.message}
                    onChange={handleChange}></textarea>
                </div>
                <div className="contact-input">
                    <button type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            {messages.map((item) => {
          const { id, firstName, lastName, email, message } = item;
          console.log("Name: " + firstName + " " + lastName)
          console.log("email: " + email)
          console.log("Message: " + message)
          
        })}
        </div>
    )
}

export default Contact