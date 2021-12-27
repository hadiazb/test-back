import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { States, StatesId } from './States';

export interface CountryAttributes {
  Id: number;
  Name?: string;
  Code?: string;
  CallingCode?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
  CreateDate?: string;
}

export type CountryPk = "Id";
export type CountryId = Country[CountryPk];
export type CountryOptionalAttributes = "Id" | "Name" | "Code" | "CallingCode" | "IsActive" | "IsDeleted" | "CreateDate";
export type CountryCreationAttributes = Optional<CountryAttributes, CountryOptionalAttributes>;

export class Country extends Model<CountryAttributes, CountryCreationAttributes> implements CountryAttributes {
  Id!: number;
  Name?: string;
  Code?: string;
  CallingCode?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
  CreateDate?: string;

  // Country hasMany States via IdCountry
  States!: States[];
  getStates!: Sequelize.HasManyGetAssociationsMixin<States>;
  setStates!: Sequelize.HasManySetAssociationsMixin<States, StatesId>;
  addState!: Sequelize.HasManyAddAssociationMixin<States, StatesId>;
  addStates!: Sequelize.HasManyAddAssociationsMixin<States, StatesId>;
  createState!: Sequelize.HasManyCreateAssociationMixin<States>;
  removeState!: Sequelize.HasManyRemoveAssociationMixin<States, StatesId>;
  removeStates!: Sequelize.HasManyRemoveAssociationsMixin<States, StatesId>;
  hasState!: Sequelize.HasManyHasAssociationMixin<States, StatesId>;
  hasStates!: Sequelize.HasManyHasAssociationsMixin<States, StatesId>;
  countStates!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Country {
    return Country.init({
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
    Code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CallingCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'Country',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Country_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
