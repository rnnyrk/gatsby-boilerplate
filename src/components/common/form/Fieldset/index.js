import React from 'react';
import PT from 'prop-types';

import { FieldsetWrapper, ErrorWrapper, ErrorText } from './styled';

const Fieldset = ({ children, error, errorText, ...props }) => (
  <FieldsetWrapper {...props}>
    {children}

    {error && (
      <ErrorWrapper>
        <ErrorText>{errorText}</ErrorText>
      </ErrorWrapper>
    )}
  </FieldsetWrapper>
);

Fieldset.propTypes = {
  children: PT.node,
  error: PT.bool,
  errorText: PT.string,
};

export default Fieldset;
