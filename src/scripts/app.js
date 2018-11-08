import hello from './components/hello';
import './components/map';
import { name } from './components/hello2';
import PinchZoom from 'pinch-zoom-js'
console.info(PinchZoom);

console.info(`Hello ${hello.name}`);
console.info(`Hello ${name()}`);
