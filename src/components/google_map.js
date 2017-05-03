import React, { Component } from 'react';

class GoogleMap extends Component {
  // componentDidMount is a react lifecycle method that gets called after the
  // component has been rendered to the screen
  componentDidMount(){
    // this.refs.map => where should the map get rendered
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // ref gives a direct reference to the html element through this.refs.map
    return (
      <div ref="map"></div>
    );
  }
}

export default GoogleMap;
