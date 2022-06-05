import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Typography, TypographyProps } from '@mui/material';

export default {
  title: 'UI/Typography',
  component: Typography,
} as Meta<TypographyProps>;

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sagittis elit, ut commodo neque. Suspendisse
    egestas, nulla sed mollis pulvinar, risus risus mattis eros, sed faucibus ligula ligula ac nulla. Nam a fringilla
    augue, non blandit tellus. Maecenas viverra dui vitae tempus laoreet. Quisque a lectus ornare, facilisis eros sit
    amet, aliquam tellus.
  </Typography>
);

export const Default = () => (
  <div>
    <Typography variant="h1">Roboto Bold 32px</Typography>
    <Typography variant="h2">Roboto Bold 18px</Typography>
    <Typography variant="body1">Roboto Regular 18px</Typography>
    <Typography variant="body2">Roboto Regular 14px</Typography>
    <Typography variant="caption">Roboto Regular 12px</Typography>
  </div>
);

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body1',
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body2',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
};
