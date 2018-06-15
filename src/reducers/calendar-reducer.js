import { CHANGE_SELECTED_DATE } from '../actions/calendar-actions';

const initialState = {
    selectedDate: new Date(),
    displayColumnCount: 24,
    displayType: 'hours'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_SELECTED_DATE: {
            let newSelectedDate = new Date(state.selectedDate);
            newSelectedDate.setDate(state.selectedDate.getDate() + action.payload.days);

            return {
                ...state,
                selectedDate: newSelectedDate
            };
        }

        default:
            return state;
    }
}