import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './header.css';

class Header extends Component {

    render() {

        let columnsView = [];
        for (let column = 0; column <= this.props.displayColumnCount; column++) {
            columnsView.push(<div key={column} className="calendarBox">{column}</div>);
        }

        return (
            <div className="calendarHeader"><div className="calendarAppName">Apps</div>{columnsView}</div>
        );
    }
}

Header.propTypes = {
    displayColumnCount: PropTypes.number.isRequired
}

function mapStateToProps(state) {
    return {
        displayColumnCount: state.calendar.displayColumnCount,
    };
}

export default connect(mapStateToProps)(Header);
