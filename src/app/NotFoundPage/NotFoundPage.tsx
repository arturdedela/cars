import React from 'react';
import { styled, Typography } from '@mui/material';
import Logo from '../../assets/logo.png';
import { Image, Link } from '../../ui';

export interface NotFoundPageProps {}

const Root = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  rowGap: theme.spacing(3),
}));

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <Root>
      <Image src={Logo} alt="Logo" width={175} />
      <Typography variant="h1">404 - Not Found</Typography>
      <Typography variant="body1">Sorry, the page you are looking for does not exist.</Typography>
      <Typography variant="body1">
        You can always go back to the <Link to="/cars">homepage</Link>.
      </Typography>
    </Root>
  );
};

export default NotFoundPage;
