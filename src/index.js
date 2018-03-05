import React, { Component } from 'react';
import Input from './components/input';
import Textarea from './components/textarea';
import Richtext from './components/richtext';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import Select from './components/select';
import Password from './components/password';
import Button from './components/button';
import Tags from "./components/tags";

class CustomReactForm extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    let childrenObj = {};
    this.props.fields.forEach(function (el, i) {
      let obj = { ...el, key: el.name };
      childrenObj[el.name] = obj;
    });
    this.state = {
      isValid: false,
      isComplete: false,
      fields: childrenObj
    };
  }

  updateFileds(fields, fieldModified, fieldValue) {
    const fieldName = fieldModified.name;
    switch (fieldModified.type) {
      case "tags":
      case "checkbox":
        fields[fieldName].value.forEach(function (value) {
          if (value.name === fieldValue || value.id === fieldValue) {
            value.selected = !value.selected;
          }
        });
        return fields;
      case "radio":
      case "select":
        fields[fieldName].value.forEach(function (value) {
          if (value.id === fieldValue)
            value.selected = true;
          else if (value.selected) {
            delete value.selected;
          }
        });
        return fields;
      default:
        fields[fieldName].value = fieldValue;
        return fields;
    }

  }

  handleFieldChange(field, value) {
    let updatedFields = this.updateFileds(this.state.fields, field, value);
    this.setState({fields: updatedFields});
  }

  render() {
    let childNodes = [];
    let fields = this.state.fields;

    let childButtons = [];
    let buttons = this.props.buttons;
      for (let id in buttons) {
        if (buttons.hasOwnProperty(id)) {
          let el = buttons[id];
          childButtons.push( < Button {...el} />)
        }
       }
    for (var key in fields) {
      if (fields.hasOwnProperty(key)) {
        let el = fields[key];
        el.id = key;
        switch (el.type) {
          case "text":
            childNodes.push(<Input {...el} onChange={this.handleFieldChange}/>)
            break;
          case "password":
            childNodes.push(<Password {...el} onChange={this.handleFieldChange}/>)
            break;
          case "textarea":
            childNodes.push(<Textarea {...el} onChange={this.handleFieldChange}/>)
            break;
          case "richtext":
          childNodes.push(<Richtext {...el} onChange={this.handleFieldChange}/>)
          case "radio":
            childNodes.push(<Radio {...el} onChange={this.handleFieldChange}/>)
            break;
          case "checkbox":
            childNodes.push(<Checkbox {...el} onChange={this.handleFieldChange}/>)
            break;
          case "select":
            childNodes.push(<Select {...el} onChange={this.handleFieldChange}/>)
            break;
          case "tags":
            childNodes.push(<TagsContainer {...el} onChange={this.handleFieldChange}/>)
            break;
          default:
            childNodes.push(<Input {...el} onChange={this.handleFieldChange}/>)
        }
      }
    }

    return (
      <div className = "form-container">
        <form onSubmit = {this.onSubmit}>
          <h2 className = "form-title"> {this.props.title}</h2>
          {childNodes}
        </form>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    return false;
  }
}

export default CustomReactForm;
