import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailReducer } from './reducers/productReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
});
const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;