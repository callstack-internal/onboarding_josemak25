const api = {
  create: (options: Record<string, any>) => ({
    ...options,
    post: () => {},
    patch: () => {},
    delete: () => {},
    get: () => ({ data: { data: { cnt: 8, list: [] } } }),
  }),
};

export default api;
