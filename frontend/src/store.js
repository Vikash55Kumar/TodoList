import { configureStore } from "@reduxjs/toolkit";
import { weaherReducer } from "./reducer/weatherReducer.js";

const store = configureStore ({
    reducer: {
        weather:weaherReducer
    }
})

export default store;

