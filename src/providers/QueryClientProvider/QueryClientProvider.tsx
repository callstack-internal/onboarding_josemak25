import React, { PropsWithChildren } from "react";
import {
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export const QueryClientProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
    </BaseQueryClientProvider>
  );
};
