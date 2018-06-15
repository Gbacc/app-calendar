import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './reservation.css';

class Reservation extends Component {
    render() {
        let columnsView = [];

        // Refence de date displayed by the column starting 0 am
        let columnDate = new Date(this.props.selectedDate);
        columnDate.setHours(0);

        for (let column = 0; column <= this.props.displayColumnCount; column++) {

            let reservationOnThisColumn = 0;

            // Check every reservation if it matches the column timestamp
            for (let appReservation of this.props.data.reservations) {
                const startDate = new Date(appReservation.startDate);
                const endDate = new Date(appReservation.endDate);
                if (startDate <= columnDate && endDate >= columnDate) {
                    reservationOnThisColumn++;
                }
            }

            columnsView.push(<div key={column} className={'calendarBox ' + (reservationOnThisColumn > 0 ? 'reserved' : '')}>{reservationOnThisColumn}</div>);

            // Add an hour for the next column
            columnDate.setHours(columnDate.getHours() + 1);
        }

        return (
            <div className="calendarRow"><div className="calendarAppName">{this.props.data.label}</div>{columnsView}</div>
        );
    }
}

Reservation.propTypes = {
    data: PropTypes.object.isRequired,
    selectedDate: PropTypes.objectOf(Date).isRequired,
    displayColumnCount: PropTypes.number.isRequired
}

function mapStateToProps(state) {
    return {
        displayColumnCount: state.calendar.displayColumnCount,
        selectedDate: state.calendar.selectedDate,
    };
}

export default connect(mapStateToProps)(Reservation);
