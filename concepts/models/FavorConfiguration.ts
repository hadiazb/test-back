import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface FavorConfigurationAttributes {
  Id: number;
  Type?: string;
  Name?: string;
  Value?: string;
  CreateDate?: string;
  IsDeleted?: boolean;
  IsActive?: boolean;
}

export type FavorConfigurationPk = "Id";
export type FavorConfigurationId = FavorConfiguration[FavorConfigurationPk];
export type FavorConfigurationOptionalAttributes = "Id" | "Type" | "Name" | "Value" | "CreateDate" | "IsDeleted" | "IsActive";
export type FavorConfigurationCreationAttributes = Optional<FavorConfigurationAttributes, FavorConfigurationOptionalAttributes>;

export class FavorConfiguration extends Model<FavorConfigurationAttributes, FavorConfigurationCreationAttributes> implements FavorConfigurationAttributes {
  Id!: number;
  Type?: string;
  Name?: string;
  Value?: string;
  CreateDate?: string;
  IsDeleted?: boolean;
  IsActive?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof FavorConfiguration {
    return FavorConfiguration.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FavorConfiguration',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FavorConfiguration_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
