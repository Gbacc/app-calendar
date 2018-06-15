import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeSelectedDate } from '../../actions/calendar-actions';
import { addReservation, deleteReservation, getReservationForDate } from '../../actions/reservation-actions';

class Selector extends Component {

    constructor(props) {
        super(props);
        this.props.getReservationForDate(this.props.selectedDate);
    }

    mockAddReservation = () => {
        this.props.addReservation(3, 2, '2018-06-15T14:00:00+0200', '2018-06-15T19:00:00+0200');
    }

    mockRemoveReservation = () => {
        this.props.deleteReservation(1, 1);
    }

    changeSelectedDate = (days) => {
        this.props.changeSelectedDate(days);
    }

    componentWillReceiveProps(nextProps) {
        this.props.getReservationForDate(nextProps.selectedDate);
    }

    render() {
        return (
            <div className="dateSelector">
                <button onClick={this.changeSelectedDate.bind(this, -1)}>&lsaquo;</button>
                <span>{this.props.selectedDate.toLocaleDateString()}</span>
                <button onClick={this.changeSelectedDate.bind(this, 1)}>&rsaquo;</button>
                <button onClick={this.mockAddReservation}>Add</button>
                <button onClick={this.mockRemoveReservation}>Remove</button>
            </div>
        )
    }
}

Selector.propTypes = {
    selectedDate: PropTypes.objectOf(Date).isRequired,
}

function mapStateToProps(state) {
    return {
        selectedDate: state.calendar.selectedDate
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ changeSelectedDate: changeSelectedDate, addReservation: addReservation, deleteReservation: deleteReservation, getReservationForDate: getReservationForDate }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Selector);
