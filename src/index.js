import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './state-drills/HelloWorld.js'
import Bomb from './state-drills/Bomb';
import RoulletteGun from './state-drills/RoulletteGun'

ReactDOM.render(<RoulletteGun bulletInChamber={8}/>, document.getElementById('root'));

