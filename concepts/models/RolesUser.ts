import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Roles, RolesId } from './Roles';
import type { Users, UsersId } from './Users';

export interface RolesUserAttributes {
  Id: number;
  IdUsers: number;
  IdRoles: number;
  IsDeleted?: boolean;
}

export type RolesUserPk = "Id";
export type RolesUserId = RolesUser[RolesUserPk];
export type RolesUserOptionalAttributes = "Id" | "IsDeleted";
export type RolesUserCreationAttributes = Optional<RolesUserAttributes, RolesUserOptionalAttributes>;

export class RolesUser extends Model<RolesUserAttributes, RolesUserCreationAttributes> implements RolesUserAttributes {
  Id!: number;
  IdUsers!: number;
  IdRoles!: number;
  IsDeleted?: boolean;

  // RolesUser belongsTo Roles via IdRoles
  IdRoles_Role!: Roles;
  getIdRoles_Role!: Sequelize.BelongsToGetAssociationMixin<Roles>;
  setIdRoles_Role!: Sequelize.BelongsToSetAssociationMixin<Roles, RolesId>;
  createIdRoles_Role!: Sequelize.BelongsToCreateAssociationMixin<Roles>;
  // RolesUser belongsTo Users via IdUsers
  IdUsers_User!: Users;
  getIdUsers_User!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setIdUsers_User!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createIdUsers_User!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof RolesUser {
    return RolesUser.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdUsers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'Id'
      }
    },
    IdRoles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
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
    tableName: 'RolesUser',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "RolesUser_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
