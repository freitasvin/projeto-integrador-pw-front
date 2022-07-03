import React from 'react';
import {
  NurseryCardContainer, NurseryImage, NurseryCardContent, LinkStyled,
} from './styles';
import defaultImage from '../../Images/Icons/ImagemDefault.png';

export function NurseryCard({
  image,
  name,
  phone,
  street,
  number,
  complement,
}) {
  return (
    <LinkStyled to="/">
      <NurseryCardContainer>
        <NurseryImage src={image || defaultImage} />
        <NurseryCardContent>
          <h2>{name}</h2>
          <h3>{phone}</h3>
          <h3>{ complement ? `${street}, ${number}, ${complement}` : `${street}, ${number}` }</h3>
        </NurseryCardContent>
      </NurseryCardContainer>
    </LinkStyled>

  );
}
