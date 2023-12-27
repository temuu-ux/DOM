const product = [
  {
    Id: 1,
    name: "mac",
    price: 123,
  },
  {
    Id: 2,
    name: "samsung",
    price: 1234,
  },
  {
    Id: 3,
    name: "iphone",
    price: 1235,
  },
  {
    Id: 4,
    name: "tv",
    price: 12,
  },
];
let b = 0;
function gg() {
  let thing = product.filter((a) => {
    return a.name;
  });
}
gg();
console.log(thing);
