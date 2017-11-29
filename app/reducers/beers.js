import {
  BEERS_FETCH_REQUEST,
  BEERS_FETCH_SUCCESS,
  BEERS_FETCH_FAILURE,
} from 'DetoxTest/app/constants/actionTypes';

export const initialState = {
  isStarted: false,
  isFetching: false,
  items: [],
};

export default function beers(state = initialState, action) {
  let items;
  let links;
  switch (action.type) {
    case BEERS_FETCH_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true,
      };
    case BEERS_FETCH_SUCCESS:
      items = action.payload;
      return {
        ...state,
        isFetching: false,
        items,
        links,
      };
    case BEERS_FETCH_FAILURE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
