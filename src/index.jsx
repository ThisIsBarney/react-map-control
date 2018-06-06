import React from 'react';
import IconButton from 'material-ui/IconButton';
import { Look30Icon, Look60Icon, LookDownIcon, PlusIcon, MinusIcon, RePositionIcon, CompassIcon } from './svg';

const style = {
  main: {
    margin: 0, position: 'absolute', top: 10, left: 5, padding: 0,
  },
  icon: {
    margin: 0, position: 'absolute', width: 60, height: 60, padding: 0,
  },
  tooltip: {
    left: 60, top: 35,
  },
};
const MapControl = ({ viewport, callback }) => (
  <div style={style.main}>
    <IconButton tooltip="" tooltipPosition="bottom-center" style={{ ...style.icon, top: 0, transform: `rotate(${-viewport.bearing}deg)` }}>
      <CompassIcon />
    </IconButton>
    <IconButton
      tooltip="俯视视角"
      tooltipPosition="top-center"
      tooltipStyles={{ top: 25, left: 0 }}
      style={{ ...style.icon, top: 60 }}
      onClick={() => { callback({ pitch: 0, animation: true }); }}>
      <LookDownIcon />
    </IconButton>
    <IconButton
      tooltip="30度视角"
      tooltipPosition="top-center"
      tooltipStyles={{ top: 25, left: 0 }}
      style={{ ...style.icon, top: 120 }}
      onClick={() => { callback({ pitch: 30, animation: true }); }} >
      <Look30Icon />
    </IconButton>
    <IconButton
      tooltip="60度视角"
      tooltipPosition="top-center"
      tooltipStyles={{ top: 25, left: 0 }}
      style={{ ...style.icon, top: 180 }}
      onClick={() => { callback({ pitch: 60, animation: true }); }} >
      <Look60Icon />
    </IconButton>
    <IconButton
      tooltip="重置方向"
      tooltipPosition="top-center"
      tooltipStyles={{ top: 25, left: 0 }}
      style={{ ...style.icon, top: 240 }}
      onClick={() => { callback({ bearing: 0, animation: true }); }} >
      <RePositionIcon />
    </IconButton>
    <IconButton
      tooltip="放大地图"
      tooltipPosition="top-center"
      tooltipStyles={{ top: 25, left: 0 }}
      style={{ ...style.icon, top: 300 }}
      onClick={() => { callback({ zoom: Math.min(viewport.zoom + 1, 18), animation: true }); }} >
      <PlusIcon />
    </IconButton>
    <IconButton
      tooltip="缩小地图"
      tooltipPosition="top-center"
      tooltipStyles={{ top: 25, left: 0 }}
      style={{ ...style.icon, top: 360 }}
      onClick={() => { callback({ zoom: Math.max(viewport.zoom - 1, 8), animation: true }); }} >
      <MinusIcon />
    </IconButton>
  </div>
);

// noinspection JSUnusedGlobalSymbols
export default MapControl;
