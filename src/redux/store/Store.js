import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "../feature/cardsSlice";

const Store = configureStore({
    reducer:{
        cardsSlice
    }
})

export default Store;