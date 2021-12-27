import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Order, OrderId } from './Order';
import type { Products, ProductsId } from './Products';
import type { Services, ServicesId } from './Services';

export interface ProuctsOrderAttributes {
  Id: number;
  IdOrder: number;
  IdProducts: number;
  IdServices: number;
  IsDeleted?: boolean;
}

export type ProuctsOrderPk = "Id";
export type ProuctsOrderId = ProuctsOrder[ProuctsOrderPk];
export type ProuctsOrderOptionalAttributes = "Id" | "IsDeleted";
export type ProuctsOrderCreationAttributes = Optional<ProuctsOrderAttributes, ProuctsOrderOptionalAttributes>;

export class ProuctsOrder extends Model<ProuctsOrderAttributes, ProuctsOrderCreationAttributes> implements ProuctsOrderAttributes {
  Id!: number;
  IdOrder!: number;
  IdProducts!: number;
  IdServices!: number;
  IsDeleted?: boolean;

  // ProuctsOrder belongsTo Order via IdOrder
  IdOrder_Order!: Order;
  getIdOrder_Order!: Sequelize.BelongsToGetAssociationMixin<Order>;
  setIdOrder_Order!: Sequelize.BelongsToSetAssociationMixin<Order, OrderId>;
  createIdOrder_Order!: Sequelize.BelongsToCreateAssociationMixin<Order>;
  // ProuctsOrder belongsTo Products via IdProducts
  IdProducts_Product!: Products;
  getIdProducts_Product!: Sequelize.BelongsToGetAssociationMixin<Products>;
  setIdProducts_Product!: Sequelize.BelongsToSetAssociationMixin<Products, ProductsId>;
  createIdProducts_Product!: Sequelize.BelongsToCreateAssociationMixin<Products>;
  // ProuctsOrder belongsTo Services via IdServices
  IdServices_Service!: Services;
  getIdServices_Service!: Sequelize.BelongsToGetAssociationMixin<Services>;
  setIdServices_Service!: Sequelize.BelongsToSetAssociationMixin<Services, ServicesId>;
  createIdServices_Service!: Sequelize.BelongsToCreateAssociationMixin<Services>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ProuctsOrder {
    return ProuctsOrder.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'Id'
      }
    },
    IdProducts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id'
      }
    },
    IdServices: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Services',
        key: 'Id'
      }
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'ProuctsOrder',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ProuctsOrder_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
