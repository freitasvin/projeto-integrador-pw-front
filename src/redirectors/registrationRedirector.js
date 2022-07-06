import React, { useEffect, useState } from 'react';
import { RegistrationRequests } from '../pages/RegistrationRequests';
import { Registrations } from '../pages/Registrations';

export function RegistrationRedirector() {
  const [level, setLevel] = useState(3);

  useEffect(() => {
    const idLevel = parseInt(localStorage.getItem('idLevel'), 10);
    setLevel(idLevel);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {level === 3 ? <Registrations /> : <RegistrationRequests />}
    </>
  );
}
