import React, { Component } from 'react';

import CalendarRow from './calendar-row/calendar-row';
import CalendarHeader from './calendar-header/calendar-header';

import reservationActions from '../../actions/reservation-actions';
import store from '../../store';

import './calendar.css';

class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = store.appReservationsStore.getState();

        store.appReservationsStore.subscribe(() =>
            this.setState( store.appReservationsStore.getState())
        );
    }

    getCalendarDataByDay = (date) => {
        // List of applications with data attached to it for the defined date
        return store.appReservationsStore.getState();
    }

    switchToPreviousDate = () => {
        let previousDate = this.state.selectedDate;
        previousDate.setDate(this.state.selectedDate.getDate() - 1);

        this.setState({ selectedDate: previousDate });
    }

    switchToNextDate = () => {
        let nextDate = this.state.selectedDate;
        nextDate.setDate(this.state.selectedDate.getDate() + 1);

        this.setState({ selectedDate: nextDate });
    }

    mockAddReservation = () => {
        store.appReservationsStore.dispatch(reservationActions.addReservation(3, 2, '2018-06-13T14:00:00+0200', '2018-06-13T19:00:00+0200'));
    }

    mockRemoveReservation = () => {
        store.appReservationsStore.dispatch(reservationActions.deleteReservation(1,1));
    }

    render() {

        const renderCount = 24;

        const calendarRowsView = this.state.calendarData.map((calendarRow) => {
            return (<CalendarRow key={calendarRow.id} data={calendarRow} currentDate={this.state.selectedDate} columnNumber={renderCount}></CalendarRow>)
        })

        return (
            <div className="container">
                <div>calendar</div>
                <div className="dateSelector">
                    <button onClick={this.switchToPreviousDate}>&lsaquo;</button>
                    <span>{this.state.selectedDate.toLocaleDateString()}</span>
                    <button onClick={this.switchToNextDate}>&rsaquo;</button>
                    <button onClick={this.mockAddReservation}>Add</button>
                    <button onClick={this.mockRemoveReservation}>Remove</button>
                </div>
                <CalendarHeader columnNumber={renderCount} />
                {calendarRowsView}
            </div>
        )
    }
}

export default Calendar;