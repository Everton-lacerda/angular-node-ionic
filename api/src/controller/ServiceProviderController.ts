import {Request} from "express";
import * as md5 from 'md5';
import { BaseController } from "./BaseController"; 
import { ServiceProvider } from "../entity/ServiceProvider";

export class ServiceProviderController extends BaseController<ServiceProvider> {
    constructor() {
        super(ServiceProvider, true)
    }

    private validationDefault(_serviceProvider: ServiceProvider):void {
        super.isRequired(_serviceProvider.name, 'O nome éobrigatório');
        super.isRequired(_serviceProvider.email, 'O email é obrigatório');
        super.isRequired(_serviceProvider.photo, 'A foto é obrigatório'); 
        super.isRequired(_serviceProvider.phone, 'A telefone é obrigatório'); 
        super.isRequired(_serviceProvider.categoriesCare, 'Categorias obrigatória'); 
        super.isRequired(_serviceProvider.citiesCare, 'Cidades atendidas obrigatória'); 
        super.isRequired(_serviceProvider.zipcode, 'CEP é obrigatório'); 
        super.isRequired(_serviceProvider.state, 'Estado é obrigatório'); 
    }

    async save(request: Request) {
        let _serviceProvider = <ServiceProvider>request.body
        this.validationDefault(_serviceProvider)

        delete _serviceProvider.password;

        return super.save(_serviceProvider, request)
    }

    async createServiceProvider(request: Request) {
        let _serviceProvider = <ServiceProvider>request.body
        let { confirmPassword } = request.body 

        this.validationDefault(_serviceProvider)
        super.isRequired(_serviceProvider.password, 'A senha é obrigatória'); 
        super.isRequired(confirmPassword, 'A confirmação da senha é obrigatória'); 

        super.isTrue(_serviceProvider.password !== confirmPassword, 'A senha e a confirmação são diferentes')

        if( _serviceProvider.password ) {
            _serviceProvider.password = md5(_serviceProvider.password)
        } 

        return super.save(_serviceProvider, request, true )
    }
}