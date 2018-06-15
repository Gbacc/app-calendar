import { combineReducers } from 'redux';
import reservationReducer from './reservation-reducer';
import calendarReducer from './calendar-reducer';

const allReducers = combineReducers({
    reservations: reservationReducer,
    calendar: calendarReducer
});

export default allReducers