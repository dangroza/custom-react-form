import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, ContentState, RichUtils, getDefaultKeyBinding, convertFromHTML} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import validator from 'validator';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import TooltipLink from './tooltip-link';

import '../style/richtext.css';
class Richtext extends Component {
  constructor(props) {
    super(props);

    const blocksFromHTML = convertFromHTML(this.props.value);
    const existingState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

    this.state = {
      editorState: EditorState.createWithContent(existingState),
    };

    this.onChange = this._handleOnChange.bind(this);
    //this.focus = () => this.refs.editor.focus();
    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);

    this.props.updateField(
      {
        ...this.props,
        errors: this.validationErrors(this.props.value),
        showErrors: false
      }
    );
  }

  _handleOnChange(e) {
    const value = stateToHTML(e.getCurrentContent());
    this.setState({ editorState: e, htmlContent: value });
    const plainTextValue = new DOMParser().parseFromString(value, 'text/html').body.textContent;
    this.props.updateField(
      {
        ...this.props,
        value: value,
        errors: this.validationErrors(plainTextValue),
        showErrors: true
      }
    );
  }

  validationErrors(value) {
    let errors = [];
    if (this.props.customValidator) {
      errors = this.props.customValidator(this.props, value);
    }
    if (this.props.mandatory && validator.isEmpty(value)) {
      errors = [`${this.props.label} is required.`];
    }
    return errors;
  }


  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, this.state.editorState, 4);
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  get _styleControls() {
    return(
      <div className='controls'>
        <InlineStyleControls
          editorState={this.state.editorState}
          onToggle={this.toggleInlineStyle}
        />
        <BlockStyleControls
          editorState={this.state.editorState}
          onToggle={this.toggleBlockType}
        />
      </div>
    );
  }

  render() {
    const {editorState} = this.state;
    let className = 'editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' hide-placeholder';
      }
    }

    const { label, id, mandatory, errors, updateField, showErrors, value, ...domProps} = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let labelClass = ['label-section'];
    labelClass.push((showErrors && errors && errors.length > 0) ? 'error' : '');
    return (
      <div className="form-group">
        <label className={labelClass.join(' ')} htmlFor={id}>{label} {mandatoryMark} {this.tooltipLink}</label>
        <div className="richtext">
          {this._styleControls}
          <div className={className} onClick={this.focus}>
            <Editor
              customStyleMap={styleMap}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              //ref="editor"
              spellCheck={true}
              id={id}
              editorState={this.state.editorState}
              onChange={this.onChange}
              placeholder={this.props.placeholder}
              textAlignment='center'
            />
          </div>
        </div>
        {this.fieldErrors}
      </div>
    );
  }

  get tooltipLink() {
    return (<TooltipLink tooltip={this.props.tooltip} />);
  }

  get fieldErrors(){
    if (!this.props.showErrors) return;
    return (<div className='error'>{this.props.errors}</div>);
  }
}

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }
  render() {
    let className = 'style-button';
    if (this.props.active) {
      className += ' active-button';
    }
    className += ' btn';
    return (
      <span className={className} onMouseDown={this.onToggle}>
        <FontAwesomeIcon icon={this.props.label}/>
      </span>
    );
  }
}

const BLOCK_TYPES = [
  {label: 'list-ul', style: 'unordered-list-item'},
  {label: 'list-ol', style: 'ordered-list-item'}
];
const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <div className='button-group'>
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};
var INLINE_STYLES = [
  {label: 'bold', style: 'BOLD'},
  {label: 'italic', style: 'ITALIC'},
  {label: 'underline', style: 'UNDERLINE'}
];
const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className='button-group'>
      {INLINE_STYLES.map((type) =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

export default Richtext;
