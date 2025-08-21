import { Event } from '../interfaces/events';
import { FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE, TOGGLE_FAVORITE } from '../actions/eventsAction';

interface EventsState {
    events: Event[];
    isLoadingEvents: boolean;
    error: any;
    favorites: FavoriteEvent[];
}

const initialState: EventsState = {
    events: [],
    isLoadingEvents: false,
    error: null,
    favorites: [],
};

export type FavoriteEvent = {
  id: string;
  name: string;
};

export const eventsReducer = (state = initialState, action: any): EventsState => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return { ...state, isLoadingEvents: true, error: null };
    case FETCH_EVENTS_SUCCESS:
      return { ...state, isLoadingEvents: false, events: action.payload };
    case FETCH_EVENTS_FAILURE:
      return { ...state, isLoadingEvents: false, error: action.payload};
      case TOGGLE_FAVORITE: {
        //add favorite to favorites but if already exist it will be removed
        const exists = state.favorites.some((fav) => fav.id === action.payload.id);
        if (exists) {
          return {
            ...state,
            favorites: state.favorites.filter((fav) => fav.id !== action.payload.id),
          };
        }
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    default:
      return state;
  }
};