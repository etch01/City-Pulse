
interface EventsState {
    events: any[];
}

const initialState: EventsState = {
    events: []
};

export const eventsReducer = (state = initialState, action: any): EventsState => {
  switch (action.type) {
    default:
      return state;
  }
};