import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Insurances, InsurancesId } from './Insurances';
import type { TypePlans, TypePlansId } from './TypePlans';

export interface PlansAttributes {
  Id: number;
  Name?: string;
  PriceYearly?: string;
  PriceMonthly?: string;
  IsDeleted?: boolean;
  IdTypePlan: number;
}

export type PlansPk = "Id";
export type PlansId = Plans[PlansPk];
export type PlansOptionalAttributes = "Id" | "Name" | "PriceYearly" | "PriceMonthly" | "IsDeleted";
export type PlansCreationAttributes = Optional<PlansAttributes, PlansOptionalAttributes>;

export class Plans extends Model<PlansAttributes, PlansCreationAttributes> implements PlansAttributes {
  Id!: number;
  Name?: string;
  PriceYearly?: string;
  PriceMonthly?: string;
  IsDeleted?: boolean;
  IdTypePlan!: number;

  // Plans hasMany Insurances via Plans_Id
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
  // Plans belongsTo TypePlans via IdTypePlan
  IdTypePlan_TypePlan!: TypePlans;
  getIdTypePlan_TypePlan!: Sequelize.BelongsToGetAssociationMixin<TypePlans>;
  setIdTypePlan_TypePlan!: Sequelize.BelongsToSetAssociationMixin<TypePlans, TypePlansId>;
  createIdTypePlan_TypePlan!: Sequelize.BelongsToCreateAssociationMixin<TypePlans>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Plans {
    return Plans.init({
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
      allowNull: true,
      defaultValue: false
    },
    IdTypePlan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TypePlans',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Plans',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Plans_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
