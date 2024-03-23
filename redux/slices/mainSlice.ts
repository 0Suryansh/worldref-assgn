import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

interface Card {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

interface CardState {
  cardDetails: Card;
}

const initialState: CardState = {
  cardDetails: {
    activity: "",
    type: "",
    participants: 0,
    price: 0,
    link: "",
    key: "",
    accessibility: 0,
  },
};

const cardSlice = createSlice({
  name: "cards", 
  initialState, 
  reducers: {
    getResourcesSuccess(state, action) {
      const resources = action.payload;
      state.cardDetails = resources;
    },
  },
});

export const { getResourcesSuccess } = cardSlice.actions;

export default cardSlice.reducer;

export function getResources() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        "https://www.boredapi.com/api/activity",
      );

      const resources: Card = response.data;

      dispatch(getResourcesSuccess(resources));
    } catch (error) {
      console.log(error);
    }
  };
}