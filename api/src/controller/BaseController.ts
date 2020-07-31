import {getRepository, Repository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { BaseNotification } from "../entity/BaseNotification";
import { request } from "http";

export abstract class BaseController<T> extends BaseNotification {

    private _repository: Repository<T>
    private _onlyRootController: boolean = false

    public errorRoot: any = {
        status: 401,
        errors: ['Você não está autorizado a executar essa funcionalidade']
    }

    constructor(entity: any, onlyRoot: boolean = false){
        super();
        this._repository = getRepository<T>(entity);
        this._onlyRootController = onlyRoot;
    } 

    public checkNotPermission (request: Request) {
        return (this._onlyRootController && !request.IsRoot)
    }

    async all(request: Request) {
       if( this.checkNotPermission (request)) return this.errorRoot
        return this._repository.find({ where: {'deleted': false} });
    }

    async one(request: Request, response: Response, next: NextFunction) {
       if( this.checkNotPermission (request)) return this.errorRoot
        return this._repository.findOne(request.params.id);
    }

    async save(model: any, request: Request, ignorePermissions: boolean = false) {
    if(!ignorePermissions )
        if( this.checkNotPermission (request)) return this.errorRoot

        if(model.uid) {
            delete model['createAt']
            delete model['updateAt']
            delete model['deleted']

            let _modelIndDB =  await this._repository.findOne(model.uid)
            if(_modelIndDB) {
                Object.assign(_modelIndDB, model);
            }
        }
        if(this.valid()) {    
            return this._repository.save(model);
        } else
            return {
                status: 400,
                errors: this.allNotifications 
            }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
      if( this.checkNotPermission (request)) return this.errorRoot
       let uid = request.params.id;
       let model: any = await this._repository.findOne(uid)
       if(model) {
           model.deleted = true
           return this._repository.save(model);
       } else {
        return {
            status: 404,
            errors: [
                "Item não encontrado no banco de dados"
            ]
        }
       }
    }

    get repository(): Repository<T> {
        return this._repository
    }
}