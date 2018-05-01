export interface AnyModelInstance extends AnyObject {}

export interface AnyObject {
  [key: string]: any;
}

export interface IDataTypes extends AnyObject {}

export interface IModelDefinition extends AnyObject {}

export interface IConnector {
  createRecord(modelName: string, payload: AnyObject, options?: AnyObject): Promise<AnyModelInstance | any>;
  define(DataTypes: IDataTypes): IModelDefinition | any;
  defineClassMethods(): void;
  defineInstanceMethods(): void;
  destroyRecord(modelName: string, id: any, options?: AnyObject): Promise<void>;
  findAll(modelName: string, query: AnyObject, options?: AnyObject): Promise<AnyModelInstance[] | any>;
  findOne(modelName: string, id: any, options?: AnyObject): Promise<AnyModelInstance | any>;
  queryRecord(modelName: string, query: AnyObject, options?: any): Promise<AnyModelInstance | any>;
  updateRecord(modelName: string, id: any, updates: AnyObject, options?: AnyObject): Promise<AnyModelInstance | any>;
}

export class SQLConnector implements IConnector {
  async createRecord(modelName, payload, options) {}

  define(DataTypes) {}

  defineClassMethods() {}

  defineInstanceMethods() {}

  async destroyRecord(modelName, id, options) {}

  async findAll(modelName, query, options) {}

  async findOne(modelName, id, options) {}

  async queryRecord(modelName, query, options) {}

  async updateRecord(modelName, id, updates, options) {}
}
