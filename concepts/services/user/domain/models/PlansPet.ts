import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Insurances, InsurancesId } from './Insurances';

export interface PlansPetAttributes {
  Id: number;
  Name?: string;
  TypePet?: string;
  PriceYearly?: string;
  PriceMonthly?: string;
  IsDeleted?: boolean;
}

export type PlansPetPk = "Id";
export type PlansPetId = PlansPet[PlansPetPk];
export type PlansPetOptionalAttributes = "Id" | "Name" | "TypePet" | "PriceYearly" | "PriceMonthly" | "IsDeleted";
export type PlansPetCreationAttributes = Optional<PlansPetAttributes, PlansPetOptionalAttributes>;

export class PlansPet extends Model<PlansPetAttributes, PlansPetCreationAttributes> implements PlansPetAttributes {
  Id!: number;
  Name?: string;
  TypePet?: string;
  PriceYearly?: string;
  PriceMonthly?: string;
  IsDeleted?: boolean;

  // PlansPet hasMany Insurances via PlansPet_Id
  Insurances!: Insurances[];
  getInsurances!: Sequelize.HasManyGetAssociationsMixin<Insurances>;
  setInsurances!: Sequelize.HasManySetAssociationsMixin<Insurances, InsurancesId>;
  addInsurance!: Sequelize.HasManyAddAssociationMixin<Insurances, InsurancesId>;
  addInsurances!: Sequelize.HasManyAddAssociationsMixin<Insurances, InsurancesId>;
  createInsurance!: Sequelize.HasManyCreateAssociationMixin<Insurances>;
  removeInsurance!: Sequelize.HasManyRemoveAssociationMixin<Insurances, InsurancesId>;
  removeInsurances!: Sequelize.HasManyRemoveAssociationsMixin<Insurances, InsurancesId>;
  hasInsurance!: Sequelize.HasManyHasAssociationMixin<Insurances, InsurancesId>;
  hasInsurances!: Sequelize.HasManyHasAssociationsMixin<Insurances, InsurancesId>;
  countInsurances!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof PlansPet {
    return PlansPet.init({
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
    TypePet: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PriceYearly: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PriceMonthly: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PlansPet',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PlansPet_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
