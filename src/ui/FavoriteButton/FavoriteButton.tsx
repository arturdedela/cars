import { IconButton, IconButtonProps } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface FavoriteButtonProps extends Omit<IconButtonProps, 'onClick'> {
  isFavorite: boolean;
  onClick: (isFavorite: boolean) => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onClick, ...iconButtonProps }) => {
  return (
    <IconButton aria-label="like" onClick={() => onClick(isFavorite)} {...iconButtonProps}>
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default FavoriteButton;
