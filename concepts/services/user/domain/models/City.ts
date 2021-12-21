import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MarketRanking, MarketRankingId } from './MarketRanking';
import type { States, StatesId } from './States';
import type { Subsidiary, SubsidiaryId } from './Subsidiary';
import type { Users, UsersId } from './Users';

export interface CityAttributes {
  Id: number;
  Name?: string;
  MaxKm?: number;
  IdState: number;
  Id_Old?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
}

export type CityPk = "Id";
export type CityId = City[CityPk];
export type CityOptionalAttributes = "Id" | "Name" | "MaxKm" | "Id_Old" | "IsActive" | "IsDeleted";
export type CityCreationAttributes = Optional<CityAttributes, CityOptionalAttributes>;

export class City extends Model<CityAttributes, CityCreationAttributes> implements CityAttributes {
  Id!: number;
  Name?: string;
  MaxKm?: number;
  IdState!: number;
  Id_Old?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;

  // City hasMany MarketRanking via IdCity
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
  // City hasMany Subsidiary via IdCity
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
  // City hasMany Users via IdCity
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
  // City belongsTo States via IdState
  IdState_State!: States;
  getIdState_State!: Sequelize.BelongsToGetAssociationMixin<States>;
  setIdState_State!: Sequelize.BelongsToSetAssociationMixin<States, StatesId>;
  createIdState_State!: Sequelize.BelongsToCreateAssociationMixin<States>;

  static initModel(sequelize: Sequelize.Sequelize): typeof City {
    return City.init({
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
    MaxKm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdState: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'States',
        key: 'Id'
      }
    },
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'City',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "City_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
