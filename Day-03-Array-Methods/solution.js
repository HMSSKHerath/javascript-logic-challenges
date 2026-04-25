const items = [
    { name: "laptop", p: 1200, brand: "dell" },
    { name: "mouse", p: 25, brand: "logitech" },
    { name: "monitor", p: 200, brand: "dell" }
];

const showDellItems = items
    .filter(item => item.brand === "dell")
    .map(({name,brand}) => (`Brand: ${brand} - Name: ${name}`));

console.log(showDellItems);