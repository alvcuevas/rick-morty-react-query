import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Layout } from './components';

import './styles.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout />
        <ReactQueryDevtools initialIsOpen />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
