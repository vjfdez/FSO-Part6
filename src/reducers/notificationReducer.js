import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
      name: 'notification',
      initialState: "NONE",
      reducers: {
            text(state, action){
                  console.log('action ', action);
                  return action.payload ? action.payload : state
            }
      }
});

export const { text } = notificationSlice.actions;
export default notificationSlice.reducer;