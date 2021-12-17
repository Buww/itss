import { Entity } from '@loopback/repository';
export declare class MyUser extends Entity {
    id?: number;
    email: string;
    password: string;
    constructor(data?: Partial<MyUser>);
}
export interface MyUserRelations {
}
export declare type MyUserWithRelations = MyUser & MyUserRelations;
