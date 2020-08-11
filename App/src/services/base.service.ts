import { HttpService } from "../services/http.service";
import { IResultHttp } from '../interfaces/IResultHttp';
import { environment } from 'src/environments/environment';


export abstract class BaseService<T> { 

    urlBase: string  = ''

    constructor(
        public url: string,
        public http: HttpService) {
        
        this.urlBase = `${environment.url_api}${this.url}`

    }

    public getAll(): Promise<IResultHttp> {
        return this.http.get(`${this.urlBase}`) 
    }

    public getById(uid: string): Promise<IResultHttp> {
        return this.http.get(`${this.urlBase}/${uid}`) 
    }

    public post(model: T): Promise<IResultHttp> {
        return this.http.post(this.urlBase, model) 
    }

    public delete(uid: string): Promise<IResultHttp> {
        return this.http.delete(`${this.urlBase}/${uid}`) 
    }


}