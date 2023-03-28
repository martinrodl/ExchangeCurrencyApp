import React from 'react';
import styled from 'styled-components';

import { ExchangeRates } from '../types';

const Container = styled.div`
  width: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

interface CurrencyTableProps {
  exchangeRates: ExchangeRates;
}

const CurrencyTable = ({ exchangeRates }: CurrencyTableProps): JSX.Element => {
  const tableData = Object.entries(exchangeRates).map(([currency, rate]) => (
    <tr key={'symbol' + currency}>
      <Td>{currency}</Td>
      <Td>{rate.toFixed(2)}</Td>
    </tr>
  ));

  return (
    <Container>
      <h2>Currency table</h2>
      <Table>
        <thead>
          <tr>
            <Th>Currency</Th>
            <Th>Exchange Rate</Th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </Table>
    </Container>
  );
};

export default CurrencyTable;
