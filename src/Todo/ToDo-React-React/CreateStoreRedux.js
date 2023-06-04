import { createStore } from 'redux'

import TodoReducer from './ReducerPart';

const storeSatyam = createStore(TodoReducer);

export default storeSatyam;


