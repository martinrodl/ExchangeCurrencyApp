import React, { useState } from 'react';
import styled from 'styled-components';

import { ExchangeRates } from '../types';

const Container = styled.div`
  align-self: start;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  gap-y: 0.5rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  height: 20px;
  width: 100px;
  margin-left: 10px;
  margin-right: 10px;
  border-width: 0px;
  border: none;
`;

const Select = styled.select`
  font-size: 14px;
  margin: 5px;
  padding: 5px;
  border: none;
  background-color: white;
`;

interface ExchangeFormProps {
  exchangeRates: ExchangeRates;
}

const ExchangeForm = ({ exchangeRates }: ExchangeFormProps): JSX.Element => {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>('EUR');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const getExchangeRate = (): number => {
    if (!exchangeRates) return NaN;
    return exchangeRates[currency];
  };

  const convertedAmount = (): number => {
    const exchangeRate = getExchangeRate();
    return amount / exchangeRate;
  };

  return (
    <Container className="form">
      <h2>Exchange calc</h2>
      <Label>
        Value:
        <Input type="number" value={amount} onChange={handleAmountChange} />
        CZK
      </Label>
      <Label>
        Currency:
        <Select value={currency} onChange={handleCurrencyChange}>
          {exchangeRates &&
            Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </Select>
      </Label>
      <span>
        Converted value: {convertedAmount().toFixed(2)} {currency}
      </span>
    </Container>
  );
};

export default ExchangeForm;
