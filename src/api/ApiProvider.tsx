import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export function ApiProvider({ children }: PropsWithChildren<{}>) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 120_000 } } });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
