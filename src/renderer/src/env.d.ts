/// <reference types="vite/client" />

interface Window {
  api: {
    getCompanies: () => Promise<import('./types').Company[]>;
  };
}
