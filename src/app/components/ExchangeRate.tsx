import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { getExchangeRates } from '../services/ratesApi';
import { ExchangeRates } from '../types';
import ExchangeRatesForm from './ExchangeForm';
import ExchangeRatesTable from './CurrencyTable';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ExchangeRate = (): JSX.Element => {
  const { data, error, isLoading } = useQuery<ExchangeRates, any>('exchangeRates', getExchangeRates);
  return (
    <Container>
      <h1>Exchange Currency App</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {String(error)}</p>}
      {data && <ExchangeRatesForm exchangeRates={data} />}
      {data && <ExchangeRatesTable exchangeRates={data} />}
    </Container>
  );
};

export default ExchangeRate;
