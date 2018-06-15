import { GET_RESERVATION, ADD_RESERVATION, UPDATE_RESERVATION, DELETE_RESERVATION } from '../actions/reservation-actions';

const initialMock = {
    calendarData: [{
        id: 1, label: 'App one', reservations: [
            { id: 1, userId: 1, startDate: '2018-06-15T14:00:00+0200', endDate: '2018-06-15T23:00:00+0200' },
            { id: 4, userId: 2, startDate: '2018-06-15T15:00:00+0200', endDate: '2018-06-15T18:00:00+0200' },
        ]
    },
    {
        id: 2, label: 'App two', reservations: [
            { id: 2, userId: 1, startDate: '2018-06-15T14:00:00+0200', endDate: '2018-06-15T23:00:00+0200' },
            { id: 5, userId: 3, startDate: '2018-06-15T11:00:00+0200', endDate: '2018-06-15T16:00:00+0200' },
        ]
    },
    {
        id: 3, label: 'App three', reservations: [
            { id: 3, userId: 1, startDate: '2018-06-15T21:00:00+0200', endDate: '2018-06-15T23:00:00+0200' },
        ]
    }]
};

export default function (state = initialMock, action) {
    switch (action.type) {
        case GET_RESERVATION: {
            return state;
        }

        case ADD_RESERVATION: {
            let newReservation = { id: Date.now(), userId: action.payload.userId, startDate: action.payload.startDate, endDate: action.payload.endDate }
            let newCalendarData = state.calendarData.map(application => {
                if (application.id === action.payload.appId) {
                    return { ...application, reservations: [...application.reservations, newReservation] }
                } else {
                    return application
                }
            })

            return {
                ...state,
                calendarData: newCalendarData
            };
        }

        case UPDATE_RESERVATION: {
            return {
                ...state,
                // cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
            }
        }

        case DELETE_RESERVATION: {
            let newCalendarData = state.calendarData.map(application => {
                if (application.id === action.payload.appId) {
                    let newReservationList = application.reservations.filter(reservation => reservation.id !== action.payload.reservationId);
                    return { ...application, reservations: newReservationList }
                } else {
                    return application
                }
            })

            return {
                ...state,
                calendarData: newCalendarData
            };
        }

        default:
            return state;
    }
}