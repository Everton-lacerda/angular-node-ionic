import { QuestionType } from './enums/QuestionType';
import { BaseModel } from './BaseModel';
import { SubCategoryModel } from './SubCategoryModel';

export class QuestionModel extends BaseModel {
    question: string;
    type: QuestionType;
    options: string;
    subCategory: SubCategoryModel

    constructor() {
        super()
        this.subCategory = new SubCategoryModel
    }
}