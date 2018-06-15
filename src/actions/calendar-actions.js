export const CHANGE_SELECTED_DATE = 'CHANGE_SELECTED_DATE';

export const changeSelectedDate = (days) => {
    return {
        type: CHANGE_SELECTED_DATE,
        payload: { days }
    }
}