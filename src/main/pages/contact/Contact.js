import React from 'react';

const Contact = () => {
    return(
        <div className="contact-container">
            <h1 className="contact-title">Contact us</h1>
            <h6 className="contact-title">Reach out to us and let us know if there is anything we can do for you</h6>
            <form>
                <div className="contact-input">
                    <input type="text" id="fname" name="firstname" placeholder="First Name" />
                </div>
                <div className="contact-input">
                    <input type="text" id="lname" name="lastname" placeholder="Last Name" />
                </div>
                <div className="contact-input">
                    <textarea placeholder="Message"></textarea>
                </div>
                <div className="contact-input">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default Contact