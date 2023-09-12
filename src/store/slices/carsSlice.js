import createSlice from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  intialState: {
    searchTerm: "",
    cars: [],
  },

  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {},
  },
});
