import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { City, CityId } from './City';
import type { Market, MarketId } from './Market';

export interface MarketRankingAttributes {
  Id: number;
  Estatus?: boolean;
  IdMarket: number;
  IdCity: number;
  Position?: number;
  IsDeleted?: boolean;
  CreateDate?: string;
}

export type MarketRankingPk = "Id";
export type MarketRankingId = MarketRanking[MarketRankingPk];
export type MarketRankingOptionalAttributes = "Id" | "Estatus" | "Position" | "IsDeleted" | "CreateDate";
export type MarketRankingCreationAttributes = Optional<MarketRankingAttributes, MarketRankingOptionalAttributes>;

export class MarketRanking extends Model<MarketRankingAttributes, MarketRankingCreationAttributes> implements MarketRankingAttributes {
  Id!: number;
  Estatus?: boolean;
  IdMarket!: number;
  IdCity!: number;
  Position?: number;
  IsDeleted?: boolean;
  CreateDate?: string;

  // MarketRanking belongsTo City via IdCity
  IdCity_City!: City;
  getIdCity_City!: Sequelize.BelongsToGetAssociationMixin<City>;
  setIdCity_City!: Sequelize.BelongsToSetAssociationMixin<City, CityId>;
  createIdCity_City!: Sequelize.BelongsToCreateAssociationMixin<City>;
  // MarketRanking belongsTo Market via IdMarket
  IdMarket_Market!: Market;
  getIdMarket_Market!: Sequelize.BelongsToGetAssociationMixin<Market>;
  setIdMarket_Market!: Sequelize.BelongsToSetAssociationMixin<Market, MarketId>;
  createIdMarket_Market!: Sequelize.BelongsToCreateAssociationMixin<Market>;

  static initModel(sequelize: Sequelize.Sequelize): typeof MarketRanking {
    return MarketRanking.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Estatus: {
      type: DataTypes.BOOLEAN,
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
    IdCity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'City',
        key: 'Id'
      }
    },
    Position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'MarketRanking',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "MarketRanking_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
