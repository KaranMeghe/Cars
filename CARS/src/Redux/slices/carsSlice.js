import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },

  reducers: {
    changeSearchTerm(state, action) {
      state.cars = action.payload;
    },

    addCars(state, action) {
      // Assumption: actionpayload === {name:"car", cost:1,20000}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCars(state, action) {
      //Assumption: action.payload === the id of car we want to remove
      const updatedCars = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updatedCars;
    },
  },
});

export const { addCars, removeCars, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
