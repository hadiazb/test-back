import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Market, MarketId } from './Market';
import type { PaymentType, PaymentTypeId } from './PaymentType';

export interface PaymetMarketAttributes {
  Id: number;
  PaymentType_Id: number;
  Market_Id: number;
  IsDeleted?: boolean;
}

export type PaymetMarketPk = "Id";
export type PaymetMarketId = PaymetMarket[PaymetMarketPk];
export type PaymetMarketOptionalAttributes = "Id" | "IsDeleted";
export type PaymetMarketCreationAttributes = Optional<PaymetMarketAttributes, PaymetMarketOptionalAttributes>;

export class PaymetMarket extends Model<PaymetMarketAttributes, PaymetMarketCreationAttributes> implements PaymetMarketAttributes {
  Id!: number;
  PaymentType_Id!: number;
  Market_Id!: number;
  IsDeleted?: boolean;

  // PaymetMarket belongsTo Market via Market_Id
  Market!: Market;
  getMarket!: Sequelize.BelongsToGetAssociationMixin<Market>;
  setMarket!: Sequelize.BelongsToSetAssociationMixin<Market, MarketId>;
  createMarket!: Sequelize.BelongsToCreateAssociationMixin<Market>;
  // PaymetMarket belongsTo PaymentType via PaymentType_Id
  PaymentType!: PaymentType;
  getPaymentType!: Sequelize.BelongsToGetAssociationMixin<PaymentType>;
  setPaymentType!: Sequelize.BelongsToSetAssociationMixin<PaymentType, PaymentTypeId>;
  createPaymentType!: Sequelize.BelongsToCreateAssociationMixin<PaymentType>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PaymetMarket {
    return PaymetMarket.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PaymentType_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PaymentType',
        key: 'Id'
      }
    },
    Market_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Market',
        key: 'Id'
      }
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PaymetMarket',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PaymetMarket_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
