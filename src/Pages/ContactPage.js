import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import * as emailjs from "emailjs-com";
const EmailJSID = process.env.REACT_APP_EMAILJS_USERID;
const Email_address = process.env.TO_NAME;

//
class ContactPage extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
        name: "",
        email: "",
        feedback: "",
        };
    }

    handleInputChange(event) {
      event.preventDefault();
      const target = event.target;
      const name = target.name;
      const value = target.value;

      this.setState({ [name]: value });
    }

    sendMessage(event) {
        event.preventDefault();
        
        const templateParams = {
          from_name: this.state.name + " (" + this.state.email + ")",
          to_name: `${Email_address}`,
          feedback: this.state.feedback
        };
    
        emailjs
          .send("gmail", "tiffany_personal_portfolio", templateParams,`${EmailJSID}`)
          .then(
            function(response) {
              console.log("EMAIL SUCCESSFULLY SENT", response.status, response.text);
            },
            function(error) {
              console.log("EMAIL DID NOT SEND!", error);
            }
          );

        this.setState({
            name: "",
            email: "",
            feedback: ""
            });
        }

    render() {
        return (
        <Wrapper>
        <div>
            <form
            className="ui form"
            id={this.props.id}
            name={this.props.name}
            method={this.props.method}
            action={this.props.action}
            >
            <textarea
                id="name"
                name="name"
                onChange={this.handleInputChange.bind(this)}
                placeholder="your name"
                required
                value={this.state.name}
                style={{ width: "100%" }}
                rows={1}
            />
            <br />
            <textarea
                id="email"
                name="email"
                onChange={this.handleInputChange.bind(this)}
                placeholder="your email address"
                required
                value={this.state.email}
                style={{ width: "100%" }}
                rows={1}
            />
            <br />
            <textarea
                id="feedback"
                name="feedback"
                onChange={this.handleInputChange.bind(this)}
                placeholder="what would you like to chat about?"
                required
                value={this.state.feedback}
                style={{ width: "100%", height: "250px" }}
            />
            <br />
            <input
                type="button"
                value="Send"
                className="ui button"
                style={{
                fontFamily: "Amatic SC",
                fontSize: "20px",
                color: "blue"
                }}
                onClick={this.sendMessage.bind(this)}
            />
            </form>
      </div>
      </Wrapper>
    );
  };
}

export default ContactPage