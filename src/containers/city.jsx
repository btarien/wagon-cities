import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import { selectCity } from '../actions';

class City extends Component {
    componentWillMount() {
        this.props.selectCity();
    }

    handleClick = (event) => {
        this.props.selectCity(this.props.city)
    };

    render() {
        return(
            <div className="list-group-item" onClick={this.handleClick}>
                {this.props.city.name}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { selectCity: selectCity },
        dispatch
    ); 
}

function mapStateToProps(state) {
    return {
        activeCity: state.activeCity
    };
}
    
export default connect(mapStateToProps, mapDispatchToProps)(City);