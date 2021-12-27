import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Market, MarketId } from './Market';

export interface CollectTaxesTypeAttributes {
  id: number;
  Name?: string;
  IsDeleted?: boolean;
}

export type CollectTaxesTypePk = "id";
export type CollectTaxesTypeId = CollectTaxesType[CollectTaxesTypePk];
export type CollectTaxesTypeOptionalAttributes = "id" | "Name" | "IsDeleted";
export type CollectTaxesTypeCreationAttributes = Optional<CollectTaxesTypeAttributes, CollectTaxesTypeOptionalAttributes>;

export class CollectTaxesType extends Model<CollectTaxesTypeAttributes, CollectTaxesTypeCreationAttributes> implements CollectTaxesTypeAttributes {
  id!: number;
  Name?: string;
  IsDeleted?: boolean;

  // CollectTaxesType hasMany Market via IdCollectTaxesType
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

  static initModel(sequelize: Sequelize.Sequelize): typeof CollectTaxesType {
    return CollectTaxesType.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'CollectTaxesType',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "CollectTaxesType_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
