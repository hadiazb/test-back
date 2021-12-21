import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Favor, FavorId } from './Favor';

export interface FavorUbicationAttributes {
  Id: number;
  OrigenLatitude?: string;
  OrigenLongitude?: string;
  DepartureLatitude?: string;
  DepartureLongitude?: string;
  IsActive?: boolean;
  Address?: string;
  DepartureAddress?: string;
  IdFavor: number;
  Instruction?: string;
  Order?: number;
  Cost?: number;
  IsDeleted?: boolean;
}

export type FavorUbicationPk = "Id";
export type FavorUbicationId = FavorUbication[FavorUbicationPk];
export type FavorUbicationOptionalAttributes = "Id" | "OrigenLatitude" | "OrigenLongitude" | "DepartureLatitude" | "DepartureLongitude" | "IsActive" | "Address" | "DepartureAddress" | "Instruction" | "Order" | "Cost" | "IsDeleted";
export type FavorUbicationCreationAttributes = Optional<FavorUbicationAttributes, FavorUbicationOptionalAttributes>;

export class FavorUbication extends Model<FavorUbicationAttributes, FavorUbicationCreationAttributes> implements FavorUbicationAttributes {
  Id!: number;
  OrigenLatitude?: string;
  OrigenLongitude?: string;
  DepartureLatitude?: string;
  DepartureLongitude?: string;
  IsActive?: boolean;
  Address?: string;
  DepartureAddress?: string;
  IdFavor!: number;
  Instruction?: string;
  Order?: number;
  Cost?: number;
  IsDeleted?: boolean;

  // FavorUbication belongsTo Favor via IdFavor
  IdFavor_Favor!: Favor;
  getIdFavor_Favor!: Sequelize.BelongsToGetAssociationMixin<Favor>;
  setIdFavor_Favor!: Sequelize.BelongsToSetAssociationMixin<Favor, FavorId>;
  createIdFavor_Favor!: Sequelize.BelongsToCreateAssociationMixin<Favor>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FavorUbication {
    return FavorUbication.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrigenLatitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OrigenLongitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DepartureLatitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DepartureLongitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DepartureAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdFavor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Favor',
        key: 'Id'
      }
    },
    Instruction: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FavorUbication',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FavorUbication_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
