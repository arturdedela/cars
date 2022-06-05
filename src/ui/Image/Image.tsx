import React, { ImgHTMLAttributes, useState } from 'react';
import { Skeleton, styled } from '@mui/material';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Img = styled('img')<{ isReady: boolean }>(({ isReady }) => ({
  display: isReady ? 'block' : 'none',
}));

const Image: React.FC<ImageProps> = ({ width, height, ...props }) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <Img {...props} width={width} height={height} isReady={isReady} alt={props.alt} onLoad={() => setIsReady(true)} />
      {!isReady && <Skeleton variant="rectangular" width={width} height={height} />}
    </>
  );
};

export default Image;
