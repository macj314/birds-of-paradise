import React from "react";
import { connect } from 'react-redux';
import { fetchKingCounty } from '../actions/index';

class Sightings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchKingCounty());
  }

  render() {
    const { error, isLoading, sightings } = this.props;
    if(error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      console.log(sightings);
      return (
        <React.Fragment>
          <h2>Sightings in King County</h2>
          <hr/>
          <ol>
            {sightings.map((sighting, index) =>
              <li key={index}>
                <h3>Common Name: {sighting.comName}</h3>
                <h3>Sighting Location: {sighting.locName}</h3>
                <h4>Date: {sighting.obsDt}</h4>
                <h4>Number: {sighting.howMany}</h4>
              </li>
            )}
          </ol>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    sightings: state.sightings,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Sightings);