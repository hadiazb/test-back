import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Market, MarketId } from './Market';
import type { MarketCategory, MarketCategoryId } from './MarketCategory';

export interface MarketCategoryRelationAttributes {
  id: number;
  IdMarketCategory: number;
  IdMarket: number;
  IsDeleted?: boolean;
}

export type MarketCategoryRelationPk = "id";
export type MarketCategoryRelationId = MarketCategoryRelation[MarketCategoryRelationPk];
export type MarketCategoryRelationOptionalAttributes = "id" | "IsDeleted";
export type MarketCategoryRelationCreationAttributes = Optional<MarketCategoryRelationAttributes, MarketCategoryRelationOptionalAttributes>;

export class MarketCategoryRelation extends Model<MarketCategoryRelationAttributes, MarketCategoryRelationCreationAttributes> implements MarketCategoryRelationAttributes {
  id!: number;
  IdMarketCategory!: number;
  IdMarket!: number;
  IsDeleted?: boolean;

  // MarketCategoryRelation belongsTo Market via IdMarket
  IdMarket_Market!: Market;
  getIdMarket_Market!: Sequelize.BelongsToGetAssociationMixin<Market>;
  setIdMarket_Market!: Sequelize.BelongsToSetAssociationMixin<Market, MarketId>;
  createIdMarket_Market!: Sequelize.BelongsToCreateAssociationMixin<Market>;
  // MarketCategoryRelation belongsTo MarketCategory via IdMarketCategory
  IdMarketCategory_MarketCategory!: MarketCategory;
  getIdMarketCategory_MarketCategory!: Sequelize.BelongsToGetAssociationMixin<MarketCategory>;
  setIdMarketCategory_MarketCategory!: Sequelize.BelongsToSetAssociationMixin<MarketCategory, MarketCategoryId>;
  createIdMarketCategory_MarketCategory!: Sequelize.BelongsToCreateAssociationMixin<MarketCategory>;

  static initModel(sequelize: Sequelize.Sequelize): typeof MarketCategoryRelation {
    return MarketCategoryRelation.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdMarketCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MarketCategory',
        key: 'Id'
      }
    },
    IdMarket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Market',
        key: 'Id'
      }
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MarketCategoryRelation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "MarketCategoryRelation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
