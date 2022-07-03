import React, { useEffect, useState } from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import {
  MainStyle, SearchStyle, SearchResultStyle, SearchResultLabelStyle, ContainerStyle, DropMenuStyle,
} from './styles';
import { SearchButton } from './SearchButton';
import locale from '../../Images/Icons/Localização.png';
import { Api } from '../../services';
import { NurseryCard } from '../../components/nurseryCard';

export function Home() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [currentNeighborhood, setCurrentNeighborhood] = useState(0);
  const [nurseriesList, setNurseriesList] = useState([]);

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

  const neighborhoodHandler = (idNeighborhood) => {
    setCurrentNeighborhood(idNeighborhood);
  };

  const searchButtonHandler = () => {
    Api.get(`neighborhoods/${currentNeighborhood}/nurseries`).then((res) => {
      setNurseriesList(res.data);
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

          <DropMenuStyle aria-label="Bairro Select" onChange={(e) => neighborhoodHandler(e.target.value)}>
            <option hidden>Bairro</option>
            {neighborhoods && neighborhoods.map((item) => (
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
          <SearchResultStyle>
            {nurseriesList.length > 0 && nurseriesList.map((nursery) => (
              <NurseryCard
                image={nursery.image}
                name={nursery.name}
                phone={nursery.phone}
                street={nursery.street}
                number={nursery.number}
                complement={nursery.complement}
                idNursery={nursery.idNursery}
                key={nursery.idNursery}
              />
            ))}
          </SearchResultStyle>
        </div>

      </MainStyle>
    </ContainerStyle>
  );
}
