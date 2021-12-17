import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { MyUser, MyUserRelations } from '../models';
export declare class MyUserRepository extends DefaultCrudRepository<MyUser, typeof MyUser.prototype.id, MyUserRelations> {
    constructor(dataSource: DbDataSource);
}
