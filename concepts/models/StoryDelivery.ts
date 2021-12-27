import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Users, UsersId } from './Users';

export interface StoryDeliveryAttributes {
  Id: number;
  IsDeleted?: boolean;
  Id_Old?: string;
  CreatedAt?: string;
  DeliveryOn?: boolean;
  DeliveryPersonChangeDate?: string;
  DeliveryPersonId?: string;
  Enabled?: boolean;
  PickUpCount?: number;
  UpdatedAt?: string;
  Users_Id: number;
}

export type StoryDeliveryPk = "Id";
export type StoryDeliveryId = StoryDelivery[StoryDeliveryPk];
export type StoryDeliveryOptionalAttributes = "Id" | "IsDeleted" | "Id_Old" | "CreatedAt" | "DeliveryOn" | "DeliveryPersonChangeDate" | "DeliveryPersonId" | "Enabled" | "PickUpCount" | "UpdatedAt";
export type StoryDeliveryCreationAttributes = Optional<StoryDeliveryAttributes, StoryDeliveryOptionalAttributes>;

export class StoryDelivery extends Model<StoryDeliveryAttributes, StoryDeliveryCreationAttributes> implements StoryDeliveryAttributes {
  Id!: number;
  IsDeleted?: boolean;
  Id_Old?: string;
  CreatedAt?: string;
  DeliveryOn?: boolean;
  DeliveryPersonChangeDate?: string;
  DeliveryPersonId?: string;
  Enabled?: boolean;
  PickUpCount?: number;
  UpdatedAt?: string;
  Users_Id!: number;

  // StoryDelivery belongsTo Users via Users_Id
  User!: Users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof StoryDelivery {
    return StoryDelivery.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DeliveryOn: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DeliveryPersonChangeDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DeliveryPersonId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PickUpCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Users_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'StoryDelivery',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "StoryDelivery_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
