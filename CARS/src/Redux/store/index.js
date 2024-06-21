import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "../slices/formSlice";
import {
  carsReducer,
  addCars,
  removeCars,
  changeSearchTerm,
} from "../slices/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, addCars, removeCars, changeSearchTerm, changeName, changeCost };
