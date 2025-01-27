import { GET_WEATHER_API_FAIL, GET_WEATHER_API_REQUEST, GET_WEATHER_API_SUCCESS }  from "../constrants/ATSConstrants.js"

export const weaherReducer = (state = {weather : []}, action) => {
    switch (action.type) {

        case GET_WEATHER_API_REQUEST:
            return {
                ...state,
                loading : true,
                weather : []
            }
        
        case GET_WEATHER_API_SUCCESS:
            return {
                ...state,
                loading : false,
                weather : action.payload
            }
        
        case GET_WEATHER_API_FAIL:
            return {
                ...state,
                loading : false,
                weather : null,
                error : action.payload
        }
    
        default:
            return state;
    }
}