import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'DetoxTest/app/reducers/index';

const store = applyMiddleware(thunk)(createStore)(reducers);

export default store;
