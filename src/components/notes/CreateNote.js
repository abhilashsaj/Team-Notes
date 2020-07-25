import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNote } from '../../store/actions/noteActions'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

class CreateNote extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createNote(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth  } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    if (auth.role == 'Reader') return <Redirect to='/' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Note</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Note Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
  
}
const mapStateToProps = (state) => {
  // console.log(state);
  console.log(state, "auth")
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createNote: (note) => dispatch(createNote(note)),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote)
