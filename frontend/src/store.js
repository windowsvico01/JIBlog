import { createStore } from 'redux';
import reducer from './Reducer';
const initValue = {
    text: 'hello',
};
const store = createStore(reducer, initValue);
export default store;