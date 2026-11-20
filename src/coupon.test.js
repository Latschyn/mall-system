const assert = require('node:assert/strict');
const { calculateDiscount } = require('./coupon');

assert.equal(calculateDiscount(200, 20), 160);
assert.equal(calculateDiscount(100, 0), 100);
assert.equal(calculateDiscount(100, 100), 0);
assert.equal(calculateDiscount(50, 10), 45);

assert.equal(calculateDiscount(-100, 20), 'Invalid input');
assert.equal(calculateDiscount(100, -10), 'Invalid input');
assert.equal(calculateDiscount(100, 120), 'Invalid input');

console.log('All 7 coupon tests passed!');