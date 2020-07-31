import {Request} from "express";

import { BaseController } from "./BaseController";
import { Category } from "../entity/Category";



export class CategoryController extends BaseController<Category> {
    constructor() {
        super(Category, true)
    }

    async save(request: Request) {
        let _category = <Category>request.body
        super.isRequired(_category.name, 'O nome é obrigatório');
        return super.save(_category, request )
    }
}