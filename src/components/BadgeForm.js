import React from 'react';

class BadgeForm extends React.Component {
<<<<<<< HEAD
  state = {
  };

  /*handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };*/

=======
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
<<<<<<< HEAD
              value={this.state.firstName}
=======
              value={this.props.formValues.firstName}
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
<<<<<<< HEAD
              value={this.state.lastName}
=======
              value={this.props.formValues.lastName}
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
<<<<<<< HEAD
              value={this.state.email}
=======
              value={this.props.formValues.email}
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
<<<<<<< HEAD
              value={this.state.jobTitle}
=======
              value={this.props.formValues.jobTitle}
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
<<<<<<< HEAD
              value={this.state.twitter}
=======
              value={this.props.formValues.twitter}
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

<<<<<<< HEAD
export default BadgeForm;
=======
export default BadgeForm;
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
