import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Plans, PlansId } from './Plans';
import type { Services, ServicesId } from './Services';

export interface InsurancesAttributes {
  id: number;
  Plans_Id: number;
  Services_Id: number;
  IsDeleted?: boolean;
}

export type InsurancesPk = "id";
export type InsurancesId = Insurances[InsurancesPk];
export type InsurancesOptionalAttributes = "id" | "IsDeleted";
export type InsurancesCreationAttributes = Optional<InsurancesAttributes, InsurancesOptionalAttributes>;

export class Insurances extends Model<InsurancesAttributes, InsurancesCreationAttributes> implements InsurancesAttributes {
  id!: number;
  Plans_Id!: number;
  Services_Id!: number;
  IsDeleted?: boolean;

  // Insurances belongsTo Plans via Plans_Id
  Plan!: Plans;
  getPlan!: Sequelize.BelongsToGetAssociationMixin<Plans>;
  setPlan!: Sequelize.BelongsToSetAssociationMixin<Plans, PlansId>;
  createPlan!: Sequelize.BelongsToCreateAssociationMixin<Plans>;
  // Insurances belongsTo Services via Services_Id
  Service!: Services;
  getService!: Sequelize.BelongsToGetAssociationMixin<Services>;
  setService!: Sequelize.BelongsToSetAssociationMixin<Services, ServicesId>;
  createService!: Sequelize.BelongsToCreateAssociationMixin<Services>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Insurances {
    return Insurances.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Plans_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Plans',
        key: 'Id'
      }
    },
    Services_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Services',
        key: 'Id'
      }
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Insurances',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Insurances_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
