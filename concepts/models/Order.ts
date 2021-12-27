import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ProuctsOrder, ProuctsOrderId } from './ProuctsOrder';
import type { Subsidiary, SubsidiaryId } from './Subsidiary';
import type { Users, UsersId } from './Users';

export interface OrderAttributes {
  Id: number;
  Date?: string;
  IdSubsidiary: number;
  IdUsers: number;
  Id_Old?: string;
  IsDeleted?: boolean;
}

export type OrderPk = "Id";
export type OrderId = Order[OrderPk];
export type OrderOptionalAttributes = "Id" | "Date" | "Id_Old" | "IsDeleted";
export type OrderCreationAttributes = Optional<OrderAttributes, OrderOptionalAttributes>;

export class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
  Id!: number;
  Date?: string;
  IdSubsidiary!: number;
  IdUsers!: number;
  Id_Old?: string;
  IsDeleted?: boolean;

  // Order hasMany ProuctsOrder via IdOrder
  ProuctsOrders!: ProuctsOrder[];
  getProuctsOrders!: Sequelize.HasManyGetAssociationsMixin<ProuctsOrder>;
  setProuctsOrders!: Sequelize.HasManySetAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  addProuctsOrder!: Sequelize.HasManyAddAssociationMixin<ProuctsOrder, ProuctsOrderId>;
  addProuctsOrders!: Sequelize.HasManyAddAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  createProuctsOrder!: Sequelize.HasManyCreateAssociationMixin<ProuctsOrder>;
  removeProuctsOrder!: Sequelize.HasManyRemoveAssociationMixin<ProuctsOrder, ProuctsOrderId>;
  removeProuctsOrders!: Sequelize.HasManyRemoveAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  hasProuctsOrder!: Sequelize.HasManyHasAssociationMixin<ProuctsOrder, ProuctsOrderId>;
  hasProuctsOrders!: Sequelize.HasManyHasAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  countProuctsOrders!: Sequelize.HasManyCountAssociationsMixin;
  // Order belongsTo Subsidiary via IdSubsidiary
  IdSubsidiary_Subsidiary!: Subsidiary;
  getIdSubsidiary_Subsidiary!: Sequelize.BelongsToGetAssociationMixin<Subsidiary>;
  setIdSubsidiary_Subsidiary!: Sequelize.BelongsToSetAssociationMixin<Subsidiary, SubsidiaryId>;
  createIdSubsidiary_Subsidiary!: Sequelize.BelongsToCreateAssociationMixin<Subsidiary>;
  // Order belongsTo Users via IdUsers
  IdUsers_User!: Users;
  getIdUsers_User!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setIdUsers_User!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createIdUsers_User!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Order {
    return Order.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IdSubsidiary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subsidiary',
        key: 'Id'
      }
    },
    IdUsers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'Id'
      }
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
    tableName: 'Order',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Order_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
