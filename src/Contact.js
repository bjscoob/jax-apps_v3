import React from "react";
import axios from "axios";

class ContactPage extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  render() {
    return (
      <form
        id="contact-form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name* : </label>
          <br />
          <input type="text" className="form-control" />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email: </label>
          <br />
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPhone1">Phone: </label>
          <br />
          <input
            type="phone"
            className="form-control"
            aria-describedby="phoneHelp"
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <br />
          <textarea className="form-control" rows="15"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
  componentDidUpdate() {}
}
export default ContactPage;
