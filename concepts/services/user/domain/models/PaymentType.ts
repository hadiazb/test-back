import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PaymetMarket, PaymetMarketId } from './PaymetMarket';

export interface PaymentTypeAttributes {
  Id: number;
  Name?: string;
  Estatus?: boolean;
  IsDeleted?: boolean;
}

export type PaymentTypePk = "Id";
export type PaymentTypeId = PaymentType[PaymentTypePk];
export type PaymentTypeOptionalAttributes = "Id" | "Name" | "Estatus" | "IsDeleted";
export type PaymentTypeCreationAttributes = Optional<PaymentTypeAttributes, PaymentTypeOptionalAttributes>;

export class PaymentType extends Model<PaymentTypeAttributes, PaymentTypeCreationAttributes> implements PaymentTypeAttributes {
  Id!: number;
  Name?: string;
  Estatus?: boolean;
  IsDeleted?: boolean;

  // PaymentType hasMany PaymetMarket via PaymentType_Id
  PaymetMarkets!: PaymetMarket[];
  getPaymetMarkets!: Sequelize.HasManyGetAssociationsMixin<PaymetMarket>;
  setPaymetMarkets!: Sequelize.HasManySetAssociationsMixin<PaymetMarket, PaymetMarketId>;
  addPaymetMarket!: Sequelize.HasManyAddAssociationMixin<PaymetMarket, PaymetMarketId>;
  addPaymetMarkets!: Sequelize.HasManyAddAssociationsMixin<PaymetMarket, PaymetMarketId>;
  createPaymetMarket!: Sequelize.HasManyCreateAssociationMixin<PaymetMarket>;
  removePaymetMarket!: Sequelize.HasManyRemoveAssociationMixin<PaymetMarket, PaymetMarketId>;
  removePaymetMarkets!: Sequelize.HasManyRemoveAssociationsMixin<PaymetMarket, PaymetMarketId>;
  hasPaymetMarket!: Sequelize.HasManyHasAssociationMixin<PaymetMarket, PaymetMarketId>;
  hasPaymetMarkets!: Sequelize.HasManyHasAssociationsMixin<PaymetMarket, PaymetMarketId>;
  countPaymetMarkets!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof PaymentType {
    return PaymentType.init({
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
    Estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PaymentType',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PaymentType_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
