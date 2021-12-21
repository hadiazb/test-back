import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MarketCategoryRelation, MarketCategoryRelationId } from './MarketCategoryRelation';

export interface MarketCategoryAttributes {
  Id: number;
  Name?: string;
  Image?: string;
  Parent?: number;
  Id_Old?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
  CreateDate?: string;
}

export type MarketCategoryPk = "Id";
export type MarketCategoryId = MarketCategory[MarketCategoryPk];
export type MarketCategoryOptionalAttributes = "Id" | "Name" | "Image" | "Parent" | "Id_Old" | "IsActive" | "IsDeleted" | "CreateDate";
export type MarketCategoryCreationAttributes = Optional<MarketCategoryAttributes, MarketCategoryOptionalAttributes>;

export class MarketCategory extends Model<MarketCategoryAttributes, MarketCategoryCreationAttributes> implements MarketCategoryAttributes {
  Id!: number;
  Name?: string;
  Image?: string;
  Parent?: number;
  Id_Old?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
  CreateDate?: string;

  // MarketCategory belongsTo MarketCategory via Parent
  Parent_MarketCategory!: MarketCategory;
  getParent_MarketCategory!: Sequelize.BelongsToGetAssociationMixin<MarketCategory>;
  setParent_MarketCategory!: Sequelize.BelongsToSetAssociationMixin<MarketCategory, MarketCategoryId>;
  createParent_MarketCategory!: Sequelize.BelongsToCreateAssociationMixin<MarketCategory>;
  // MarketCategory hasMany MarketCategoryRelation via IdMarketCategory
  MarketCategoryRelations!: MarketCategoryRelation[];
  getMarketCategoryRelations!: Sequelize.HasManyGetAssociationsMixin<MarketCategoryRelation>;
  setMarketCategoryRelations!: Sequelize.HasManySetAssociationsMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  addMarketCategoryRelation!: Sequelize.HasManyAddAssociationMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  addMarketCategoryRelations!: Sequelize.HasManyAddAssociationsMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  createMarketCategoryRelation!: Sequelize.HasManyCreateAssociationMixin<MarketCategoryRelation>;
  removeMarketCategoryRelation!: Sequelize.HasManyRemoveAssociationMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  removeMarketCategoryRelations!: Sequelize.HasManyRemoveAssociationsMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  hasMarketCategoryRelation!: Sequelize.HasManyHasAssociationMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  hasMarketCategoryRelations!: Sequelize.HasManyHasAssociationsMixin<MarketCategoryRelation, MarketCategoryRelationId>;
  countMarketCategoryRelations!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof MarketCategory {
    return MarketCategory.init({
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
    Image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Parent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'MarketCategory',
        key: 'Id'
      }
    },
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
    tableName: 'MarketCategory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "MarketCategory_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
