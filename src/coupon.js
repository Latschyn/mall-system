// Coupon calculation module

function calculateDiscount(price, discount) {
    if (price < 0 || discount < 0 || discount > 100) {
        return "Invalid input";
    }

    let finalPrice = price * (1 - discount / 100);
    return finalPrice;
}

console.log(calculateDiscount(200, 20));

module.exports = { calculateDiscount };

// Read test configuration from an environment variable
const TEST_API_KEY = process.env.TEST_API_KEY;