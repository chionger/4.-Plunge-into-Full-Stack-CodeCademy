//
// const inventory = {
//   sunglasses: 1900,
//   pants: 1088,
//   bags: 1344
// };
// const checkInventory = (order) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let inStock = order.every(item => inventory[item[0]] >= item[1]);
//       if (inStock) {
//         resolve(`Thank you. Your order was successful.`);
//       } else {
//         reject(`We're sorry. Your order could not be completed because some items are sold out.`);
//       }
//     }, 1000);
//   })
// };
//
// module.exports = { checkInventory };

const order = [['sunglasses', 1], ['bags', 2]];

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

let inStock = order.every(item => {
  console.log('item',item);
  console.log('item[0]',item[0]);
  console.log('item[1]',item[1]);
  console.log('inventory',inventory)
  console.log('inventory',inventory['sunglasses'])
  //  // >=
  //  console,log(item[1]);
  //  console.log(inventory[item[0]])
})
