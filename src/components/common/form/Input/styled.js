import styled, { css } from 'styled-components';
import PT from 'prop-types';

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 26px;
  border: 0;
  outline: none;
  font-family: ${(props) => props.theme.font.poppins};
  color: ${(props) => props.theme.black};
  border: 1px solid ${(props) => props.theme.brown.border};
  background: ${(props) => props.theme.brown.light};

  &:focus {
    border-color: ${(props) => props.theme.brown};
  }

  ${(props) => props.renderAs === 'textarea' && css`
    min-height: 200px;
  `};
`;

InputField.propTypes = {
  renderAs: PT.oneOf(['textarea', 'input']),
};

export const Label = styled.label`
  flex-basis: 100%;
`;

export const SelectField = styled(InputField).attrs({
  as: 'select',
})`
  position: relative;
  height: 48px;
`;
