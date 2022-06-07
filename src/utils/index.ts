import { Product } from "../types";
import * as falso from "@ngneat/falso";

const imagesApiUrl = 'https://picsum.photos/id';

export function getRandomProducts(count: number): Product[] {
    const products: Product[] = [];
    for (let i = 0; i < count; i++) products.push(getRandomProduct());
    return products;
}

function getRandomProduct(): Product {
    const { id, price } = falso.randProduct();

    return {
        id,
        name: falso.randFood(),
        image: getRandomImage(),
        price: parseFloat(price),
    }
}

function getRandomImage(): string {
    const randomNumber: number = falso.randNumber({ min: 1, max: 1000 });
    return [imagesApiUrl, randomNumber.toString(),'200','200'].join('/');
}