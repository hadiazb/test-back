import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FavorUbication, FavorUbicationId } from './FavorUbication';
import type { Services, ServicesId } from './Services';

export interface FavorAttributes {
  Id: number;
  FavorType?: string;
  favorNumber?: number;
  Services_Id: number;
  Id_Old?: string;
  IsDeleted?: boolean;
}

export type FavorPk = "Id";
export type FavorId = Favor[FavorPk];
export type FavorOptionalAttributes = "Id" | "FavorType" | "favorNumber" | "Id_Old" | "IsDeleted";
export type FavorCreationAttributes = Optional<FavorAttributes, FavorOptionalAttributes>;

export class Favor extends Model<FavorAttributes, FavorCreationAttributes> implements FavorAttributes {
  Id!: number;
  FavorType?: string;
  favorNumber?: number;
  Services_Id!: number;
  Id_Old?: string;
  IsDeleted?: boolean;

  // Favor hasMany FavorUbication via IdFavor
  FavorUbications!: FavorUbication[];
  getFavorUbications!: Sequelize.HasManyGetAssociationsMixin<FavorUbication>;
  setFavorUbications!: Sequelize.HasManySetAssociationsMixin<FavorUbication, FavorUbicationId>;
  addFavorUbication!: Sequelize.HasManyAddAssociationMixin<FavorUbication, FavorUbicationId>;
  addFavorUbications!: Sequelize.HasManyAddAssociationsMixin<FavorUbication, FavorUbicationId>;
  createFavorUbication!: Sequelize.HasManyCreateAssociationMixin<FavorUbication>;
  removeFavorUbication!: Sequelize.HasManyRemoveAssociationMixin<FavorUbication, FavorUbicationId>;
  removeFavorUbications!: Sequelize.HasManyRemoveAssociationsMixin<FavorUbication, FavorUbicationId>;
  hasFavorUbication!: Sequelize.HasManyHasAssociationMixin<FavorUbication, FavorUbicationId>;
  hasFavorUbications!: Sequelize.HasManyHasAssociationsMixin<FavorUbication, FavorUbicationId>;
  countFavorUbications!: Sequelize.HasManyCountAssociationsMixin;
  // Favor belongsTo Services via Services_Id
  Service!: Services;
  getService!: Sequelize.BelongsToGetAssociationMixin<Services>;
  setService!: Sequelize.BelongsToSetAssociationMixin<Services, ServicesId>;
  createService!: Sequelize.BelongsToCreateAssociationMixin<Services>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Favor {
    return Favor.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FavorType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    favorNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Services_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Services',
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
    tableName: 'Favor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Favor_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
