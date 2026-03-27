
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung',
    price: 800.0
}

const tablet: Product = {
    description: 'iPad',
    price: 900.0
}

const shoppingCart= [phone, tablet];
const tax = 0.15;

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation({ tax, products }: TaxCalculationOptions): number [] {
    let total = 0;
    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const [total, taxAmount] = taxCalculation({ 
    products: shoppingCart, 
    tax:tax });







//console.log('Total: ', result[0]);
//console.log('Tax: ', result[1]);

console.log('Total: ', total);
console.log('Tax: ', taxAmount);



export {}