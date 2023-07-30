import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// import Product from '../assets/images/foods/food_1.jpg'
// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Caldereta',
  'ChickenFillet',
  'Adobo',
  'Breaded Pork'
  
];
const PRODUCT_COLOR = ['#00AB55'];

// ----------------------------------------------------------------------

const products = [...Array(4)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `../assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 4, max: 20, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 20, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['With Rice', 'With Rice', 'With Rice']),
  };
});

export default products;
