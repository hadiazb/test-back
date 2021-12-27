import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Additionals, AdditionalsId } from './Additionals';
import type { Products, ProductsId } from './Products';

export interface ProductAditionalsAttributes {
  Id: number;
  IdAdditional: number;
  IdProduct: number;
  Requiered: boolean;
  IsDeleted?: boolean;
}

export type ProductAditionalsPk = "Id";
export type ProductAditionalsId = ProductAditionals[ProductAditionalsPk];
export type ProductAditionalsOptionalAttributes = "Id" | "IsDeleted";
export type ProductAditionalsCreationAttributes = Optional<ProductAditionalsAttributes, ProductAditionalsOptionalAttributes>;

export class ProductAditionals extends Model<ProductAditionalsAttributes, ProductAditionalsCreationAttributes> implements ProductAditionalsAttributes {
  Id!: number;
  IdAdditional!: number;
  IdProduct!: number;
  Requiered!: boolean;
  IsDeleted?: boolean;

  // ProductAditionals belongsTo Additionals via IdAdditional
  IdAdditional_Additional!: Additionals;
  getIdAdditional_Additional!: Sequelize.BelongsToGetAssociationMixin<Additionals>;
  setIdAdditional_Additional!: Sequelize.BelongsToSetAssociationMixin<Additionals, AdditionalsId>;
  createIdAdditional_Additional!: Sequelize.BelongsToCreateAssociationMixin<Additionals>;
  // ProductAditionals belongsTo Products via IdProduct
  IdProduct_Product!: Products;
  getIdProduct_Product!: Sequelize.BelongsToGetAssociationMixin<Products>;
  setIdProduct_Product!: Sequelize.BelongsToSetAssociationMixin<Products, ProductsId>;
  createIdProduct_Product!: Sequelize.BelongsToCreateAssociationMixin<Products>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ProductAditionals {
    return ProductAditionals.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdAdditional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Additionals',
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
    Requiered: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'ProductAditionals',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ProductAditionals_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
