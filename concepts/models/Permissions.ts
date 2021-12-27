import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Roles, RolesId } from './Roles';

export interface PermissionsAttributes {
  Id: number;
  IdRoles: number;
  Option?: string;
  CreateDate?: string;
  IsDeleted?: boolean;
  IsActive?: boolean;
}

export type PermissionsPk = "Id";
export type PermissionsId = Permissions[PermissionsPk];
export type PermissionsOptionalAttributes = "Id" | "Option" | "CreateDate" | "IsDeleted" | "IsActive";
export type PermissionsCreationAttributes = Optional<PermissionsAttributes, PermissionsOptionalAttributes>;

export class Permissions extends Model<PermissionsAttributes, PermissionsCreationAttributes> implements PermissionsAttributes {
  Id!: number;
  IdRoles!: number;
  Option?: string;
  CreateDate?: string;
  IsDeleted?: boolean;
  IsActive?: boolean;

  // Permissions belongsTo Roles via IdRoles
  IdRoles_Role!: Roles;
  getIdRoles_Role!: Sequelize.BelongsToGetAssociationMixin<Roles>;
  setIdRoles_Role!: Sequelize.BelongsToSetAssociationMixin<Roles, RolesId>;
  createIdRoles_Role!: Sequelize.BelongsToCreateAssociationMixin<Roles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Permissions {
    return Permissions.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdRoles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'Id'
      }
    },
    Option: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
    tableName: 'Permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Permissions_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
