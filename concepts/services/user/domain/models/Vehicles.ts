import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Users, UsersId } from './Users';

export interface VehiclesAttributes {
  Id: number;
  FrontIdentificationPhoto?: string;
  ReverseIdentificationPhoto?: string;
  FrontLicensePhoto?: string;
  ReverseLicensePhoto?: string;
  FrontSoatPhoto?: string;
  ReverseSoatPhoto?: string;
  IdUser: number;
  TypeVehicle?: string;
  Placa?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
  CreateDate?: string;
}

export type VehiclesPk = "Id";
export type VehiclesId = Vehicles[VehiclesPk];
export type VehiclesOptionalAttributes = "Id" | "FrontIdentificationPhoto" | "ReverseIdentificationPhoto" | "FrontLicensePhoto" | "ReverseLicensePhoto" | "FrontSoatPhoto" | "ReverseSoatPhoto" | "TypeVehicle" | "Placa" | "IsActive" | "IsDeleted" | "CreateDate";
export type VehiclesCreationAttributes = Optional<VehiclesAttributes, VehiclesOptionalAttributes>;

export class Vehicles extends Model<VehiclesAttributes, VehiclesCreationAttributes> implements VehiclesAttributes {
  Id!: number;
  FrontIdentificationPhoto?: string;
  ReverseIdentificationPhoto?: string;
  FrontLicensePhoto?: string;
  ReverseLicensePhoto?: string;
  FrontSoatPhoto?: string;
  ReverseSoatPhoto?: string;
  IdUser!: number;
  TypeVehicle?: string;
  Placa?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
  CreateDate?: string;

  // Vehicles belongsTo Users via IdUser
  IdUser_User!: Users;
  getIdUser_User!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setIdUser_User!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createIdUser_User!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Vehicles {
    return Vehicles.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FrontIdentificationPhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ReverseIdentificationPhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FrontLicensePhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ReverseLicensePhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FrontSoatPhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ReverseSoatPhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'Id'
      }
    },
    TypeVehicle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Placa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Vehicles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Vehicles_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
