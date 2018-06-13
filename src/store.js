import { createStore } from "redux";
import appReservationsReducer from './reducers/app-reservation-reducer';

let appReservationsStore = createStore(appReservationsReducer);

export default {appReservationsStore};
