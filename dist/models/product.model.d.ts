import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id?: number;
    name: string;
    type: string;
    ref: string;
    price: number;
    description: string;
    image: string;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export declare type ProductWithRelations = Product & ProductRelations;
