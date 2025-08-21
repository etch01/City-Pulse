import Config from 'react-native-config';
import { NetworkLayer}  from '../../services/api/apiLayer';

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const getEvents = () => async (dispatch: any) => {
    const networkLayer = new NetworkLayer();
    dispatch({ type: FETCH_EVENTS_REQUEST });
    try {
        const apiKey = Config.API_KEY;
        const endpoint = `events.json?apikey=${apiKey}`;
        const data: any = await networkLayer.get_request(endpoint);
        dispatch({ type: FETCH_EVENTS_SUCCESS, payload: data?._embedded?.events });
      } catch (error:any) {
          console.log("Fetching Events Error: ",error);
        dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.message });
      }
}

export const searchEvents = (keyword: string, searchType: string) => async (dispatch: any) => {
  const networkLayer = new NetworkLayer();
  dispatch({ type: FETCH_EVENTS_REQUEST });
  try {
      const apiKey = Config.API_KEY;
      const endpoint = `events.json?${searchType}=${keyword}&apikey=${apiKey}`;
      const data: any = await networkLayer.get_request(endpoint);
      dispatch({ type: FETCH_EVENTS_SUCCESS, payload: data?._embedded?.events });
    } catch (error:any) {
        console.log("Fetching Events Error: ",error);
      dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.message });
    }
}

export const toggleFavorite = (event: { id: string; name: string }) => ({
  type: TOGGLE_FAVORITE,
  payload: event,
});