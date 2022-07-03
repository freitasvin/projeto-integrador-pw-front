import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../services';
import { NurseryDetailContainer } from './styles';
import { Header } from '../../components/Header';

export function Nursery() {
  const { idNursery } = useParams();
  const [nurseryDetail, setNurseryDetail] = useState({});

  useEffect(() => {
    Api.get(`nurseries/${idNursery}`).then((res) => {
      console.log(res.data);
      setNurseryDetail(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <NurseryDetailContainer>
        <h3>{nurseryDetail.name}</h3>
      </NurseryDetailContainer>
    </>
  );
}
