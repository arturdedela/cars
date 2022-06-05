import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@mui/material';

export default {
  title: 'UI/Button',
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Click</Button>;
//#EA7F29
export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary'
};
