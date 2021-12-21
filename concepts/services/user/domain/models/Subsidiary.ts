import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CampaignsSubsidiary, CampaignsSubsidiaryId } from './CampaignsSubsidiary';
import type { City, CityId } from './City';
import type { Market, MarketId } from './Market';
import type { Order, OrderId } from './Order';
import type { ScheduleSubsidiary, ScheduleSubsidiaryId } from './ScheduleSubsidiary';

export interface SubsidiaryAttributes {
  Id: number;
  Name?: string;
  RequestDomiciliary?: boolean;
  IsActive?: boolean;
  Phone?: string;
  Address?: string;
  IdMarket: number;
  Id_Old?: string;
  IdCity: number;
  DomicileValue?: number;
  MarketingType?: string;
  MinDomicileValue?: number;
  ClosedByAdmin?: boolean;
  TimeDelivery?: string;
  ScheduledShipping?: boolean;
  OwnDomicile?: boolean;
  SelfService?: boolean;
  DeductedMarket?: boolean;
  FreeShipping?: boolean;
  Longitude?: string;
  Latitude?: string;
  CreateDate?: string;
  IsDeleted?: boolean;
}

export type SubsidiaryPk = "Id";
export type SubsidiaryId = Subsidiary[SubsidiaryPk];
export type SubsidiaryOptionalAttributes = "Id" | "Name" | "RequestDomiciliary" | "IsActive" | "Phone" | "Address" | "Id_Old" | "DomicileValue" | "MarketingType" | "MinDomicileValue" | "ClosedByAdmin" | "TimeDelivery" | "ScheduledShipping" | "OwnDomicile" | "SelfService" | "DeductedMarket" | "FreeShipping" | "Longitude" | "Latitude" | "CreateDate" | "IsDeleted";
export type SubsidiaryCreationAttributes = Optional<SubsidiaryAttributes, SubsidiaryOptionalAttributes>;

export class Subsidiary extends Model<SubsidiaryAttributes, SubsidiaryCreationAttributes> implements SubsidiaryAttributes {
  Id!: number;
  Name?: string;
  RequestDomiciliary?: boolean;
  IsActive?: boolean;
  Phone?: string;
  Address?: string;
  IdMarket!: number;
  Id_Old?: string;
  IdCity!: number;
  DomicileValue?: number;
  MarketingType?: string;
  MinDomicileValue?: number;
  ClosedByAdmin?: boolean;
  TimeDelivery?: string;
  ScheduledShipping?: boolean;
  OwnDomicile?: boolean;
  SelfService?: boolean;
  DeductedMarket?: boolean;
  FreeShipping?: boolean;
  Longitude?: string;
  Latitude?: string;
  CreateDate?: string;
  IsDeleted?: boolean;

  // Subsidiary belongsTo City via IdCity
  IdCity_City!: City;
  getIdCity_City!: Sequelize.BelongsToGetAssociationMixin<City>;
  setIdCity_City!: Sequelize.BelongsToSetAssociationMixin<City, CityId>;
  createIdCity_City!: Sequelize.BelongsToCreateAssociationMixin<City>;
  // Subsidiary belongsTo Market via IdMarket
  IdMarket_Market!: Market;
  getIdMarket_Market!: Sequelize.BelongsToGetAssociationMixin<Market>;
  setIdMarket_Market!: Sequelize.BelongsToSetAssociationMixin<Market, MarketId>;
  createIdMarket_Market!: Sequelize.BelongsToCreateAssociationMixin<Market>;
  // Subsidiary hasMany CampaignsSubsidiary via IdSubsidiary
  CampaignsSubsidiaries!: CampaignsSubsidiary[];
  getCampaignsSubsidiaries!: Sequelize.HasManyGetAssociationsMixin<CampaignsSubsidiary>;
  setCampaignsSubsidiaries!: Sequelize.HasManySetAssociationsMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  addCampaignsSubsidiary!: Sequelize.HasManyAddAssociationMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  addCampaignsSubsidiaries!: Sequelize.HasManyAddAssociationsMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  createCampaignsSubsidiary!: Sequelize.HasManyCreateAssociationMixin<CampaignsSubsidiary>;
  removeCampaignsSubsidiary!: Sequelize.HasManyRemoveAssociationMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  removeCampaignsSubsidiaries!: Sequelize.HasManyRemoveAssociationsMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  hasCampaignsSubsidiary!: Sequelize.HasManyHasAssociationMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  hasCampaignsSubsidiaries!: Sequelize.HasManyHasAssociationsMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  countCampaignsSubsidiaries!: Sequelize.HasManyCountAssociationsMixin;
  // Subsidiary hasMany Order via IdSubsidiary
  Orders!: Order[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<Order>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<Order, OrderId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<Order, OrderId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<Order, OrderId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<Order>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<Order, OrderId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<Order, OrderId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<Order, OrderId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<Order, OrderId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;
  // Subsidiary hasMany ScheduleSubsidiary via SubsidiaryId
  ScheduleSubsidiaries!: ScheduleSubsidiary[];
  getScheduleSubsidiaries!: Sequelize.HasManyGetAssociationsMixin<ScheduleSubsidiary>;
  setScheduleSubsidiaries!: Sequelize.HasManySetAssociationsMixin<ScheduleSubsidiary, ScheduleSubsidiaryId>;
  addScheduleSubsidiary!: Sequelize.HasManyAddAssociationMixin<ScheduleSubsidiary, ScheduleSubsidiaryId>;
  addScheduleSubsidiaries!: Sequelize.HasManyAddAssociationsMixin<ScheduleSubsidiary, ScheduleSubsidiaryId>;
  createScheduleSubsidiary!: Sequelize.HasManyCreateAssociationMixin<ScheduleSubsidiary>;
  removeScheduleSubsidiary!: Sequelize.HasManyRemoveAssociationMixin<ScheduleSubsidiary, ScheduleSubsidiaryId>;
  removeScheduleSubsidiaries!: Sequelize.HasManyRemoveAssociationsMixin<ScheduleSubsidiary, ScheduleSubsidiaryId>;
  hasScheduleSubsidiary!: Sequelize.HasManyHasAssociationMixin<ScheduleSubsidiary, ScheduleSubsidiaryId>;
  hasScheduleSubsidiaries!: Sequelize.HasManyHasAssociationsMixin<ScheduleSubsidiary, ScheduleSubsidiaryId>;
  countScheduleSubsidiaries!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Subsidiary {
    return Subsidiary.init({
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
    RequestDomiciliary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdMarket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Market',
        key: 'Id'
      }
    },
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdCity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'City',
        key: 'Id'
      }
    },
    DomicileValue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MarketingType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MinDomicileValue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ClosedByAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TimeDelivery: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ScheduledShipping: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OwnDomicile: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SelfService: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DeductedMarket: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FreeShipping: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Longitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Latitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Subsidiary',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Subsidiary_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
