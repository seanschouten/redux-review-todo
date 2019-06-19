// Import create store from Redux
import {createStore} from 'redux';
// Import our Reducer
import todoReducer from './todoReducer'

// Create store
export default createStore(
    todoReducer,
    // Enhance our browser to use development tools to keep track of our redux state
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );