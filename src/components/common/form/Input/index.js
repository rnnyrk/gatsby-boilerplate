import React, { forwardRef } from 'react';
import PT from 'prop-types';

import { Fieldset } from 'common/form';
import { Label, InputField, SelectField } from './styled';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.defaultErrorText = 'Dit veld is verplicht';

    this.state = {
      value: null,
      error: props.required,
      errorText: this.defaultErrorText,
      isTouched: false,
    };
  }

  componentDidMount() {
    const { initField, name, required } = this.props;

    if (initField) {
      initField(name, required);
    }
  }

  changeValue = (event) => {
    const value = event.target.value;

    this.setState({
      value,
    }, () => this.props.changeValue(value));
  };

  handleFocus = () => {
    this.validateInput();
  };

  handleBlur = () => {
    if (!this.state.isTouched) {
      this.setState({
        isTouched: true,
      }, () => this.validateInput());
    } else {
      this.validateInput();
    }
  };

  validateInput = () => {
    const { isTouched, value } = this.state;
    const { handleError, name, required, validate } = this.props;

    let errorText = this.state.errorText;
    let error = this.state.error;

    if (isTouched) {
      if (required) {
        error = !value;
      }

      if (validate) {
        const hasValidationError = validate(value);

        if (hasValidationError) {
          error = true;
          errorText = hasValidationError;
        } else {
          error = false;
          errorText = this.defaultErrorText;
        }
      }

      if (error && !required && !value) {
        error = false;
      }
    }

    error
      ? handleError(name, isTouched, required)
      : handleError(name, isTouched, required, true);

    this.setState({
      error,
      errorText,
    });
  };

  render() {
    const { errorText, error, isTouched } = this.state;
    const { label, name, type, innerRef, renderAs, options } = this.props;

    return (
      <Fieldset
        error={isTouched && error}
        errorText={errorText}
        type={type}
      >
        <Label htmlFor={name}>{label}</Label>
        {type === 'select' ? (
          <SelectField
            {...this.props}
            id={name}
            name={name}
            ref={innerRef}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.changeValue}
          >
            <option>Geen specifieke interesse</option>
            {options.map((post) => (
              <option value={post.title} key={post.id}>
                {post.title}
              </option>
            ))}
          </SelectField>
        ) : (
          <InputField
            {...this.props}
            id={name}
            name={name}
            as={renderAs}
            ref={innerRef}
            type={type}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.changeValue}
            onInput={this.changeValue}
          />
        )}
      </Fieldset>
    );
  };
}

Input.propTypes = {
  changeValue: PT.func,
  defaultValue: PT.string,
  handleError: PT.func.isRequired,
  innerRef: PT.object,
  initField: PT.func,
  label: PT.string.isRequired,
  name: PT.string.isRequired,
  options: PT.array,
  renderAs: PT.oneOf(['textarea', 'input']),
  required: PT.bool,
  validate: PT.func,
  type: PT.oneOf(['text', 'tel', 'email', 'select']),
};

Input.defaultProps = {
  required: false,
  renderAs: 'input',
  type: 'text',
};

export default forwardRef((props, ref) => <Input {...props} innerRef={ref} />);
