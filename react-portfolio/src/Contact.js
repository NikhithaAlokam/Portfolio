import React from 'react';
import axios from 'axios';
import fb from './fb.svg';
import insta from './insta.svg';
import mail from './mail.svg';
import git from './github.svg';
import linkedin from './linkedin.svg';

class Contact extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    handleSubmit(e){
      e.preventDefault();
      axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success') {
          alert("Message Sent."); 
          this.resetForm()
        } else if (response.data.status === 'fail') {
          alert("Message failed to send.")
        }
      })
    }
  
    resetForm(){
      this.setState({name: '', email: '', message: ''})
    }
    
    render() {
      return( <div class="Contact">
      <div Class="contactheader h1 text-center pt-5 pb-5"><span class=" text-primary">Contact </span><span class=" text-secondary">Me</span></div>
       
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control pl-auto pr-auto" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control pl-auto pr-auto" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div class="Contactme">
          
              <a link href="https://github.com/NikhithaAlokam"><img src={git}/></a>
              <a link href="https://www.instagram.com/nikhitha.alokam/?hl=en"><img src={insta}/></a>
              <a link href="mailto:nikhithaalokam@gmail.com"><img src={mail}/></a>
              <a link href="https://www.linkedin.com/in/nikhitha-alokam-072b11190/"><img src={linkedin}/></a>
              <a link href="https://www.facebook.com/nikhitha.alokam"><img src={fb}/></a>
          
          
       </div>
        </div>
      );
    }
  
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
  }

export default Contact;