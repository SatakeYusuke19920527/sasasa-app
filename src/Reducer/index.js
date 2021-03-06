const reducer = (state = [], action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
      case 'NACREMENT':
      return { ...state, count: 0 };
    default:
      return state;
}
}

export default reducer;