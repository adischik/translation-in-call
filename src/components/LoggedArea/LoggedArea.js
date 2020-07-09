import React from 'react';
import axios from 'axios';
import NexmoClientWidget from '../NexmoClientWidget';

class LoggedArea extends React.Component {
  constructor(){
    super();
    this.state = {
      token: "",
      username: "",
      errorMsg: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

   handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    axios.post(`http://localhost:5000/tokens/${this.state.username}`)
      .then(getTokenRes => {
        this.setState({
          token: getTokenRes.data.token,
          username: "",
          errorMsg: ""
        })
      })
      .catch(err => {
        console.log(`err`, err)
        this.setState({
          token: "",
          errorMsg: err
        })
      })
    event.preventDefault();
  }

  render() {
    const {token, errorMsg} = this.state;
    const loginForm = (<form onSubmit={this.handleSubmit}>
        <label>
          user name:
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Login" />
      </form>)

    return (
      <div>
        <h2>ClientSDK Tutorial </h2>
        { errorMsg && <div className="errorMsg" > { "errorMsg" }</div> }
        { token ? <NexmoClientWidget token={token}  /> : loginForm }
      </div>
    )

  }
}

export default LoggedArea;