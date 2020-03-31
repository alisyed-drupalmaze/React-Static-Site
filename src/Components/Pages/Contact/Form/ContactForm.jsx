import React, { Component } from 'react'
import './ContactForm.style.css'
class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.initialSate = {
      name: '',
      email: '',
      message: '',
      project: ''
    }

    this.state = this.initialSate;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  handleChange (event) {
    const name = event.target.name;
    const value = event.target.value; 
    this.setState({
      [name]: value
    })
   }

   handleSubmit (event) {
     console.log(this.state);
     event.preventDefault();
   }

  render() {
    return (
      <div>


      <form className="col s12 " onSubmit={this.handleSubmit}>

        <div className="row">
          <div className="input-field">
          <label>Name</label>
          <input  type="text" placeholder="Placeholder" name="name" className="validate" value={this.state.name} onChange={this.handleChange} />
          </div>
        </div>


        <div className="row">
          <div className="input-field">
          <label>Email</label>
          <input  type="text" placeholder="Placeholder" name="email" className="validate" value={this.state.email} onChange={this.handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
          <label>Message</label>
          <textarea  type="text" placeholder="Some Message" name="message" className="materialize-textarea" value={this.state.message} onChange={this.handleChange} />
          </div>
        </div>

        
          
        <div className="row">
        <label className="left">Project Type:</label>
          <div className="input-field">
          <select name="project" value={this.state.project} onChange={this.handleChange} className="select-field">
            <option value="" >Select Project type...</option>
            <option value="react">React</option>
            <option value="Vue">Vue</option>
            <option value="Drupal">Drupal</option>
            <option value="WordPress">WordPress</option>
          </select>
          </div>
        </div>
      
        <div>
          <button type="submit" className="btn-large waves-effect waves-light">Send Message</button>
        </div>

      </form>

      </div>
    )
  }
}

export default ContactForm;