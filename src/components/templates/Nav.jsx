import './Nav.css'
import React, { Component } from "react";
 
export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <nav className="menu container-fluid header">
                <div className="row">
                    <div className="col-lg-4 none-md"></div>
                    <a href="/" className="col-lg-1 col-md-2 col-3 py-1 text-danger text-center">
                        Home
                    </a>
                    <a href="/manga" className="col-lg-1 col-md-2 col-3 py-1  text-danger text-center">
                        Manga
                    </a>
                    <a href="/anime" className="col-lg-1 col-md-2 col-3 py-1  text-danger text-center">
                        Anime
                    </a>
                    <a href="/lightnovel" className="col-lg-1 col-md-2 col-3 py-1  text-danger text-center">
                        Light Novel
                    </a>
                    <form className="col-lg-4 col-md-4 col-12 justify-content-center form-group-sm row form-nav mx-0 px-0">
                        <div className="col-md-5 col-1 none-5se"></div>
                        <div className="col-md-5 col-7 my-1 mx-0 px-0">
                            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control-sm col"/>
                        </div>
                        <button className="input-group-append btn btn-outline-secondary py-0 px-0 my-1 col-md-2 col-4 justify-content-center" type="submit" name="submit">search</button>
                    </form>     
                </div>
            </nav>
      );
    }
  }