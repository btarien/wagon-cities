import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import { selectCity } from '../actions';

class ActiveCity extends Component {
    componentWillMount() {
        this.props.selectCity();
    }

    render() {
        if (this.props.activeCity) {
            const imgUrl = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`
            return(
                <div className="active-city">
                    <h3>{this.props.activeCity.name}</h3>
                    <p>{this.props.activeCity.address}</p>
                    <img src={imgUrl} alt="city image"/>
                </div>
            );
        } else {
            return (
                <div className="active-city"></div>
            );
        }
        
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
    
export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
