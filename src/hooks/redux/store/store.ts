import { createStore } from 'redux';

export const store = createStore(() => {
  return {
    open: true,
    name: 'open',
  };
});
