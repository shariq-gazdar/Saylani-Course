let tableContainer = document.querySelector(".tableContainer");
console.log(tableContainer);
let cars = [
  {
    brand: "Toyota",
    bestSold: ["Civic", "Supra ", "Atlas"],
    unitsSold: [20000, 5000, 10000],
    Price: [1500, 2000, 1100],
  },
  {
    brand: "Suzuki",
    bestSold: ["Alto", "Mehran ", "Cultus"],
    unitsSold: [25000, 7800, 19000],
    Price: [1000, 2500, 950],
  },
];
cars.forEach((car) => {
  let brand = car.brand;
  console.log(brand);
  let createdTable = document.createElement("table");
  createdTable.innerHTML = `<thead>
    <tr>
    <th>${brand}</th>
    <th class="px-5">Units Sold</th>
    <th class="px-5">Price </th>
    </tr>
    <thead>
    `;
  tableContainer.appendChild(createdTable);
  for (let i = 0; i < car.bestSold.length; i++) {
    createdTable.innerHTML += `
        <tr >
        <td class="border border-black px-2" >
            ${car.bestSold[i]}    
            </td>
            <td class="px-5 border border-black">
            ${car.unitsSold[i]} 
            </td>
            <td class="border border-black px-2" >
                ${car.Price[i]}    $
                </td>
            </tr>

            `;
  }
});
