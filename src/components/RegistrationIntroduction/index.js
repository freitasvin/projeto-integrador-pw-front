import React from 'react';
import {
  RegistrationIntroductionContent, RegistrationIntroductionStyle, NurseryImage, NurseryContent,
} from './styles';
import defaultImage from '../../Images/Icons/ImagemDefault.png';

export function RegistrationIntroduction({
  title,
  subTitle,
  image,
  nurseryName,
}) {
  return (
    <RegistrationIntroductionStyle>
      <RegistrationIntroductionContent>
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
      </RegistrationIntroductionContent>

      { image === 'default'

        && (
        <NurseryContent>
          <NurseryImage src={defaultImage} />
          <h2>{nurseryName}</h2>
        </NurseryContent>
        )}

      { image && image !== 'default'
      && (
      <NurseryContent>
        <NurseryImage src={image} />
        <h2>{nurseryName}</h2>
      </NurseryContent>
      )}

    </RegistrationIntroductionStyle>
  );
}
