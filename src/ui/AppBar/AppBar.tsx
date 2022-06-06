import { Container, AppBar as MuiAppBar, Toolbar, styled } from '@mui/material';
import React from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';

const Logo = styled('img')({
  width: 175,
});

const Nav = styled('nav')({
  marginLeft: 'auto',
});

const Link = styled(NavLink)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  transition: 'color 0.2s',

  '&:hover': {
    color: theme.palette.primary.main,
  },

  '&.active': {
    color: theme.palette.primary.main,
  },

  '& + &': {
    marginLeft: theme.spacing(3),
  },
}));

interface AppBarLink {
  path: string;
  label: string;
}

export interface AppBarProps {
  logo: string;
  logoUrl?: string;
  links: AppBarLink[];
}

const AppBar: React.FC<AppBarProps> = ({ logo, logoUrl = '/', links }) => {
  return (
    <MuiAppBar position="static" color="transparent" sx={{ height: 80, justifyContent: 'center' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <RouterLink to={logoUrl}>
            <Logo src={logo} alt="logo" />
          </RouterLink>

          <Nav>
            {links.map((link, i) => (
              <Link key={i} to={link.path}>
                {link.label}
              </Link>
            ))}
          </Nav>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
