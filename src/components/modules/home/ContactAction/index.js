import React from 'react';

import { MailIcon, ContactActionContainer } from './styled';

const ContactAction = () => (
  <ContactActionContainer to="contact">
    <MailIcon />
    Neem contact op
  </ContactActionContainer>
);

export default ContactAction;
