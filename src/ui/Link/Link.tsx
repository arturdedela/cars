import { styled } from '@mui/material';
import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
export type { LinkProps };

const StyledLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default Link;
