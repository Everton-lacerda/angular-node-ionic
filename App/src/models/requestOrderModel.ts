import { SubCategoryModel } from './SubCategoryModel';
import { ServiceProviderModel } from './ServiceProviderModel';
import { UserModel } from './UserModel';
import { RequestStatus } from './enums/RequestStatus';

export class RequestOrderModel {
    longlat: string;
    title: string;
    description: string;
    statusOrder: RequestStatus;
    customer: UserModel;
    subCategory: SubCategoryModel;
    serviceProvider: ServiceProviderModel;
}