import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/WeatherForecasts';
import Standings from './Standings';
import Scorers from './Scorers';
import Matches from './Matches';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
class FetchData extends Component {
 

  render() {
    return (
      <div>
        <div className="row " >
        <div className="col-sm-12 col-md-9"><Standings league='epl'/></div>
        <div className='eplclassName="col-sm-12 col-md-3'> <Matches league='epl'/></div>
    </div>
    <Scorers league='epl'/>
      </div>
    );
  }
}





export default FetchData;
