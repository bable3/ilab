import './components/map';
import PinchZoom from 'pinch-zoom-js'
console.info(PinchZoom);

var el = document.querySelector('svg');
new PinchZoom(el, {});