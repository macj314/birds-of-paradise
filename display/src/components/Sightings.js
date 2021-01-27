import React from 'react';

class Sightings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        items: []
        };
    }
  
    componentDidMount() {
      fetch("https://api.ebird.org/v2/data/obs/US-WA-033/recent?maxResults=1", {
          headers: {
              'X-eBirdApiToken': '${process.env.REACT_APP_EBIRD_API_TOKEN}',
          }
      })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        //   <ul>
        //     {items.map(item => (
        //       <li key={item.subId}>
        //         {item.comName}
        //       </li>
        //     ))}
        //   </ul>
        <h3>{items.comName}</h3>
        );
      }
    }
}

export default Sightings;