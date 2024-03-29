import { INCREMENT, DECREMENT, RESET, ADD_EVENT, DELETE_ALL_EVENT, ALL_EVENT, THREE, SA} from '../actions/index';

const reducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    case THREE:
      if (state.count % 3 === 0) {
        if (state.count === 0) {
          return state
        }
        return { ...state, count: state.count + 10 }
      } else {
        return state
      }
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
    case SA:
      console.log(action.data, 'check')
      return { ...state, data: action.data };
    default:
      return state;
  };
};
export default reducer;