import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ExchangeRate from './components/ExchangeRate';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRate />
    </QueryClientProvider>
  );
}

export default App;
