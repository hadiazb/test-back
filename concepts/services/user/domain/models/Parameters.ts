import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ParametersAttributes {
  id: number;
  Name?: string;
  Object?: string;
  ObjectChild?: string;
  Value?: string;
  CreateDate?: string;
  IsDeleted?: boolean;
}

export type ParametersPk = "id";
export type ParametersId = Parameters[ParametersPk];
export type ParametersOptionalAttributes = "id" | "Name" | "Object" | "ObjectChild" | "Value" | "CreateDate" | "IsDeleted";
export type ParametersCreationAttributes = Optional<ParametersAttributes, ParametersOptionalAttributes>;

export class Parameters extends Model<ParametersAttributes, ParametersCreationAttributes> implements ParametersAttributes {
  id!: number;
  Name?: string;
  Object?: string;
  ObjectChild?: string;
  Value?: string;
  CreateDate?: string;
  IsDeleted?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof Parameters {
    return Parameters.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Object: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ObjectChild: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Parameters',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Parameters_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
