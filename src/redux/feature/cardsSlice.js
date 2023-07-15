import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCards } from "../../supabase/getCards";

export const fetchCards = createAsyncThunk(
    "Prueba/Cards",
    async() => {
        try {
            const cards = await getCards()
            console.log(cards)
            if (cards) return cards
        } catch (err) {
            console.log("error fetching cards", err)
        }
    }
)

const initialState = {
    cardsData: null, status: 'idle' // 'pending' // 'failed' // 'success'
}

const cardsSlices = createSlice({
    name: "cardsSlices",
    initialState,
    extraReducers(builder){
        builder
          .addCase(fetchCards.fulfilled, (state, action) => {
            state.cardsData = action.payload;
            state.status = "success";
          })
          .addCase(fetchCards.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(fetchCards.rejected, (state, action) => {
            state.status = "failed";
        });
    }
})

export default cardsSlices.reducer;

