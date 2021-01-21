import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    channelId: null,
    channelName: null,
  },

  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },

    setChannelName: (state, action) => {
      state.channelName = action.payload.channelName;
    },

    setChannelId: (state, action) => {
      state.channelId = action.payload.channelId;
    },
  },
});

export const {
  setChannelInfo,
  setChannelName,
  setChannelId,
} = chatSlice.actions;

export const selectChannelId = (state) => state.chat.channelId;
export const selectChannelName = (state) => state.chat.channelName;
export default chatSlice.reducer;
