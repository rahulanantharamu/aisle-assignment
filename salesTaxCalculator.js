function calculateTax(price, name) {
  let tax = 0;

  if (!name.includes('book') && !name.includes('chocolate') && !name.includes('pill')) {
    tax += price * 0.10;
  }

  if (name.includes('imported')) {
    tax += price * 0.05;
  }

  return Math.ceil(tax * 20) / 20; // Round up to nearest 0.05
}

function processInput(input) {
  const lines = input.trim().split('\n');
  let totalTax = 0;
  let totalPrice = 0;

  lines.forEach(line => {
    const parts = line.split(' at ');
    if (parts.length !== 2) return;

    const [qtyName, priceStr] = parts;
    const price = parseFloat(priceStr);
    const firstSpace = qtyName.indexOf(' ');
    const quantity = parseInt(qtyName.slice(0, firstSpace));
    const name = qtyName.slice(firstSpace + 1);

    const tax = calculateTax(price, name);
    const finalPrice = price + tax;

    totalTax += tax;
    totalPrice += finalPrice;

    console.log(`${quantity} ${name}: ${finalPrice.toFixed(2)}`);
  });

  console.log(`Sales Taxes: ${totalTax.toFixed(2)}`);
  console.log(`Total: ${totalPrice.toFixed(2)}`);
  console.log();
}

const input1 = `
1 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85
`;

const input2 = `
1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50
`;

const input3 = `
1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
1 box of imported chocolates at 11.25
`;

processInput(input1);
processInput(input2);
processInput(input3);
