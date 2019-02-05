import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions'

const initialState = {
  characters: [],
  isFetching: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ""
      }
    case FETCH_FAILURE:
      return{
        ...state,
        error: action.payload
      }   
    default:
      return state;
  }
};
