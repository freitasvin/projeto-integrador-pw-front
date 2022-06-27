import React, { useEffect, useState } from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import {
  MainStyle, SearchStyle, SearchResultStyle, SearchResultLabelStyle, ContainerStyle, DropMenuStyle,
} from './styles';
import { SearchButton } from './SearchButton';
import locale from '../../Images/Icons/Localização.png';
import { Api } from '../../services';

export function Home() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [nieghborhoods, setNeighborhoods] = useState([]);
  const [currentNeighborhood, setCurrentNeighborhood] = useState(0);

  useEffect(() => {
    Api.get('ufs').then((res) => {
      setUfs(res.data);
    });
  }, []);

  const ufHandler = (idState) => {
    Api.get(`ufs/${idState}/cities`).then((res) => {
      setCities(res.data);
    });
  };

  const cityHandler = (idCity) => {
    Api.get(`cities/${idCity}/neighborhoods`).then((res) => {
      setNeighborhoods(res.data);
    });
  };

  const nieghborhoodHandler = (idNeighborhood) => {
    setCurrentNeighborhood(idNeighborhood);
  };

  const searchButtonHandler = () => {
    Api.get(`neighborhoods/${currentNeighborhood}/nurseries`).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <ContainerStyle>
      <IntroductionContainer
        title="Bem-vindo"
        subtitle="Está procurando uma creche para seu filho(a)? Não perca tempo!"
        footerSingup
      />
      <MainStyle>
        <SearchStyle>
          <DropMenuStyle aria-label="UF Select" onChange={(e) => ufHandler(e.target.value)}>
            <option hidden>UF</option>
            {ufs && ufs.map((item) => (
              <option key={item.idState} value={item.idState}>
                {item.uf}
              </option>
            ))}
          </DropMenuStyle>

          <DropMenuStyle aria-label="Cidade Select" onChange={(e) => cityHandler(e.target.value)}>
            <option hidden>Cidade</option>
            {cities && cities.map((item) => (
              <option key={item.idCity} value={item.idCity}>
                {item.name}
              </option>
            ))}
          </DropMenuStyle>

          <DropMenuStyle aria-label="Bairro Select" onChange={(e) => nieghborhoodHandler(e.target.value)}>
            <option hidden>Bairro</option>
            {nieghborhoods && nieghborhoods.map((item) => (
              <option key={item.idNeighborhood} value={item.idNeighborhood}>
                {item.name}
              </option>
            ))}
          </DropMenuStyle>
          <SearchButton handler={searchButtonHandler} />
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
