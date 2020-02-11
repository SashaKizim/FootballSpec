import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';
import Standings from './Standings';
import Scorers from './Scorers';
import Matches from './Matches';
const Counter = props => (
  <div>
  <div className="row " >
  <div className="col-sm-12 col-md-9"><Standings league='sa'/></div>
  <div className='eplclassName="col-sm-12 col-md-3'> <Matches league='sa'/></div>
</div>
<Scorers  league='sa'/>
</div>
);

export default Counter;
