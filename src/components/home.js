import React from 'react';
import { connect } from 'react-redux';
import './home.css';

const Home = props => {
    return (
        <div className="home">
            <div className="row">
                <div className={`col s4 ${props.accent}`}></div>
                <div className={`col s8 ${props.main}`}></div>
            </div>
        </div>

    )
}

function mapsStateToProps(state) {
    return {
        accent: state.theme.theme.accent,
        main: state.theme.theme.main
    }
}

export default connect(mapsStateToProps)(Home);