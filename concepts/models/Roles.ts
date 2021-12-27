import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Permissions, PermissionsId } from './Permissions';
import type { RolesUser, RolesUserId } from './RolesUser';

export interface RolesAttributes {
  Id: number;
  Name?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
  CreateDate?: string;
}

export type RolesPk = "Id";
export type RolesId = Roles[RolesPk];
export type RolesOptionalAttributes = "Id" | "Name" | "IsActive" | "IsDeleted" | "CreateDate";
export type RolesCreationAttributes = Optional<RolesAttributes, RolesOptionalAttributes>;

export class Roles extends Model<RolesAttributes, RolesCreationAttributes> implements RolesAttributes {
  Id!: number;
  Name?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
  CreateDate?: string;

  // Roles hasMany Permissions via IdRoles
  Permissions!: Permissions[];
  getPermissions!: Sequelize.HasManyGetAssociationsMixin<Permissions>;
  setPermissions!: Sequelize.HasManySetAssociationsMixin<Permissions, PermissionsId>;
  addPermission!: Sequelize.HasManyAddAssociationMixin<Permissions, PermissionsId>;
  addPermissions!: Sequelize.HasManyAddAssociationsMixin<Permissions, PermissionsId>;
  createPermission!: Sequelize.HasManyCreateAssociationMixin<Permissions>;
  removePermission!: Sequelize.HasManyRemoveAssociationMixin<Permissions, PermissionsId>;
  removePermissions!: Sequelize.HasManyRemoveAssociationsMixin<Permissions, PermissionsId>;
  hasPermission!: Sequelize.HasManyHasAssociationMixin<Permissions, PermissionsId>;
  hasPermissions!: Sequelize.HasManyHasAssociationsMixin<Permissions, PermissionsId>;
  countPermissions!: Sequelize.HasManyCountAssociationsMixin;
  // Roles hasMany RolesUser via IdRoles
  RolesUsers!: RolesUser[];
  getRolesUsers!: Sequelize.HasManyGetAssociationsMixin<RolesUser>;
  setRolesUsers!: Sequelize.HasManySetAssociationsMixin<RolesUser, RolesUserId>;
  addRolesUser!: Sequelize.HasManyAddAssociationMixin<RolesUser, RolesUserId>;
  addRolesUsers!: Sequelize.HasManyAddAssociationsMixin<RolesUser, RolesUserId>;
  createRolesUser!: Sequelize.HasManyCreateAssociationMixin<RolesUser>;
  removeRolesUser!: Sequelize.HasManyRemoveAssociationMixin<RolesUser, RolesUserId>;
  removeRolesUsers!: Sequelize.HasManyRemoveAssociationsMixin<RolesUser, RolesUserId>;
  hasRolesUser!: Sequelize.HasManyHasAssociationMixin<RolesUser, RolesUserId>;
  hasRolesUsers!: Sequelize.HasManyHasAssociationsMixin<RolesUser, RolesUserId>;
  countRolesUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Roles {
    return Roles.init({
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
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'Roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Roles_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
