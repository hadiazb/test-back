import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CollectTaxesType, CollectTaxesTypeId } from './CollectTaxesType';
import type { MarketCategoryRelation, MarketCategoryRelationId } from './MarketCategoryRelation';
import type { MarketRanking, MarketRankingId } from './MarketRanking';
import type { MarketScore, MarketScoreId } from './MarketScore';
import type { PaymetMarket, PaymetMarketId } from './PaymetMarket';
import type { Products, ProductsId } from './Products';
import type { Subsidiary, SubsidiaryId } from './Subsidiary';
import type { TypeMarket, TypeMarketId } from './TypeMarket';
import type { Users, UsersId } from './Users';

export interface MarketAttributes {
  Id: number;
  Name?: string;
  Phone?: string;
  Logo?: string;
  Banner?: string;
  Commission?: number;
  Position?: string;
  IdTypeMarket?: number;
  IsActive?: boolean;
  Id_Old?: string;
  IdCollectTaxesType?: number;
  IsDeleted?: boolean;
  CreateDate?: string;
}

export type MarketPk = "Id";
export type MarketId = Market[MarketPk];
export type MarketOptionalAttributes = "Id" | "Name" | "Phone" | "Logo" | "Banner" | "Commission" | "Position" | "IdTypeMarket" | "IsActive" | "Id_Old" | "IdCollectTaxesType" | "IsDeleted" | "CreateDate";
export type MarketCreationAttributes = Optional<MarketAttributes, MarketOptionalAttributes>;

export class Market extends Model<MarketAttributes, MarketCreationAttributes> implements MarketAttributes {
  Id!: number;
  Name?: string;
  Phone?: string;
  Logo?: string;
  Banner?: string;
  Commission?: number;
  Position?: string;
  IdTypeMarket?: number;
  IsActive?: boolean;
  Id_Old?: string;
  IdCollectTaxesType?: number;
  IsDeleted?: boolean;
  CreateDate?: string;

  // Market belongsTo CollectTaxesType via IdCollectTaxesType
  IdCollectTaxesType_CollectTaxesType!: CollectTaxesType;
  getIdCollectTaxesType_CollectTaxesType!: Sequelize.BelongsToGetAssociationMixin<CollectTaxesType>;
  setIdCollectTaxesType_CollectTaxesType!: Sequelize.BelongsToSetAssociationMixin<CollectTaxesType, CollectTaxesTypeId>;
  createIdCollectTaxesType_CollectTaxesType!: Sequelize.BelongsToCreateAssociationMixin<CollectTaxesType>;
  // Market hasMany MarketCategoryRelation via IdMarket
  MarketCategoryRelations!: MarketCategoryRelation[];
  getMarketCategoryRelations!: Sequelize.HasManyGetAssociationsMixin<MarketCategoryRelation>;
  setMarketCategoryRelations!: Sequelize.HasManySetAssociationsMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  addMarketCategoryRelation!: Sequelize.HasManyAddAssociationMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  addMarketCategoryRelations!: Sequelize.HasManyAddAssociationsMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  createMarketCategoryRelation!: Sequelize.HasManyCreateAssociationMixin<MarketCategoryRelation>;
  removeMarketCategoryRelation!: Sequelize.HasManyRemoveAssociationMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  removeMarketCategoryRelations!: Sequelize.HasManyRemoveAssociationsMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  hasMarketCategoryRelation!: Sequelize.HasManyHasAssociationMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  hasMarketCategoryRelations!: Sequelize.HasManyHasAssociationsMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  countMarketCategoryRelations!: Sequelize.HasManyCountAssociationsMixin;
  // Market hasMany MarketRanking via IdMarket
  MarketRankings!: MarketRanking[];
  getMarketRankings!: Sequelize.HasManyGetAssociationsMixin<MarketRanking>;
  setMarketRankings!: Sequelize.HasManySetAssociationsMixin<MarketRanking, MarketRankingId>;
  addMarketRanking!: Sequelize.HasManyAddAssociationMixin<MarketRanking, MarketRankingId>;
  addMarketRankings!: Sequelize.HasManyAddAssociationsMixin<MarketRanking, MarketRankingId>;
  createMarketRanking!: Sequelize.HasManyCreateAssociationMixin<MarketRanking>;
  removeMarketRanking!: Sequelize.HasManyRemoveAssociationMixin<MarketRanking, MarketRankingId>;
  removeMarketRankings!: Sequelize.HasManyRemoveAssociationsMixin<MarketRanking, MarketRankingId>;
  hasMarketRanking!: Sequelize.HasManyHasAssociationMixin<MarketRanking, MarketRankingId>;
  hasMarketRankings!: Sequelize.HasManyHasAssociationsMixin<MarketRanking, MarketRankingId>;
  countMarketRankings!: Sequelize.HasManyCountAssociationsMixin;
  // Market hasMany MarketScore via IdMarket
  MarketScores!: MarketScore[];
  getMarketScores!: Sequelize.HasManyGetAssociationsMixin<MarketScore>;
  setMarketScores!: Sequelize.HasManySetAssociationsMixin<MarketScore, MarketScoreId>;
  addMarketScore!: Sequelize.HasManyAddAssociationMixin<MarketScore, MarketScoreId>;
  addMarketScores!: Sequelize.HasManyAddAssociationsMixin<MarketScore, MarketScoreId>;
  createMarketScore!: Sequelize.HasManyCreateAssociationMixin<MarketScore>;
  removeMarketScore!: Sequelize.HasManyRemoveAssociationMixin<MarketScore, MarketScoreId>;
  removeMarketScores!: Sequelize.HasManyRemoveAssociationsMixin<MarketScore, MarketScoreId>;
  hasMarketScore!: Sequelize.HasManyHasAssociationMixin<MarketScore, MarketScoreId>;
  hasMarketScores!: Sequelize.HasManyHasAssociationsMixin<MarketScore, MarketScoreId>;
  countMarketScores!: Sequelize.HasManyCountAssociationsMixin;
  // Market hasMany PaymetMarket via Market_Id
  PaymetMarkets!: PaymetMarket[];
  getPaymetMarkets!: Sequelize.HasManyGetAssociationsMixin<PaymetMarket>;
  setPaymetMarkets!: Sequelize.HasManySetAssociationsMixin<PaymetMarket, PaymetMarketId>;
  addPaymetMarket!: Sequelize.HasManyAddAssociationMixin<PaymetMarket, PaymetMarketId>;
  addPaymetMarkets!: Sequelize.HasManyAddAssociationsMixin<PaymetMarket, PaymetMarketId>;
  createPaymetMarket!: Sequelize.HasManyCreateAssociationMixin<PaymetMarket>;
  removePaymetMarket!: Sequelize.HasManyRemoveAssociationMixin<PaymetMarket, PaymetMarketId>;
  removePaymetMarkets!: Sequelize.HasManyRemoveAssociationsMixin<PaymetMarket, PaymetMarketId>;
  hasPaymetMarket!: Sequelize.HasManyHasAssociationMixin<PaymetMarket, PaymetMarketId>;
  hasPaymetMarkets!: Sequelize.HasManyHasAssociationsMixin<PaymetMarket, PaymetMarketId>;
  countPaymetMarkets!: Sequelize.HasManyCountAssociationsMixin;
  // Market hasMany Products via IdMarket
  Products!: Products[];
  getProducts!: Sequelize.HasManyGetAssociationsMixin<Products>;
  setProducts!: Sequelize.HasManySetAssociationsMixin<Products, ProductsId>;
  addProduct!: Sequelize.HasManyAddAssociationMixin<Products, ProductsId>;
  addProducts!: Sequelize.HasManyAddAssociationsMixin<Products, ProductsId>;
  createProduct!: Sequelize.HasManyCreateAssociationMixin<Products>;
  removeProduct!: Sequelize.HasManyRemoveAssociationMixin<Products, ProductsId>;
  removeProducts!: Sequelize.HasManyRemoveAssociationsMixin<Products, ProductsId>;
  hasProduct!: Sequelize.HasManyHasAssociationMixin<Products, ProductsId>;
  hasProducts!: Sequelize.HasManyHasAssociationsMixin<Products, ProductsId>;
  countProducts!: Sequelize.HasManyCountAssociationsMixin;
  // Market hasMany Subsidiary via IdMarket
  Subsidiaries!: Subsidiary[];
  getSubsidiaries!: Sequelize.HasManyGetAssociationsMixin<Subsidiary>;
  setSubsidiaries!: Sequelize.HasManySetAssociationsMixin<Subsidiary, SubsidiaryId>;
  addSubsidiary!: Sequelize.HasManyAddAssociationMixin<Subsidiary, SubsidiaryId>;
  addSubsidiaries!: Sequelize.HasManyAddAssociationsMixin<Subsidiary, SubsidiaryId>;
  createSubsidiary!: Sequelize.HasManyCreateAssociationMixin<Subsidiary>;
  removeSubsidiary!: Sequelize.HasManyRemoveAssociationMixin<Subsidiary, SubsidiaryId>;
  removeSubsidiaries!: Sequelize.HasManyRemoveAssociationsMixin<Subsidiary, SubsidiaryId>;
  hasSubsidiary!: Sequelize.HasManyHasAssociationMixin<Subsidiary, SubsidiaryId>;
  hasSubsidiaries!: Sequelize.HasManyHasAssociationsMixin<Subsidiary, SubsidiaryId>;
  countSubsidiaries!: Sequelize.HasManyCountAssociationsMixin;
  // Market hasMany Users via IdMarket
  Users!: Users[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<Users>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<Users, UsersId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<Users, UsersId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<Users, UsersId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<Users>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<Users, UsersId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<Users, UsersId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<Users, UsersId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<Users, UsersId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;
  // Market belongsTo TypeMarket via IdTypeMarket
  IdTypeMarket_TypeMarket!: TypeMarket;
  getIdTypeMarket_TypeMarket!: Sequelize.BelongsToGetAssociationMixin<TypeMarket>;
  setIdTypeMarket_TypeMarket!: Sequelize.BelongsToSetAssociationMixin<TypeMarket, TypeMarketId>;
  createIdTypeMarket_TypeMarket!: Sequelize.BelongsToCreateAssociationMixin<TypeMarket>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Market {
    return Market.init({
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
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Logo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Banner: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Commission: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Position: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdTypeMarket: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TypeMarket',
        key: 'Id'
      }
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdCollectTaxesType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CollectTaxesType',
        key: 'id'
      }
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
    tableName: 'Market',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Market_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
