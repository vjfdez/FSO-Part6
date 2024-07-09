import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
      name: 'notification',
      initialState: "NONE",
      reducers: {
            text(state, action){
                  return action.payload
            }
      }
});

export const { text } = notificationSlice.actions;

export const showNotification = (string, time)=> {
    return async (dispatch)=> {
        dispatch(text(string));
        setTimeout(()=> dispatch(text('NONE')), time * 1000);
    };
};

export default notificationSlice.reducer;