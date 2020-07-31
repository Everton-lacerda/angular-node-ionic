import {Request} from "express";

import { BaseController } from "./BaseController";
import { Question } from "../entity/Question";
import { QuestionType } from "../entity/enum/QuestionType";

export class QuestionController extends BaseController<Question> {
    constructor() {
        super(Question)
    }

    async save(request: Request) {
        let _question = <Question>request.body
        super.isRequired(_question.question, 'A pergunta é obrigatório');
        super.isRequired(_question.type, 'O tipo é obrigatório');
        super.isRequired(_question.subcategory, 'A sub Categoria é obrigatório');

        if(_question.type && parseInt(_question.type.toString()) === QuestionType.Select) {
            super.isRequired(_question.options, 'Deve informar quais são as opções')
        }
        return super.save(_question, request)
    }
}