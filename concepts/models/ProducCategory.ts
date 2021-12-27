import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Category, CategoryId } from './Category';
import type { Products, ProductsId } from './Products';

export interface ProducCategoryAttributes {
  Id: number;
  IdCategory: number;
  IdProduct: number;
  IsDeleted?: boolean;
}

export type ProducCategoryPk = "Id";
export type ProducCategoryId = ProducCategory[ProducCategoryPk];
export type ProducCategoryOptionalAttributes = "Id" | "IsDeleted";
export type ProducCategoryCreationAttributes = Optional<ProducCategoryAttributes, ProducCategoryOptionalAttributes>;

export class ProducCategory extends Model<ProducCategoryAttributes, ProducCategoryCreationAttributes> implements ProducCategoryAttributes {
  Id!: number;
  IdCategory!: number;
  IdProduct!: number;
  IsDeleted?: boolean;

  // ProducCategory belongsTo Category via IdCategory
  IdCategory_Category!: Category;
  getIdCategory_Category!: Sequelize.BelongsToGetAssociationMixin<Category>;
  setIdCategory_Category!: Sequelize.BelongsToSetAssociationMixin<Category, CategoryId>;
  createIdCategory_Category!: Sequelize.BelongsToCreateAssociationMixin<Category>;
  // ProducCategory belongsTo Products via IdProduct
  IdProduct_Product!: Products;
  getIdProduct_Product!: Sequelize.BelongsToGetAssociationMixin<Products>;
  setIdProduct_Product!: Sequelize.BelongsToSetAssociationMixin<Products, ProductsId>;
  createIdProduct_Product!: Sequelize.BelongsToCreateAssociationMixin<Products>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ProducCategory {
    return ProducCategory.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'Id'
      }
    },
    IdProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id'
      }
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'ProducCategory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ProducCategory_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
