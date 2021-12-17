import { Filter, FilterExcludingWhere } from '@loopback/repository';
import { Product } from '../models';
import { ProductRepository } from '../repositories';
import { Geocoder } from '../services';
export declare class ProductController {
    productRepository: ProductRepository;
    protected geoService: Geocoder;
    constructor(productRepository: ProductRepository, geoService: Geocoder);
    create(product: Omit<Product, 'id'>): Promise<Product>;
    find(filter?: Filter<Product>): Promise<Product[]>;
    findById(id: number, filter?: FilterExcludingWhere<Product>): Promise<Product>;
    updateById(id: number, product: Product): Promise<void>;
    deleteById(id: number): Promise<void>;
    deleteAll(): Promise<void>;
}
