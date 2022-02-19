/* eslint-disable no-console */
import orderByProps from './modules/orderbyprops';

const swordsman = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const sort = ['name', 'level'];

console.log(orderByProps(swordsman, sort));
