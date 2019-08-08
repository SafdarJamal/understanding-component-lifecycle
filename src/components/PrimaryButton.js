import React from 'react';
import { Button } from 'semantic-ui-react';

const PrimaryButton = props => (
  <Button primary onClick={props.func}>
    {props.text}
  </Button>
);

export default PrimaryButton;
