
import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// function App() {
//   const [getMessage, setGetMessage] = useState({})

//   useEffect(()=>{
//     axios.get('http://localhost:5000/flask/hello').then(response => {
//       console.log("SUCCESS", response)
//       setGetMessage(response)
//     }).catch(error => {
//       console.log(error)
//     })

//   }, [])
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>React + Flask Tutorial</p>
//         <div>{getMessage.status === 200 ? 
//           <h3>{getMessage.data.message}</h3>
//           :
//           <h3>LOADING</h3>}</div>
//       </header>
//     </div>
//   );
// }
// export default App;
//------------------ https://www.npmjs.com/package/@react-google-maps/api
const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function App() {
  const APIKEY = process.env.REACT_APP_APIKEY
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: APIKEY
  })
  

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>MAP APP</p>
         <h3>FUCK THIS</h3>
       </header>
       <div className="App-header">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </div>
    </div>
  ) : <></>
}

export default React.memo(App); 