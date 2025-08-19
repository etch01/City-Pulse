import { Event } from '../interfaces/events';
import { FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE } from '../actions/eventsAction';

interface EventsState {
    events: Event[];
    isLoadingEvents: boolean;
    error: any;
}

const initialState: EventsState = {
    events: [],
    isLoadingEvents: false,
    error: null,
};

export const eventsReducer = (state = initialState, action: any): EventsState => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return { ...state, isLoadingEvents: true, error: null };
    case FETCH_EVENTS_SUCCESS:
      return { ...state, isLoadingEvents: false, events: action.payload };
    case FETCH_EVENTS_FAILURE:
      return { ...state, isLoadingEvents: false, error: action.payload}
    default:
      return state;
  }
};