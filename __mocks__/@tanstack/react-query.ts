export class QueryClient {}

export const useMutation = () => ({
  mutate: () => {},
  mutateAsync: () => Promise.resolve(),
});

export const useInfiniteQuery = () => ({
  isError: false,
  isSuccess: true,
  data: undefined,
  isLoading: false,
  hasNextPage: false,
  fetchNextPage: () => {},
});

export const useQuery = () => ({
  data: undefined,
  isError: false,
  isSuccess: true,
  isLoading: false,
  hasNextPage: false,
  fetchNextPage: () => {},
});

export const QueryClientProvider = () => {};
