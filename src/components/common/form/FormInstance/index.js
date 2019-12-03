import React from 'react';
import PT from 'prop-types';

class FormInstance extends React.Component {
  state = {
    error: true,
    errorFields: [],
  };

  initField = (key, required) => {
    const errorFields = this.state.errorFields;

    if (required) {
      errorFields.push(key);
      this.setState({ errorFields });
    }
  }

  handleError = (key, touched, isRequired, removeItem = false) => {
    let error = this.state.error;
    const errorFields = this.state.errorFields;

    if (removeItem && errorFields.includes(key)) {
      const index = errorFields.indexOf(key);
      errorFields.splice(index, 1);

      if (errorFields.length === 0) {
        error = false;
      }
    } else if (!removeItem && !errorFields.includes(key)) {
      error = true;
      errorFields.push(key);
    }

    if (touched && isRequired) {
      if (errorFields.length === 0) {
        error = false;
      } else {
        error = true;
      }
    }

    this.setState({
      error,
      errorFields,
    });
  }

  render() {
    return this.props.children({
      hasError: this.state.error,
      handleError: this.handleError,
      initField: this.initField,
    });
  }
};

FormInstance.propTypes = {
  children: PT.any,
};

export default FormInstance;
