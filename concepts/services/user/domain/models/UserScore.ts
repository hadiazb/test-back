import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Users, UsersId } from './Users';

export interface UserScoreAttributes {
  Id: number;
  IdUserDomiciliary?: number;
  Comments?: string;
  IdUser?: number;
  IsDeleted?: boolean;
  CreateDate?: string;
}

export type UserScorePk = "Id";
export type UserScoreId = UserScore[UserScorePk];
export type UserScoreOptionalAttributes = "Id" | "IdUserDomiciliary" | "Comments" | "IdUser" | "IsDeleted" | "CreateDate";
export type UserScoreCreationAttributes = Optional<UserScoreAttributes, UserScoreOptionalAttributes>;

export class UserScore extends Model<UserScoreAttributes, UserScoreCreationAttributes> implements UserScoreAttributes {
  Id!: number;
  IdUserDomiciliary?: number;
  Comments?: string;
  IdUser?: number;
  IsDeleted?: boolean;
  CreateDate?: string;

  // UserScore belongsTo Users via IdUserDomiciliary
  IdUserDomiciliary_User!: Users;
  getIdUserDomiciliary_User!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setIdUserDomiciliary_User!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createIdUserDomiciliary_User!: Sequelize.BelongsToCreateAssociationMixin<Users>;
  // UserScore belongsTo Users via IdUser
  IdUser_User!: Users;
  getIdUser_User!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setIdUser_User!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createIdUser_User!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof UserScore {
    return UserScore.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdUserDomiciliary: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'Id'
      }
    },
    Comments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'Id'
      }
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UserScore',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "UserScore_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
