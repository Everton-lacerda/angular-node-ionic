import {Request} from "express";

import { BaseController } from "./BaseController";
import { RequestOrderAnswer } from "../entity/RequestOrderAnswer";


export class RequestOrderAnswerController extends BaseController<RequestOrderAnswer> {
    constructor() {
        super(RequestOrderAnswer, false)
    }

    async all(request: Request) {
        let { orderUid } =request.params

        if (!orderUid) {
            return {
                status: 400,
                message: "informe o código da requisição"
            }
        }
        this.repository.find({
            requestOrder: orderUid
        })
    }

    async save(request: Request) {
        let _requestAnswer = <RequestOrderAnswer>request.body

        // _requestAnswer.requestOrder = orderUid

        super.isRequired(_requestAnswer.answer, 'Resposta da pergunta é obrigatório');
        super.isRequired(_requestAnswer.question, 'A questão é obrigatório');
        super.isRequired(_requestAnswer.requestOrder, 'requisição obrigatório');
          
        return super.save(_requestAnswer, request)
    }
}