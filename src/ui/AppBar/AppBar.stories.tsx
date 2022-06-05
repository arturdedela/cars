import React from 'react';
import { Story, Meta } from '@storybook/react';
import AppBar, { AppBarProps } from './AppBar';
import Logo from '../../assets/logo.png';

export default {
  title: 'UI/AppBar',
  component: AppBar,
} as Meta<AppBarProps>;

const Template: Story<AppBarProps> = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: Logo,
  links: [
    { path: '/cars', label: 'Purchase' },
    { path: '/orders', label: 'My Orders' },
    { path: '/sell', label: 'Sell' },
  ],
};
