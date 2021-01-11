import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class ActiveCity extends Component {
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

function mapStateToProps(state) {
    return {
        activeCity: state.activeCity
    };
}
    
export default connect(mapStateToProps)(ActiveCity);
