import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ProducCategory, ProducCategoryId } from './ProducCategory';

export interface CategoryAttributes {
  Id: number;
  Name?: string;
  Image?: string;
  IsActive?: boolean;
  Parent?: number;
  CreateDate?: string;
  IsDeleted?: boolean;
  Id_Old?: string;
}

export type CategoryPk = "Id";
export type CategoryId = Category[CategoryPk];
export type CategoryOptionalAttributes = "Id" | "Name" | "Image" | "IsActive" | "Parent" | "CreateDate" | "IsDeleted" | "Id_Old";
export type CategoryCreationAttributes = Optional<CategoryAttributes, CategoryOptionalAttributes>;

export class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  Id!: number;
  Name?: string;
  Image?: string;
  IsActive?: boolean;
  Parent?: number;
  CreateDate?: string;
  IsDeleted?: boolean;
  Id_Old?: string;

  // Category belongsTo Category via Parent
  Parent_Category!: Category;
  getParent_Category!: Sequelize.BelongsToGetAssociationMixin<Category>;
  setParent_Category!: Sequelize.BelongsToSetAssociationMixin<Category, CategoryId>;
  createParent_Category!: Sequelize.BelongsToCreateAssociationMixin<Category>;
  // Category hasMany ProducCategory via IdCategory
  ProducCategories!: ProducCategory[];
  getProducCategories!: Sequelize.HasManyGetAssociationsMixin<ProducCategory>;
  setProducCategories!: Sequelize.HasManySetAssociationsMixin<ProducCategory, ProducCategoryId>;
  addProducCategory!: Sequelize.HasManyAddAssociationMixin<ProducCategory, ProducCategoryId>;
  addProducCategories!: Sequelize.HasManyAddAssociationsMixin<ProducCategory, ProducCategoryId>;
  createProducCategory!: Sequelize.HasManyCreateAssociationMixin<ProducCategory>;
  removeProducCategory!: Sequelize.HasManyRemoveAssociationMixin<ProducCategory, ProducCategoryId>;
  removeProducCategories!: Sequelize.HasManyRemoveAssociationsMixin<ProducCategory, ProducCategoryId>;
  hasProducCategory!: Sequelize.HasManyHasAssociationMixin<ProducCategory, ProducCategoryId>;
  hasProducCategories!: Sequelize.HasManyHasAssociationsMixin<ProducCategory, ProducCategoryId>;
  countProducCategories!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Category {
    return Category.init({
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
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Parent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Category',
        key: 'Id'
      }
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
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Category_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
