import { CategoryModel } from './CategoryModel';
import { BaseModel } from "./BaseModel";

export class SubCategoryModel extends BaseModel {
    name: string;
    cost: number;
    description: string;
    category: CategoryModel

    constructor(){
        super()
        this.category = new CategoryModel()
    }
}