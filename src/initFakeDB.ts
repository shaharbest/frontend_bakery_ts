import { getRandomProducts } from './utils';
import { writeFileSync } from 'fs';

const fakeDbPath = 'fakeDB.json';

const products = getRandomProducts(100);
writeFileSync(fakeDbPath, JSON.stringify({ products }, null, 2));

console.log('done');