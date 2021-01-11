import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import { setCities } from '../actions';
import City from './city';

class CityList extends Component {
    componentWillMount() {
        this.props.setCities();
    }

    render() {
        return(
            <div className="cities">
                {this.props.cities.map((city, idx) => <City city={city} key={idx}/>)}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { setCities: setCities },
        dispatch
    ); 
}

function mapStateToProps(state) {
    return {
        cities: state.cities
    };
}
    
export default connect(mapStateToProps, mapDispatchToProps)(CityList);