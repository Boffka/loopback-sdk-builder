/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import {
  LoopBackAuth,
  ErrorHandler,
  JSONSearchParams,
  BaseLoopBackApi,
} from '../core/index';
import {
  RoomAccount,
  Account,
  Room,
  LoopBackFilter
} from '../../models/index';
import { LoopBackConfig } from '../../lb.config';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

/**
 * Api services for the `RoomAccount` model.
 */
@Injectable()
export class RoomAccountApi extends BaseLoopBackApi {

  constructor(
    @Inject(Http) http: Http,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth, 
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams, 
    @Optional() @Inject(ErrorHandler) errorHandler: ErrorHandler
  ) {
    super(http, auth, searchParams, errorHandler);
  }

  /**
   * Fetches belongsTo relation account.
   *
   * @param any id PersistedModel id
   *
   * @param boolean refresh 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public getAccount(id: any, refresh: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/:id/account";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (refresh) urlParams.refresh = refresh;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Fetches belongsTo relation room.
   *
   * @param any id PersistedModel id
   *
   * @param boolean refresh 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public getRoom(id: any, refresh: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/:id/room";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (refresh) urlParams.refresh = refresh;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Create a new instance of the model and persist it into the data source.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public create(data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: RoomAccount) => new RoomAccount(instance));
  }

  /**
   * Patch an existing model instance or insert a new one into the data source.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public upsert(data: any = undefined) {
    let method: string = "PATCH";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: RoomAccount) => new RoomAccount(instance));
  }

  /**
   * Replace an existing model instance or insert a new one into the data source.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public replaceOrCreate(data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/replaceOrCreate";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Check whether a model instance exists in the data source.
   *
   * @param any id Model id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `exists` – `{boolean}` - 
   */
  public exists(id: any) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/:id/exists";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Find a model instance by {{id}} from the data source.
   *
   * @param any id Model id
   *
   * @param object filter Filter defining fields and include
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public findById(id: any, filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/:id";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: RoomAccount) => new RoomAccount(instance));
  }

  /**
   * Replace attributes for a model instance and persist it into the data source.
   *
   * @param any id Model id
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public replaceById(id: any, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/:id/replace";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Find all instances of the model matched by filter from the data source.
   *
   * @param object filter Filter defining fields, where, include, order, offset, and limit
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public find(filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts";
    let routeParams: any = {};
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instances: Array<RoomAccount>) =>
        instances.map((instance: RoomAccount) => new RoomAccount(instance))
    );
  }

  /**
   * Find first instance of the model matched by filter from the data source.
   *
   * @param object filter Filter defining fields, where, include, order, offset, and limit
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public findOne(filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/findOne";
    let routeParams: any = {};
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: RoomAccount) => new RoomAccount(instance));
  }

  /**
   * Update instances of the model matched by {{where}} from the data source.
   *
   * @param object where Criteria to match model instances
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * The number of instances updated
   */
  public updateAll(where: any = undefined, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/update";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Delete a model instance by {{id}} from the data source.
   *
   * @param any id Model id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public deleteById(id: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/:id";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Count instances of the model matched by where from the data source.
   *
   * @param object where Criteria to match model instances
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public count(where: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/count";
    let routeParams: any = {};
    let postBody: any = {};
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @param any id PersistedModel id
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public updateAttributes(id: any, data: any = undefined) {
    let method: string = "PATCH";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/:id";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Create a change stream.
   *
   * @param object data Request data.
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `changes` – `{ReadableStream}` - 
   */
  public createChangeStream(options: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts/change-stream";
    let routeParams: any = {};
    let postBody: any = {
      options: options
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Create a new instance of the model and persist it into the data source.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `RoomAccount` object.)
   * </em>
   */
  public createMany(data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/room-accounts";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instances: Array<RoomAccount>) =>
        instances.map((instance: RoomAccount) => new RoomAccount(instance))
    );
  }


  /**
   * The name of the model represented by this $resource,
   * i.e. `RoomAccount`.
   */
  public getModelName() {
    return "RoomAccount";
  }
}
