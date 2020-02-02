/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import axios from 'axios';

class CustomCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_checked: props.isChecked ? true : false,
      user: JSON.parse(localStorage.getItem('data'))
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ is_checked: !this.state.is_checked });
    if (!this.state.is_checked){
      var bodyFormData = new FormData();
      bodyFormData.set('email', this.state.user.email);
      bodyFormData.set('habit', this.props.habit);
      axios.post('http://9327f75a.ngrok.io/checkin',bodyFormData);
      console.log("success");
    }
  }
  render() {
    const { isChecked, habit, number, label, inline, ...rest } = this.props;
    const classes =
      inline !== undefined ? "checkbox checkbox-inline" : "checkbox";
    return (
      <div className={classes}>
        <input
          id={number}
          type="checkbox"
          onChange={this.handleClick}
          checked={this.state.is_checked}
          {...rest}
        />
        <label htmlFor={number}>{label}</label>
      </div>
    );
  }
}

export default CustomCheckbox;
