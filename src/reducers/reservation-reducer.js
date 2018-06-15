import { GET_RESERVATION, ADD_RESERVATION, UPDATE_RESERVATION, DELETE_RESERVATION } from '../actions/reservation-actions';

const todayDate = new Date();
let nextDayDate = new Date(todayDate);
nextDayDate.setDate(todayDate.getDate() + 1);
let previousDayDate = new Date(todayDate)
previousDayDate.setDate(todayDate.getDate() - 1);

const todayDateISO = todayDate.toISOString().substring(0, 10);
const nextDayDateISO = nextDayDate.toISOString().substring(0, 10);
const previousDayDateISO = previousDayDate.toISOString().substring(0, 10);

const initialMock = {
    calendarData: []
};

const todayMock = {
    calendarData: [{
        id: 1, label: 'App one', reservations: [
            { id: 1, userId: 1, startDate: todayDateISO + 'T14:00:00+0200', endDate: todayDateISO + 'T23:00:00+0200' },
            { id: 4, userId: 2, startDate: todayDateISO + 'T15:00:00+0200', endDate: todayDateISO + 'T18:00:00+0200' },
        ]
    },
    {
        id: 2, label: 'App two', reservations: [
            { id: 2, userId: 1, startDate: todayDateISO + 'T14:00:00+0200', endDate: todayDateISO + 'T23:00:00+0200' },
            { id: 5, userId: 3, startDate: todayDateISO + 'T11:00:00+0200', endDate: todayDateISO + 'T16:00:00+0200' },
        ]
    },
    {
        id: 3, label: 'App three', reservations: [
            { id: 3, userId: 1, startDate: todayDateISO + 'T21:00:00+0200', endDate: todayDateISO + 'T23:00:00+0200' },
        ]
    }]
};

const nextDayMock = {
    calendarData: [,
        {
            id: 2, label: 'App two', reservations: [
                { id: 2, userId: 1, startDate: nextDayDateISO + 'T10:00:00+0200', endDate: nextDayDateISO + 'T20:00:00+0200' },
                { id: 5, userId: 3, startDate: nextDayDateISO + 'T12:00:00+0200', endDate: nextDayDateISO + 'T17:00:00+0200' },
            ]
        },
        {
            id: 4, label: 'App four', reservations: [
                { id: 3, userId: 1, startDate: nextDayDateISO + 'T20:00:00+0200', endDate: nextDayDateISO + 'T22:00:00+0200' },
            ]
        }]
};

const previousDayMock = {
    calendarData: [,
        {
            id: 2, label: 'App two', reservations: [
                { id: 5, userId: 3, startDate: previousDayDateISO + 'T12:00:00+0200', endDate: previousDayDateISO + 'T17:00:00+0200' },
            ]
        },
        {
            id: 4, label: 'App four', reservations: [
                { id: 3, userId: 1, startDate: previousDayDateISO + 'T20:00:00+0200', endDate: previousDayDateISO + 'T22:00:00+0200' },
            ]
        }]
};


export default function (state = initialMock, action) {
    switch (action.type) {
        case GET_RESERVATION: {
            if (action.payload.date.toDateString() === todayDate.toDateString()) {
                return Object.assign({}, todayMock);
            } else if (action.payload.date.toDateString() === nextDayDate.toDateString()) {
                return Object.assign({}, nextDayMock);
            } else if (action.payload.date.toDateString() === previousDayDate.toDateString()) {
                return Object.assign({}, previousDayMock);
            }
            return todayMock;
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