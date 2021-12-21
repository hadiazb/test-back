import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Subsidiary, SubsidiaryId } from './Subsidiary';

export interface ScheduleSubsidiaryAttributes {
  Id: number;
  Weekday?: string;
  StartTime?: string;
  ClosingTime?: string;
  SubsidiaryId: number;
  IsDeleted?: boolean;
}

export type ScheduleSubsidiaryPk = "Id";
export type ScheduleSubsidiaryId = ScheduleSubsidiary[ScheduleSubsidiaryPk];
export type ScheduleSubsidiaryOptionalAttributes = "Id" | "Weekday" | "StartTime" | "ClosingTime" | "IsDeleted";
export type ScheduleSubsidiaryCreationAttributes = Optional<ScheduleSubsidiaryAttributes, ScheduleSubsidiaryOptionalAttributes>;

export class ScheduleSubsidiary extends Model<ScheduleSubsidiaryAttributes, ScheduleSubsidiaryCreationAttributes> implements ScheduleSubsidiaryAttributes {
  Id!: number;
  Weekday?: string;
  StartTime?: string;
  ClosingTime?: string;
  SubsidiaryId!: number;
  IsDeleted?: boolean;

  // ScheduleSubsidiary belongsTo Subsidiary via SubsidiaryId
  Subsidiary!: Subsidiary;
  getSubsidiary!: Sequelize.BelongsToGetAssociationMixin<Subsidiary>;
  setSubsidiary!: Sequelize.BelongsToSetAssociationMixin<Subsidiary, SubsidiaryId>;
  createSubsidiary!: Sequelize.BelongsToCreateAssociationMixin<Subsidiary>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ScheduleSubsidiary {
    return ScheduleSubsidiary.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Weekday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    StartTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ClosingTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    SubsidiaryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subsidiary',
        key: 'Id'
      }
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ScheduleSubsidiary',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ScheduleSubsidiary_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
