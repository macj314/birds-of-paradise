import React from "react";
import { connect } from 'react-redux';
import { fetchKingCounty } from '../actions/index';
import {XYPlot, MarkSeries} from 'react-vis';//HorizontalGridLines, XAxis, YAxis, BarSeries
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
    const Data = [
      {x: 1, y: 10, size: 30},
      {x: 1.7, y: 12, size: 10},
      {x: 2, y: 5, size: 1},
      {x: 3, y: 15, size: 12},
      {x: 2.5, y: 7, size: 4}
    ]
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
      <MarkSeries
        className="mark-series-example"
        sizeRange={[5, 15]}
        data={Data}/>
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