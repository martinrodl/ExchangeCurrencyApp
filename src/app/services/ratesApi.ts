import { ExchangeRates } from '../types';

const API_URL =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';
const PROXY_URL = 'https://api.codetabs.com/v1/proxy?quest=';

export const getExchangeRates = async (): Promise<ExchangeRates> => {
  const response = await fetch(PROXY_URL + API_URL);
  const text = await response.text();
  const lines = text.trim().split('\n').slice(2);
  const rates = lines.reduce((result: ExchangeRates, line) => {
    const [country, currency, number, code, rate] = line.trim().split('|');
    const rateNumber = parseFloat(rate);
    result[code] = rateNumber;
    return result;
  }, {});
  return rates;
};
