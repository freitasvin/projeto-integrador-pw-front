import React from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import {
  MainStyle, SearchStyle, SearchResultStyle, SearchResultLabelStyle, ContainerStyle,
} from './styles';
import { DropMenu } from './DropMenu';
import { SearchButton } from './SearchButton';
import locale from '../../Images/Icons/Localização.png';

export function Home() {
  return (
    <ContainerStyle>
      <IntroductionContainer
        title="Bem-vindo"
        subtitle="Está procurando uma creche para seu filho(a)? Não perca tempo!"
        footerSingup
      />
      <MainStyle>

        <SearchStyle>
          <DropMenu type="UF" />
          <DropMenu type="Cidade" />
          <DropMenu type="Bairro" />
          <SearchButton />
        </SearchStyle>

        <div>
          <SearchResultLabelStyle>
            <img src={locale} alt="locale" />
            <span>
              Creches disponíveis na sua região
            </span>
          </SearchResultLabelStyle>
          <SearchResultStyle />
        </div>

      </MainStyle>
    </ContainerStyle>
  );
}
