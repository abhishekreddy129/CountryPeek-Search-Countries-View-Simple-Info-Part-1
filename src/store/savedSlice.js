import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
    name: "saved",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                item => item.code !== action.payload
            );
        }
    }
});

export const { addItem, removeItem } = savedSlice.actions;
export default savedSlice.reducer;