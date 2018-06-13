import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './calendar-header.css';

class CalendarHeader extends Component {

    render() {

        let columnsView = [];
        for (let column = 0; column <= this.props.columnNumber; column++) {
            columnsView.push(<div key={column} className="calendarBox">{column}</div>);
        }

        return (
            <div className="calendarHeader"><div className="calendarAppName">Apps</div>{columnsView}</div>
        );
    }
}

CalendarHeader.propTypes = {
    columnNumber: PropTypes.number.isRequired
}

export default CalendarHeader;
