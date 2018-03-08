import React, { Component } from 'react';
import Input from './components/input';
import Textarea from './components/textarea';
import Richtext from './components/richtext';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import Select from './components/select';
import SelectTab from './components/select-tab';
import Password from './components/password';
import Button from './components/button';
import Tags from "./components/tags";
import Url from "./components/url";
import Label from "./components/label";

import './style/form.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faBold,
         faListOl, faListUl, faItalic, faStrikethrough, faUnderline
        } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faBold,
  faListOl,
  faListUl,
  faItalic,
  faStrikethrough,
  faUnderline
);



const FIELD_CLASS = {
  'checkbox': Checkbox,
  'radio': Radio,
  'selectTab': SelectTab,
  'select': Select,
  'text': Input,
  'url': Url,
  'password': Password,
  'textarea': Textarea,
  'richtext': Richtext,
  'tags': Tags,
  'button': Button,
  'paragraph': Label
}

class CustomReactForm extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    let childrenObj = {};
    this.props.fields.forEach(function (el, i) {
      let obj = { ...el, key: el.id };
      childrenObj[el.id] = obj;
    });
    this.state = {
      isValid: false,
      isComplete: false,
      fields: childrenObj
    };
  }

  classForType(type) {
    return FIELD_CLASS[type] || Input;
  }

  updateFields(fields, modifiedField) {
    const fieldId = modifiedField.id;
    switch (modifiedField.type) {
      default:
        fields[fieldId].value = modifiedField.value;
        fields[fieldId].errors = modifiedField.errors;
        return fields;
    }
  }

  handleFieldChange(field) {
    let updatedFields = this.updateFields(this.state.fields, field);
    this.setState({fields: updatedFields});
  }

  render() {
    let childNodes = [];
    let fields = this.state.fields;
    for (var key in fields) {
      if (fields.hasOwnProperty(key)) {
        let el = fields[key];
        el.id = key;
        const CustomComponent = this.classForType(el.type);
        childNodes.push(<CustomComponent {...el} onChange={this.handleFieldChange}/>)
      }
    }

    return (
      <div className = "form-container">
        <form onSubmit = {this.onSubmit}>
          <h2 className = "form-title"> <b>{this.props.title}</b> {this.props.subTitle}</h2>
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
