import { INCREMENT, DECREMENT, INCREMENT_1, DECREMENT_1 } from "./actionTypes";

const increment = () => {
  console.log("increment action");
  return {
    type: INCREMENT
  };
};

const decrement = () => {
  console.log("decrement action");
  return {
    type: DECREMENT
  };
};
const increment_1 = () => {
  console.log("increment action");
  return {
    type: INCREMENT_1
  };
};

const decrement_1 = () => {
  console.log("decrement action");
  return {
    type: DECREMENT_1
  };
};

export { increment, decrement, increment_1, decrement_1 };
