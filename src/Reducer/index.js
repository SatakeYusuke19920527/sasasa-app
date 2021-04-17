import { INCREMENT, DECREMENT, RESET, ADD_EVENT, DELETE_ALL_EVENT, ALL_EVENT } from '../actions/index';

const reducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    // case SECREMENT:
    //   return { ...state, count: state.count - 1 };
    case ADD_EVENT:
      const event = { title: action.title, body: action.body, comment: action.comment };
      const id = state.length + 1;
      return [...state, { id, ...event }];
    case DELETE_ALL_EVENT:
      return [];
    case ALL_EVENT:
      const deleteId = action.id
      console.log(deleteId)
      const newState =
        state.filter((item) => {
          return item.id !== deleteId
        
        });
      return newState
    default:
      return state;
  }
}
export default reducer;