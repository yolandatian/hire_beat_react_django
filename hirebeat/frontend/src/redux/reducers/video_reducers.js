import { GET_VIDEOS, DELETE_VIDEO, ADD_VIDEO } from "../actions/action_types";

const initialState = {
  videos: [],
  loaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loaded: true,
      };
    case DELETE_VIDEO:
      return {
        ...state,
        videos: state.videos.filter((video) => video.id !== action.payload),
      };
    case ADD_VIDEO:
      return {
        ...state,
        videos: [...state.videos, action.payload],
      };
    default:
      return state;
  }
}
