# @thisisbarney/react-map-control

a bundle of buttons for map control, includes:
* a compass indicating the current direction
* adjust pitch: 0/30/60 degrees
* reset bearing to 0
* zoom in/out the map

```jsx harmony
import React from 'react';
import MapControl from '@thisisbarney/react-map-control';

<MapControl
  viewport={viewport}
  callback={callback}
/>
```

`viewport` is the current viewport of `react-map-gl`

`callback` is the function which receives dest viewport and animate to it, eg

```javascript
callback = ({zoom, pitch, longitude, latitude, bearing}) => {
  const viewport = {
    longitude: longitude || viewport.longitude,
    latitude: latitude || viewport.latitude,
    pitch: pitch || viewport.pitch,
    zoom: zoom || viewport.zoom,
    bearing: bearing || viewport.bearing,
  };
  this.setState({
    viewport: {
      ...this.state.viewport,
      ...viewport,
    }
  });
}
```