export const GET_RESERVATION = 'GET_RESERVATION';
export const ADD_RESERVATION = 'ADD_RESERVATION';
export const UPDATE_RESERVATION = 'UPDATE_RESERVATION';
export const DELETE_RESERVATION = 'DELETE_RESERVATION';

export function addReservation(appId, userId, startDate, endDate) {
    return {
        type: ADD_RESERVATION,
        payload: { appId, userId, startDate, endDate }
    }
}

export function updateReservation(appId, reservationId, startDate, endDate) {
    return {
        type: UPDATE_RESERVATION,
        payload: {
            appId, reservationId, startDate, endDate
        }
    }
}

export function deleteReservation(appId, reservationId) {
    return {
        type: DELETE_RESERVATION,
        payload: {
            appId, reservationId
        }
    }
}

export default { addReservation, updateReservation, deleteReservation };