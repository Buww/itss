import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { MyUser, MyUserRelations } from '../models';

export class MyUserRepository extends DefaultCrudRepository<
  MyUser,
  typeof MyUser.prototype.id,
  MyUserRelations
> {
  constructor(
    @inject('datasources.itss') dataSource: DbDataSource,
  ) {
    super(MyUser, dataSource);
  }
}
