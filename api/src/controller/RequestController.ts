import {Request} from "express";

import { BaseController } from "./BaseController"; 
import { RequestOrder } from "../entity/RequestOrder";
import { RequestStatus } from "../entity/enum/RequestStatus";


export class RequestController extends BaseController<RequestOrder> {
    constructor() {
        super(RequestOrder, false)
    }

    async save(request: Request) {
        let _request = <RequestOrder>request.body
        super.isRequired(_request.title, 'Titulo é obrigatório'); 
        super.isRequired(_request.description, 'Descrição é obrigatório'); 
        super.isRequired(_request.customer, 'Preciso saber quem é você'); 
        super.isRequired(_request.longlat, 'Preciso saber onde você está'); 

        if(!_request.uid) {
            _request.statusOrder = RequestStatus.pending
        }
 
        return super.save(_request, request)
    }
}