import React from 'react';
import { styled, Typography } from '@mui/material';

export interface PaginationProps {
  firstPage?: number;
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}

const Control = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: theme.typography.body2.fontSize,

  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > * + *': {
    marginLeft: `${theme.spacing(2)}!important`,
  },
}));

const Pagination: React.FC<PaginationProps> = ({ firstPage = 1, currentPage, totalPages, onChangePage }) => {
  return (
    <Root>
      <Control onClick={() => onChangePage(firstPage)}>First</Control>
      <Control onClick={() => onChangePage(Math.max(firstPage, currentPage - 1))}>Previous</Control>
      <Typography variant="body2">
        Page {currentPage} of {totalPages}
      </Typography>
      <Control onClick={() => onChangePage(Math.min(totalPages, currentPage + 1))}>Next</Control>
      <Control onClick={() => onChangePage(totalPages)}>Last</Control>
    </Root>
  );
};

export default Pagination;
