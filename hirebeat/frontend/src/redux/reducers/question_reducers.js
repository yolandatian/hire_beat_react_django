import { GET_QUESTIONS, NEXT_QUESTION } from "../actions/action_types";

const initialState = {
  questions: [],
  q_index: 0,
  q_count: 0,
  done: false,
  loaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        loaded: true,
        questions: action.payload,
        q_count: action.payload.length,
      };
    case NEXT_QUESTION:
      console.log("next question");
      if (state.q_index == state.q_count - 1) {
        return {
          ...state,
          done: true,
        };
      }
      return {
        ...state,
        q_index: state.q_index + 1,
      };
    default:
      return state;
  }
}
