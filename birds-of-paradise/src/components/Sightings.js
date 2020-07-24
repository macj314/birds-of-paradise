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
          <h2></h2>
          <ol>
            {sightings.map((sighting, index) =>
              <li key={index}>
                <h3>{sighting.comName}</h3>
                <p>{sighting.country}</p>
                <h3>{sighting.locName}</h3>
                <h4>{sighting.obsDt}</h4>
                <h4>{sighting.howMany}</h4>
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