import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

export const queryClient = new QueryClient();

type ProviderProps = {
  children: React.ReactNode;
};

const Provider: React.FC<ProviderProps> = ({children}): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
