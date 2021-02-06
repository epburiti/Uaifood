import React from 'react';

import imagePattern from './../../assets/uaifood/bg.jpg';
import { Container } from './styles';

const ImageCard = props => {
  return (
    <Container>
      {props.thumb != '' && <img src={props.thumb} alt={props.name} />}
      {props.thumb == '' && (
        <img src={imagePattern} alt="logo do restaurante" />
      )}
    </Container>
  );
};

export default ImageCard;
