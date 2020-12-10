import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import state from './store';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  reducers,
  state,
  composeWithDevTools(applyMiddleware(thunk))
);