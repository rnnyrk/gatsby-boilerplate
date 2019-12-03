import React from 'react';
import PT from 'prop-types';

import { FormContainer } from './styled';

const Form = ({ children, onSubmit }) => (
  <FormContainer method="POST" onSubmit={onSubmit}>
    {children}
  </FormContainer>
);

Form.propTypes = {
  children: PT.any,
  onSubmit: PT.func.isRequired,
};

export default Form;
