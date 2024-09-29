import { createStore } from 'easy-peasy';
import cartModel from './cartModel/cartModel';

const store = createStore(cartModel);

export default store;