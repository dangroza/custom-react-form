import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './components/input';
import Textarea from './components/textarea';
import Richtext from './components/richtext';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import Select from './components/select';
import SelectTab from './components/select-tab';
import Password from './components/password';
import Button from './components/button';
import Url from "./components/url";
import Container from "./components/container";
import HighOrderContainer from "./components/high-order-container";
import { randomInt } from './utils';

import './style/form.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faBold,
         faListOl, faListUl, faItalic, faStrikethrough, faUnderline, faInfoCircle
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
  faUnderline,
  faInfoCircle
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
  'button': Button,
  'container': Container,
  'hoc': HighOrderContainer
}

class CustomReactForm extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      fields: this.updatedFields(this.props.fields)
    };
  }

  updatedFields(fields) {
    let childrenObj = {};
    fields.forEach(function (el, i) {
      const fieldId = el.id || randomInt();
      childrenObj[fieldId] = { ...el, key: fieldId };
    });

    return childrenObj;
  }

  classForType(type) {
    return FIELD_CLASS[type] || Input;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ fields: this.updatedFields(nextProps.fields) });
  }

  updateFields(fields, modifiedField) {
    const updatedFields = { ...fields };
    const fieldId = modifiedField.id;
    updatedFields[fieldId].value = modifiedField.value;
    updatedFields[fieldId].errors = modifiedField.errors;
    updatedFields[fieldId].showErrors = !!modifiedField.showErrors;
    return updatedFields;
  }

  get readOnlyAttributes() {
    return {
      settings: this.props.settings
    }
  }

  get isValid() {
    return !(Object.values(this.state.fields).find(el => {
      return el.errors && el.errors.length > 0
    }));
  }

  handleFieldChange(field) {
    let changedFields = this.updateFields(this.state.fields, field);
    this.props.updateParentCallback({
      fields: changedFields,
      ...this.readOnlyAttributes
    });
  }

  render() {
    const { title, subTitle } = this.props.settings;
    let childNodes = [];
    let fields = this.state.fields;
    for (var key in fields) {
      if (fields.hasOwnProperty(key)) {
        let el = fields[key];
        el.id = key;
        el.showErrors = this.props.showAllErrors || el.showErrors;
        const CustomComponent = this.classForType(el.type);
        if (el.type == 'hoc') {
          const HOC = CustomComponent(el.component);
          childNodes.push(<HOC {...el.componentProps} {...el} />);
        } else {
          childNodes.push(
            <CustomComponent
              {...el}
              updateField={this.handleFieldChange}
            />
          );
        }
      }
    }

    return (
      <div className="form-container">
        <form onSubmit={this.onSubmit}>
          <h2 className="form-title"><b>{title}</b> {subTitle}</h2>
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

CustomReactForm.propTypes = {
  updateParentCallback: PropTypes.func.isRequired
};
export default CustomReactForm;
