import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PlansPet, PlansPetId } from './PlansPet';
import type { Services, ServicesId } from './Services';

export interface InsurancesAttributes {
  id: number;
  TypePet?: string;
  PlansPet_Id: number;
  Services_Id: number;
  IsDeleted?: boolean;
}

export type InsurancesPk = "id";
export type InsurancesId = Insurances[InsurancesPk];
export type InsurancesOptionalAttributes = "id" | "TypePet" | "Services_Id" | "IsDeleted";
export type InsurancesCreationAttributes = Optional<InsurancesAttributes, InsurancesOptionalAttributes>;

export class Insurances extends Model<InsurancesAttributes, InsurancesCreationAttributes> implements InsurancesAttributes {
  id!: number;
  TypePet?: string;
  PlansPet_Id!: number;
  Services_Id!: number;
  IsDeleted?: boolean;

  // Insurances belongsTo PlansPet via PlansPet_Id
  PlansPet!: PlansPet;
  getPlansPet!: Sequelize.BelongsToGetAssociationMixin<PlansPet>;
  setPlansPet!: Sequelize.BelongsToSetAssociationMixin<PlansPet, PlansPetId>;
  createPlansPet!: Sequelize.BelongsToCreateAssociationMixin<PlansPet>;
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
    TypePet: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PlansPet_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PlansPet',
        key: 'Id'
      }
    },
    Services_Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Services',
        key: 'Id'
      }
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
