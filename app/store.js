import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducers from 'DetoxTest/app/reducers/index';

const store = composeWithDevTools(applyMiddleware(thunk))(createStore)(
  reducers,
);

export default store;
