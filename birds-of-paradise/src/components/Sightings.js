import React from "react";
import { connect } from 'react-redux';
import { fetchKingCounty } from '../actions/index';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';
// import cx from 'classnames';
// import "~react-vis/dist/style";

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
          
            {sightings.map((sighting, index) =>
              <li key={index}>
                <XYPlot
                  width={300}
                  height={300}>
                  <VerticalBarSeries
                    data={[
                      {x: 'A', y: 10},
                      {x: 'B', y: 5},
                      {x: 'C', y: 15}
                    ]}/>
                  <XAxis />
                  <YAxis />
                </XYPlot>
                <h3>Common Name: {sighting.comName}</h3>
                <h3>Sighting Location: {sighting.locName}</h3>
                <h4>Date: {sighting.obsDt}</h4>
                <h4>Number: {sighting.howMany}</h4>
              </li>
            )}
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