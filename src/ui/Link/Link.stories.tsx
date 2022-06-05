import React from 'react';
import { Story, Meta } from '@storybook/react';
import Link, { LinkProps } from './Link';

export default {
  title: 'UI/Link',
  component: Link,
} as Meta<LinkProps>;

const Template: Story<LinkProps> = (args) => <Link {...args}>View details</Link>;

export const Default = Template.bind({});
Default.args = {
  to: '/cars',
};
