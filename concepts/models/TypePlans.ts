import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Plans, PlansId } from './Plans';

export interface TypePlansAttributes {
  Id: number;
  Name?: string;
  Description?: string;
  IsDeleted?: boolean;
}

export type TypePlansPk = "Id";
export type TypePlansId = TypePlans[TypePlansPk];
export type TypePlansOptionalAttributes = "Id" | "Name" | "Description" | "IsDeleted";
export type TypePlansCreationAttributes = Optional<TypePlansAttributes, TypePlansOptionalAttributes>;

export class TypePlans extends Model<TypePlansAttributes, TypePlansCreationAttributes> implements TypePlansAttributes {
  Id!: number;
  Name?: string;
  Description?: string;
  IsDeleted?: boolean;

  // TypePlans hasMany Plans via IdTypePlan
  Plans!: Plans[];
  getPlans!: Sequelize.HasManyGetAssociationsMixin<Plans>;
  setPlans!: Sequelize.HasManySetAssociationsMixin<Plans, PlansId>;
  addPlan!: Sequelize.HasManyAddAssociationMixin<Plans, PlansId>;
  addPlans!: Sequelize.HasManyAddAssociationsMixin<Plans, PlansId>;
  createPlan!: Sequelize.HasManyCreateAssociationMixin<Plans>;
  removePlan!: Sequelize.HasManyRemoveAssociationMixin<Plans, PlansId>;
  removePlans!: Sequelize.HasManyRemoveAssociationsMixin<Plans, PlansId>;
  hasPlan!: Sequelize.HasManyHasAssociationMixin<Plans, PlansId>;
  hasPlans!: Sequelize.HasManyHasAssociationsMixin<Plans, PlansId>;
  countPlans!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof TypePlans {
    return TypePlans.init({
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
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TypePlans',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "TypePlans_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
