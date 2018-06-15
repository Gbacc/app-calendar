import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Selector from './selector';
import Header from './header';
import Reservation from './reservation';

import './calendar.css';

class Calendar extends Component {

    render() {
        const calendarRowsView = this.props.calendarData.map((calendarRow) => {
            return (<Reservation key={calendarRow.id} data={calendarRow}></Reservation>)
        })

        return (
            <div>
                <Selector />
                <Header />
                {calendarRowsView}
            </div>
        )
    }
}

Calendar.propTypes = {
    calendarData: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
    return {
        calendarData: state.reservations.calendarData
    };
}


export default connect(mapStateToProps)(Calendar);