import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 

const myLatLng = {lat: 19.4368747, lng: -99.1412259};
 
class ViewMaps extends Component {
  static defaultProps = {
    center: myLatLng,
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC6ymkUmHMLmj5Sr6xDHhC50YYfmT1QP3U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}
 
export default ViewMaps;