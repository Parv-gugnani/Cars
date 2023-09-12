import { configureStore } from "@reduxjs/toolkit";
import { createRoot } from "react-dom/client.js";

import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice.js";

import { formReducer, changeName, changeCost } from "./slices/formReducer.js";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
