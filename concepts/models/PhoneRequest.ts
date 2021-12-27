import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Services, ServicesId } from './Services';

export interface PhoneRequestAttributes {
  Id: number;
  IdentificationId?: number;
  FrontIdentificationPhoto?: string;
  ReverseIdentificationPhoto?: string;
  ProfilePhoto?: string;
  TypeDwelling?: string;
  PaymentFrequency?: string;
  AcceptTerms?: boolean;
  IdServices: number;
  NumberMonths?: number;
  CivilStatus?: string;
  TypeEmployment?: string;
  ValueFirstPay?: number;
  ApartmentNumber?: number;
  SMSCode?: string;
  Id_Old?: string;
  IsDeleted?: boolean;
}

export type PhoneRequestPk = "Id";
export type PhoneRequestId = PhoneRequest[PhoneRequestPk];
export type PhoneRequestOptionalAttributes = "Id" | "IdentificationId" | "FrontIdentificationPhoto" | "ReverseIdentificationPhoto" | "ProfilePhoto" | "TypeDwelling" | "PaymentFrequency" | "AcceptTerms" | "NumberMonths" | "CivilStatus" | "TypeEmployment" | "ValueFirstPay" | "ApartmentNumber" | "SMSCode" | "Id_Old" | "IsDeleted";
export type PhoneRequestCreationAttributes = Optional<PhoneRequestAttributes, PhoneRequestOptionalAttributes>;

export class PhoneRequest extends Model<PhoneRequestAttributes, PhoneRequestCreationAttributes> implements PhoneRequestAttributes {
  Id!: number;
  IdentificationId?: number;
  FrontIdentificationPhoto?: string;
  ReverseIdentificationPhoto?: string;
  ProfilePhoto?: string;
  TypeDwelling?: string;
  PaymentFrequency?: string;
  AcceptTerms?: boolean;
  IdServices!: number;
  NumberMonths?: number;
  CivilStatus?: string;
  TypeEmployment?: string;
  ValueFirstPay?: number;
  ApartmentNumber?: number;
  SMSCode?: string;
  Id_Old?: string;
  IsDeleted?: boolean;

  // PhoneRequest belongsTo Services via IdServices
  IdServices_Service!: Services;
  getIdServices_Service!: Sequelize.BelongsToGetAssociationMixin<Services>;
  setIdServices_Service!: Sequelize.BelongsToSetAssociationMixin<Services, ServicesId>;
  createIdServices_Service!: Sequelize.BelongsToCreateAssociationMixin<Services>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PhoneRequest {
    return PhoneRequest.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdentificationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FrontIdentificationPhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ReverseIdentificationPhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProfilePhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TypeDwelling: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PaymentFrequency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AcceptTerms: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IdServices: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Services',
        key: 'Id'
      }
    },
    NumberMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CivilStatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TypeEmployment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ValueFirstPay: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ApartmentNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SMSCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'PhoneRequest',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PhoneRequest_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
