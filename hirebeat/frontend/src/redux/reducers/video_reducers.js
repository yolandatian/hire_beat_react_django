import {
  GET_VIDEOS,
  DELETE_VIDEO,
  ADD_VIDEO,
  ADD_REVIEWS,
  GET_UNREVIEWED_VIDEO,
} from "../actions/action_types";

const initialState = {
  videos: [],
  loaded: false,
  review_count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loaded: true,
      };
    case GET_UNREVIEWED_VIDEO:
      return {
        videos: action.payload.video,
        loaded: true,
        review_count: action.payload.review_count,
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
    case ADD_REVIEWS:
    default:
      return state;
  }
}
