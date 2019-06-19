// Create the initial state
const initialState = {
    todo: ['wash car', 'workout', 'mow the lawn']
};

// Create a string constant for our action type
// This will help to prevent any typos and makes it easier to debug
export const ADD_TODO = 'ADD_TODO';

// Create our reducer function
export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            const newTodo = [...state.todo, action.payload];
            return Object.assign({}, state, {todo: newTodo});
        default: 
            return state;
    }
}