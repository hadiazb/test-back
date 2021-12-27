import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { City, CityId } from './City';
import type { Country, CountryId } from './Country';

export interface StatesAttributes {
  Id: number;
  Name?: string;
  IdCountry: number;
  IsActive?: boolean;
  IsDeleted?: boolean;
}

export type StatesPk = "Id";
export type StatesId = States[StatesPk];
export type StatesOptionalAttributes = "Id" | "Name" | "IsActive" | "IsDeleted";
export type StatesCreationAttributes = Optional<StatesAttributes, StatesOptionalAttributes>;

export class States extends Model<StatesAttributes, StatesCreationAttributes> implements StatesAttributes {
  Id!: number;
  Name?: string;
  IdCountry!: number;
  IsActive?: boolean;
  IsDeleted?: boolean;

  // States belongsTo Country via IdCountry
  IdCountry_Country!: Country;
  getIdCountry_Country!: Sequelize.BelongsToGetAssociationMixin<Country>;
  setIdCountry_Country!: Sequelize.BelongsToSetAssociationMixin<Country, CountryId>;
  createIdCountry_Country!: Sequelize.BelongsToCreateAssociationMixin<Country>;
  // States hasMany City via IdState
  Cities!: City[];
  getCities!: Sequelize.HasManyGetAssociationsMixin<City>;
  setCities!: Sequelize.HasManySetAssociationsMixin<City, CityId>;
  addCity!: Sequelize.HasManyAddAssociationMixin<City, CityId>;
  addCities!: Sequelize.HasManyAddAssociationsMixin<City, CityId>;
  createCity!: Sequelize.HasManyCreateAssociationMixin<City>;
  removeCity!: Sequelize.HasManyRemoveAssociationMixin<City, CityId>;
  removeCities!: Sequelize.HasManyRemoveAssociationsMixin<City, CityId>;
  hasCity!: Sequelize.HasManyHasAssociationMixin<City, CityId>;
  hasCities!: Sequelize.HasManyHasAssociationsMixin<City, CityId>;
  countCities!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof States {
    return States.init({
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
    IdCountry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Country',
        key: 'Id'
      }
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'States',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "States_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
