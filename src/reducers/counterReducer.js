import { DECREMENT, DECREMENT_1, INCREMENT, INCREMENT_1 } from '../actions/actionTypes';

const initialState = {
  count: 0,
  count_1: 0
};
const counterReducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    case INCREMENT_1:
      return {
        ...state,
        count_1: state.count_1 + 1
      };
    case DECREMENT_1:
      return {
        ...state,
        count_1: state.count_1 - 1
      };
    default:
      return state;
  }
}

export default counterReducer