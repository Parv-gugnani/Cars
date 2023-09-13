import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "../slices/carsSlice";
import { formReducer, changeName, changeCost } from "../slices/formSlice"; // Import changeName and changeCost from formSlice

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
