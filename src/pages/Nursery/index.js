import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../services';
import {
  Detail, Container, NurseryDetailContent, VacancyContainer,
} from './styles';
import { Header } from '../../components/Header';
import { VacancyDetail } from '../../components/VacancyDetail';
import defaultImage from '../../Images/Icons/ImagemDefault.png';
import LocalizacaoImage from '../../Images/Icons/LocalizacaoAzul.png';
import PhoneImage from '../../Images/Icons/TelefoneAzul.png';
import UserImage from '../../Images/Icons/UserAzul.png';

export function Nursery() {
  const { idNursery } = useParams();
  const [nurseryDetail, setNurseryDetail] = useState({});
  const [address, setAddress] = useState('');
  const [vacancies, setVacancies] = useState([]);

  const formatAddress = (a) => {
    const formatedAddress = a.complement
      ? `${a.street}, ${a.number}, ${a.complement} - ${a.neighborhood}`
      : `${a.street}, ${a.number} - ${a.neighborhood}`;
    setAddress(formatedAddress);
  };

  useEffect(() => {
    Api.get(`nurseries/${idNursery}`).then((res) => {
      formatAddress(res.data.address);
      setVacancies(res.data.vacancies);
      setNurseryDetail(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <img src={nurseryDetail.image || defaultImage} alt="Imagem da creche" />
        <NurseryDetailContent>
          <h1>{nurseryDetail.name}</h1>
          <h5>{nurseryDetail.cnpj}</h5>
          <div style={{ marginTop: 30 }}>
            <Detail>
              <img src={LocalizacaoImage} alt="Localização icone" />
              <h3>{address}</h3>
            </Detail>
            <Detail>
              <img src={PhoneImage} alt="Telefone icone" />
              <h3>{nurseryDetail.phone}</h3>
            </Detail>
            <Detail>
              <img src={UserImage} alt="Usuário icone" />
              <h3>{nurseryDetail.director}</h3>
            </Detail>
          </div>
        </NurseryDetailContent>
      </Container>

      <Container>
        {vacancies.length > 0 && vacancies.map((vacancy) => (
          <VacancyContainer>
            <VacancyDetail
              className={vacancy.class}
              vacancies={vacancy.amount}
              description={vacancy.description}
              idVacancy={vacancy.idVacancy}
              key={vacancy.idVacancy}
            />
          </VacancyContainer>
        ))}
      </Container>
    </>
  );
}
