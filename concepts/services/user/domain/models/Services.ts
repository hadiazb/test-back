import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DeliveryService, DeliveryServiceId } from './DeliveryService';
import type { Favor, FavorId } from './Favor';
import type { Insurances, InsurancesId } from './Insurances';
import type { PhoneRequest, PhoneRequestId } from './PhoneRequest';
import type { ProuctsOrder, ProuctsOrderId } from './ProuctsOrder';
import type { Users, UsersId } from './Users';

export interface ServicesAttributes {
  Id: number;
  Name?: string;
  TypeService?: number;
  RegistrationDate?: string;
  Id_Old?: string;
  IdDomiciliary?: number;
  deliveryNumber?: number;
  IdSubsidiary?: number;
  IsActive?: boolean;
  PaymentType?: number;
  TotalCost?: number;
  Comission?: number;
  LatitudeDomiciliary?: string;
  LongitudeDomiciliary?: string;
  UpdateDate?: string;
  IdUser: number;
  IsDeleted?: boolean;
}

export type ServicesPk = "Id";
export type ServicesId = Services[ServicesPk];
export type ServicesOptionalAttributes = "Id" | "Name" | "TypeService" | "RegistrationDate" | "Id_Old" | "IdDomiciliary" | "deliveryNumber" | "IdSubsidiary" | "IsActive" | "PaymentType" | "TotalCost" | "Comission" | "LatitudeDomiciliary" | "LongitudeDomiciliary" | "UpdateDate" | "IsDeleted";
export type ServicesCreationAttributes = Optional<ServicesAttributes, ServicesOptionalAttributes>;

export class Services extends Model<ServicesAttributes, ServicesCreationAttributes> implements ServicesAttributes {
  Id!: number;
  Name?: string;
  TypeService?: number;
  RegistrationDate?: string;
  Id_Old?: string;
  IdDomiciliary?: number;
  deliveryNumber?: number;
  IdSubsidiary?: number;
  IsActive?: boolean;
  PaymentType?: number;
  TotalCost?: number;
  Comission?: number;
  LatitudeDomiciliary?: string;
  LongitudeDomiciliary?: string;
  UpdateDate?: string;
  IdUser!: number;
  IsDeleted?: boolean;

  // Services hasMany DeliveryService via Services_Id
  DeliveryServices!: DeliveryService[];
  getDeliveryServices!: Sequelize.HasManyGetAssociationsMixin<DeliveryService>;
  setDeliveryServices!: Sequelize.HasManySetAssociationsMixin<DeliveryService, DeliveryServiceId>;
  addDeliveryService!: Sequelize.HasManyAddAssociationMixin<DeliveryService, DeliveryServiceId>;
  addDeliveryServices!: Sequelize.HasManyAddAssociationsMixin<DeliveryService, DeliveryServiceId>;
  createDeliveryService!: Sequelize.HasManyCreateAssociationMixin<DeliveryService>;
  removeDeliveryService!: Sequelize.HasManyRemoveAssociationMixin<DeliveryService, DeliveryServiceId>;
  removeDeliveryServices!: Sequelize.HasManyRemoveAssociationsMixin<DeliveryService, DeliveryServiceId>;
  hasDeliveryService!: Sequelize.HasManyHasAssociationMixin<DeliveryService, DeliveryServiceId>;
  hasDeliveryServices!: Sequelize.HasManyHasAssociationsMixin<DeliveryService, DeliveryServiceId>;
  countDeliveryServices!: Sequelize.HasManyCountAssociationsMixin;
  // Services hasMany Favor via Services_Id
  Favors!: Favor[];
  getFavors!: Sequelize.HasManyGetAssociationsMixin<Favor>;
  setFavors!: Sequelize.HasManySetAssociationsMixin<Favor, FavorId>;
  addFavor!: Sequelize.HasManyAddAssociationMixin<Favor, FavorId>;
  addFavors!: Sequelize.HasManyAddAssociationsMixin<Favor, FavorId>;
  createFavor!: Sequelize.HasManyCreateAssociationMixin<Favor>;
  removeFavor!: Sequelize.HasManyRemoveAssociationMixin<Favor, FavorId>;
  removeFavors!: Sequelize.HasManyRemoveAssociationsMixin<Favor, FavorId>;
  hasFavor!: Sequelize.HasManyHasAssociationMixin<Favor, FavorId>;
  hasFavors!: Sequelize.HasManyHasAssociationsMixin<Favor, FavorId>;
  countFavors!: Sequelize.HasManyCountAssociationsMixin;
  // Services hasMany Insurances via Services_Id
  Insurances!: Insurances[];
  getInsurances!: Sequelize.HasManyGetAssociationsMixin<Insurances>;
  setInsurances!: Sequelize.HasManySetAssociationsMixin<Insurances, InsurancesId>;
  addInsurance!: Sequelize.HasManyAddAssociationMixin<Insurances, InsurancesId>;
  addInsurances!: Sequelize.HasManyAddAssociationsMixin<Insurances, InsurancesId>;
  createInsurance!: Sequelize.HasManyCreateAssociationMixin<Insurances>;
  removeInsurance!: Sequelize.HasManyRemoveAssociationMixin<Insurances, InsurancesId>;
  removeInsurances!: Sequelize.HasManyRemoveAssociationsMixin<Insurances, InsurancesId>;
  hasInsurance!: Sequelize.HasManyHasAssociationMixin<Insurances, InsurancesId>;
  hasInsurances!: Sequelize.HasManyHasAssociationsMixin<Insurances, InsurancesId>;
  countInsurances!: Sequelize.HasManyCountAssociationsMixin;
  // Services hasMany PhoneRequest via IdServices
  PhoneRequests!: PhoneRequest[];
  getPhoneRequests!: Sequelize.HasManyGetAssociationsMixin<PhoneRequest>;
  setPhoneRequests!: Sequelize.HasManySetAssociationsMixin<PhoneRequest, PhoneRequestId>;
  addPhoneRequest!: Sequelize.HasManyAddAssociationMixin<PhoneRequest, PhoneRequestId>;
  addPhoneRequests!: Sequelize.HasManyAddAssociationsMixin<PhoneRequest, PhoneRequestId>;
  createPhoneRequest!: Sequelize.HasManyCreateAssociationMixin<PhoneRequest>;
  removePhoneRequest!: Sequelize.HasManyRemoveAssociationMixin<PhoneRequest, PhoneRequestId>;
  removePhoneRequests!: Sequelize.HasManyRemoveAssociationsMixin<PhoneRequest, PhoneRequestId>;
  hasPhoneRequest!: Sequelize.HasManyHasAssociationMixin<PhoneRequest, PhoneRequestId>;
  hasPhoneRequests!: Sequelize.HasManyHasAssociationsMixin<PhoneRequest, PhoneRequestId>;
  countPhoneRequests!: Sequelize.HasManyCountAssociationsMixin;
  // Services hasMany ProuctsOrder via IdServices
  ProuctsOrders!: ProuctsOrder[];
  getProuctsOrders!: Sequelize.HasManyGetAssociationsMixin<ProuctsOrder>;
  setProuctsOrders!: Sequelize.HasManySetAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  addProuctsOrder!: Sequelize.HasManyAddAssociationMixin<ProuctsOrder, ProuctsOrderId>;
  addProuctsOrders!: Sequelize.HasManyAddAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  createProuctsOrder!: Sequelize.HasManyCreateAssociationMixin<ProuctsOrder>;
  removeProuctsOrder!: Sequelize.HasManyRemoveAssociationMixin<ProuctsOrder, ProuctsOrderId>;
  removeProuctsOrders!: Sequelize.HasManyRemoveAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  hasProuctsOrder!: Sequelize.HasManyHasAssociationMixin<ProuctsOrder, ProuctsOrderId>;
  hasProuctsOrders!: Sequelize.HasManyHasAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  countProuctsOrders!: Sequelize.HasManyCountAssociationsMixin;
  // Services belongsTo Users via IdUser
  IdUser_User!: Users;
  getIdUser_User!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setIdUser_User!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createIdUser_User!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Services {
    return Services.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TypeService: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RegistrationDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdDomiciliary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deliveryNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdSubsidiary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PaymentType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalCost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Comission: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LatitudeDomiciliary: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LongitudeDomiciliary: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UpdateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'Id'
      }
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Services',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Services_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
