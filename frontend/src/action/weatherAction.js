import { toast } from "react-toastify";
import { GET_WEATHER_API_FAIL, GET_WEATHER_API_REQUEST, GET_WEATHER_API_SUCCESS } from "../constrants/ATSConstrants";
import axios from "axios"

export const getWeatherDetails = () => async (dispatch) => {
    try {
        dispatch({ type: GET_WEATHER_API_REQUEST });
        
        const { data } = await axios.get(import.meta.env.VITE_WEATHER_API);
        if(!data) {
          toast.error("Wait till weather api connect");
        } else {
          toast.success("Weather api connected successfully")
        }
        dispatch({ type: GET_WEATHER_API_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
          type: GET_WEATHER_API_FAIL,
          payload: error.response?.data?.message || error.message,
        });
      }
};

