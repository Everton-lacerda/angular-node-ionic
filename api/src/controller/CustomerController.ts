import {Request} from "express";
import * as md5 from 'md5';
import { BaseController } from "./BaseController";
import { QuestionType } from "../entity/enum/QuestionType";
import { Customer } from "../entity/Customer";

export class CustomerController extends BaseController<Customer> {
    constructor() {
        super(Customer, true)
    }

    async save(request: Request) {
        let _customer = <Customer>request.body

        super.isRequired(_customer.name, 'O nome éobrigatório');
        super.isRequired(_customer.email, 'O email é obrigatório');
        super.isRequired(_customer.photo, 'A foto é obrigatório'); 
        super.isRequired(_customer.phone, 'A telefone é obrigatório');

        delete _customer.password;

        return super.save(_customer, request)
    }

    async createCustomer(request: Request) {
        let _customer = <Customer>request.body
        let { confirmPassword } = request.body 

        super.isRequired(_customer.name, 'O nome éobrigatório');
        super.isRequired(_customer.email, 'O email é obrigatório');
        super.isRequired(_customer.photo, 'A foto é obrigatório'); 
        super.isRequired(_customer.phone, 'A telefone é obrigatório'); 
        super.isRequired(_customer.password, 'A senha é obrigatória'); 
        super.isRequired(confirmPassword, 'A confirmação da senha é obrigatória'); 

        super.isTrue(_customer.password !== confirmPassword, 'A senha e a confirmação são diferentes')

        if( _customer.password ) {
            _customer.password = md5(_customer.password)
        } 

        return super.save(_customer, request, true )
    }
}