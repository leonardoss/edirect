import { createStore, compose } from 'redux';
import reducers from '../reducers';

const DEV_TOOLS = () => {
  const devTools = f => f;
  if (typeof window !== 'undefined') {
    return typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : devTools;
  }
  return devTools;
};

export const Store = createStore(reducers, compose(DEV_TOOLS()));
