import React from "react";
import { connect } from 'react-redux';
import { sightingsByRegion } from '../actions/index';

class Sightings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(sightingsByRegion());
  }

  render () {
    
  }
}