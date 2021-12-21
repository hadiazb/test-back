import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Services, ServicesId } from './Services';

export interface DeliveryServiceAttributes {
  Id: number;
  Address?: string;
  Instruction?: string;
  PreparationTime?: number;
  Services_Id: number;
  DepartureLatitude?: string;
  DepartureLongitude?: string;
  Id_Old?: string;
  IsDeleted?: boolean;
}

export type DeliveryServicePk = "Id";
export type DeliveryServiceId = DeliveryService[DeliveryServicePk];
export type DeliveryServiceOptionalAttributes = "Id" | "Address" | "Instruction" | "PreparationTime" | "DepartureLatitude" | "DepartureLongitude" | "Id_Old" | "IsDeleted";
export type DeliveryServiceCreationAttributes = Optional<DeliveryServiceAttributes, DeliveryServiceOptionalAttributes>;

export class DeliveryService extends Model<DeliveryServiceAttributes, DeliveryServiceCreationAttributes> implements DeliveryServiceAttributes {
  Id!: number;
  Address?: string;
  Instruction?: string;
  PreparationTime?: number;
  Services_Id!: number;
  DepartureLatitude?: string;
  DepartureLongitude?: string;
  Id_Old?: string;
  IsDeleted?: boolean;

  // DeliveryService belongsTo Services via Services_Id
  Service!: Services;
  getService!: Sequelize.BelongsToGetAssociationMixin<Services>;
  setService!: Sequelize.BelongsToSetAssociationMixin<Services, ServicesId>;
  createService!: Sequelize.BelongsToCreateAssociationMixin<Services>;

  static initModel(sequelize: Sequelize.Sequelize): typeof DeliveryService {
    return DeliveryService.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Instruction: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PreparationTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Services_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Services',
        key: 'Id'
      }
    },
    DepartureLatitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DepartureLongitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DeliveryService',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "DeliveryService_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
