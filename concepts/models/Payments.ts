import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Concept, ConceptId } from './Concept';

export interface PaymentsAttributes {
  Id: number;
  IdConcept: number;
  Value?: number;
  Taxes?: number;
  discount?: number;
  PriceMarket?: number;
  Total?: number;
  IsDeleted?: boolean;
}

export type PaymentsPk = "Id";
export type PaymentsId = Payments[PaymentsPk];
export type PaymentsOptionalAttributes = "Id" | "Value" | "Taxes" | "discount" | "PriceMarket" | "Total" | "IsDeleted";
export type PaymentsCreationAttributes = Optional<PaymentsAttributes, PaymentsOptionalAttributes>;

export class Payments extends Model<PaymentsAttributes, PaymentsCreationAttributes> implements PaymentsAttributes {
  Id!: number;
  IdConcept!: number;
  Value?: number;
  Taxes?: number;
  discount?: number;
  PriceMarket?: number;
  Total?: number;
  IsDeleted?: boolean;

  // Payments belongsTo Concept via IdConcept
  IdConcept_Concept!: Concept;
  getIdConcept_Concept!: Sequelize.BelongsToGetAssociationMixin<Concept>;
  setIdConcept_Concept!: Sequelize.BelongsToSetAssociationMixin<Concept, ConceptId>;
  createIdConcept_Concept!: Sequelize.BelongsToCreateAssociationMixin<Concept>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Payments {
    return Payments.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdConcept: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Concept',
        key: 'Id'
      }
    },
    Value: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Taxes: {
      type: DataTypes.REAL,
      allowNull: true
    },
    discount: {
      type: DataTypes.REAL,
      allowNull: true
    },
    PriceMarket: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Total: {
      type: DataTypes.REAL,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Payments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Payments_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
