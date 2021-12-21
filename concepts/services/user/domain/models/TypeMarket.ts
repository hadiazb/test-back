import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Market, MarketId } from './Market';

export interface TypeMarketAttributes {
  Id: number;
  Name?: string;
  Image?: string;
  StatusCall?: number;
  InitialStatus?: number;
  NotifyTime?: number;
  Id_Old?: string;
  IsDeleted?: boolean;
  CreateDate?: string;
  IsActive?: boolean;
}

export type TypeMarketPk = "Id";
export type TypeMarketId = TypeMarket[TypeMarketPk];
export type TypeMarketOptionalAttributes = "Id" | "Name" | "Image" | "StatusCall" | "InitialStatus" | "NotifyTime" | "Id_Old" | "IsDeleted" | "CreateDate" | "IsActive";
export type TypeMarketCreationAttributes = Optional<TypeMarketAttributes, TypeMarketOptionalAttributes>;

export class TypeMarket extends Model<TypeMarketAttributes, TypeMarketCreationAttributes> implements TypeMarketAttributes {
  Id!: number;
  Name?: string;
  Image?: string;
  StatusCall?: number;
  InitialStatus?: number;
  NotifyTime?: number;
  Id_Old?: string;
  IsDeleted?: boolean;
  CreateDate?: string;
  IsActive?: boolean;

  // TypeMarket hasMany Market via IdTypeMarket
  Markets!: Market[];
  getMarkets!: Sequelize.HasManyGetAssociationsMixin<Market>;
  setMarkets!: Sequelize.HasManySetAssociationsMixin<Market, MarketId>;
  addMarket!: Sequelize.HasManyAddAssociationMixin<Market, MarketId>;
  addMarkets!: Sequelize.HasManyAddAssociationsMixin<Market, MarketId>;
  createMarket!: Sequelize.HasManyCreateAssociationMixin<Market>;
  removeMarket!: Sequelize.HasManyRemoveAssociationMixin<Market, MarketId>;
  removeMarkets!: Sequelize.HasManyRemoveAssociationsMixin<Market, MarketId>;
  hasMarket!: Sequelize.HasManyHasAssociationMixin<Market, MarketId>;
  hasMarkets!: Sequelize.HasManyHasAssociationsMixin<Market, MarketId>;
  countMarkets!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof TypeMarket {
    return TypeMarket.init({
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
    Image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    StatusCall: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InitialStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NotifyTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TypeMarket',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "TypeMarket_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
