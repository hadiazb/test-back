import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Payments, PaymentsId } from './Payments';

export interface ConceptAttributes {
  Id: number;
  Name?: string;
  Description?: string;
  CreateDate?: string;
  IsDeleted?: boolean;
  IsActive?: boolean;
}

export type ConceptPk = "Id";
export type ConceptId = Concept[ConceptPk];
export type ConceptOptionalAttributes = "Id" | "Name" | "Description" | "CreateDate" | "IsDeleted" | "IsActive";
export type ConceptCreationAttributes = Optional<ConceptAttributes, ConceptOptionalAttributes>;

export class Concept extends Model<ConceptAttributes, ConceptCreationAttributes> implements ConceptAttributes {
  Id!: number;
  Name?: string;
  Description?: string;
  CreateDate?: string;
  IsDeleted?: boolean;
  IsActive?: boolean;

  // Concept hasMany Payments via IdConcept
  Payments!: Payments[];
  getPayments!: Sequelize.HasManyGetAssociationsMixin<Payments>;
  setPayments!: Sequelize.HasManySetAssociationsMixin<Payments, PaymentsId>;
  addPayment!: Sequelize.HasManyAddAssociationMixin<Payments, PaymentsId>;
  addPayments!: Sequelize.HasManyAddAssociationsMixin<Payments, PaymentsId>;
  createPayment!: Sequelize.HasManyCreateAssociationMixin<Payments>;
  removePayment!: Sequelize.HasManyRemoveAssociationMixin<Payments, PaymentsId>;
  removePayments!: Sequelize.HasManyRemoveAssociationsMixin<Payments, PaymentsId>;
  hasPayment!: Sequelize.HasManyHasAssociationMixin<Payments, PaymentsId>;
  hasPayments!: Sequelize.HasManyHasAssociationsMixin<Payments, PaymentsId>;
  countPayments!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Concept {
    return Concept.init({
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
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
    tableName: 'Concept',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Concept_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
