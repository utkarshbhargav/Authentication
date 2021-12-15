/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import FormErrors from "../FormErrors";
//import Validate from "../utility/FormValidation";
//import {Auth} from "aws-amplify";


class Register extends Component {
  // state = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmpassword: "",
  //   errors: {
  //     cognito: null,
  //     blankfield: false,
  //     passwordmatch: false
  //   }
  // }

  // clearErrorState = () => {
  //   this.setState({
  //     errors: {
  //       cognito: null,
  //       blankfield: false,
  //       passwordmatch: false
  //     }
  //   });
  // }

  // handleSubmit = async event => {
  //   event.preventDefault();

  //   // Form validation
  //   this.clearErrorState();
  //   const error = Validate(event, this.state);
  //   if (error) {
  //     this.setState({
  //       errors: { ...this.state.errors, ...error }
  //     });
  //   }

  //   // AWS Cognito integration here
  //   const {username, email, password} = this.state;
  //   try {
  //     const signUpResponse = await Auth.signUp({
  //       username, 
  //       password,
  //       attributes:{
  //         email: email
  //       }
  //     });
  //     console.log(signUpResponse);
  //     this.props.history.push("/welcome");
  //   } catch (error) {
  //     let err = null;
  //     !error.message ? err={"message": error}: err = error;
  //     this.setState({
  //       errors:{
  //         ...this.state.errors,
  //         cognito:error
  //       }
  //     })
      
  //   }
  // };

  // onInputChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  //   document.getElementById(event.target.id).classList.remove("is-danger");
  // }

  render() {
    return (
      <section>
        <div>
          <h1>Register</h1>
          <FormErrors formerrors={this.state.errors} />

          <form >
            <div >
              <p >
                <input 
                   
                  type="text"
                  
                 
                  placeholder="Enter username"
                  // value={this.state.username}
                  // onChange={this.onInputChange}
                />
              </p>
            </div>
            <div >
              <p >
                <input 
                   
                  type="email"
                  
          
                  placeholder="Enter email"
                  // value={this.state.email}
                  // onChange={this.onInputChange}
                />
                <span >
                  <i ></i>
                </span>
              </p>
            </div>
            <div >
              <p >
                <input 
                  
                  type="password"
                  
                  placeholder="Password"
                  // value={this.state.password}
                  // onChange={this.onInputChange}
                />
                <span >
                  <i></i>
                </span>
              </p>
            </div>
            <div >
              <p >
                <input 
                   
                  type="password"
                  
                  placeholder="Confirm password"
                  // value={this.state.confirmpassword}
                  // onChange={this.onInputChange}
                />
                <span >
                  <i ></i>
                </span>
              </p>
            </div>
            <div >
              <p>
                <a href="/forgotpassword">Forgot password?</a>
              </p>
            </div>
            <div >
              <p >
                <button>
                  Register
                </button>
              </p>
              
            </div>
          </form>
          
        </div>
      </section>
    );
  }
}

export default Register;