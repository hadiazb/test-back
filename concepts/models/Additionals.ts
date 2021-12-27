import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ProductAditionals, ProductAditionalsId } from './ProductAditionals';

export interface AdditionalsAttributes {
  Id: number;
  Name?: string;
  Price?: number;
  Image?: string;
  Description?: string;
  IsDeleted?: boolean;
  IsActive?: boolean;
  CreateDate?: string;
}

export type AdditionalsPk = "Id";
export type AdditionalsId = Additionals[AdditionalsPk];
export type AdditionalsOptionalAttributes = "Id" | "Name" | "Price" | "Image" | "Description" | "IsDeleted" | "IsActive" | "CreateDate";
export type AdditionalsCreationAttributes = Optional<AdditionalsAttributes, AdditionalsOptionalAttributes>;

export class Additionals extends Model<AdditionalsAttributes, AdditionalsCreationAttributes> implements AdditionalsAttributes {
  Id!: number;
  Name?: string;
  Price?: number;
  Image?: string;
  Description?: string;
  IsDeleted?: boolean;
  IsActive?: boolean;
  CreateDate?: string;

  // Additionals hasMany ProductAditionals via IdAdditional
  ProductAditionals!: ProductAditionals[];
  getProductAditionals!: Sequelize.HasManyGetAssociationsMixin<ProductAditionals>;
  setProductAditionals!: Sequelize.HasManySetAssociationsMixin<ProductAditionals, ProductAditionalsId>;
  addProductAditional!: Sequelize.HasManyAddAssociationMixin<ProductAditionals, ProductAditionalsId>;
  addProductAditionals!: Sequelize.HasManyAddAssociationsMixin<ProductAditionals, ProductAditionalsId>;
  createProductAditional!: Sequelize.HasManyCreateAssociationMixin<ProductAditionals>;
  removeProductAditional!: Sequelize.HasManyRemoveAssociationMixin<ProductAditionals, ProductAditionalsId>;
  removeProductAditionals!: Sequelize.HasManyRemoveAssociationsMixin<ProductAditionals, ProductAditionalsId>;
  hasProductAditional!: Sequelize.HasManyHasAssociationMixin<ProductAditionals, ProductAditionalsId>;
  hasProductAditionals!: Sequelize.HasManyHasAssociationsMixin<ProductAditionals, ProductAditionalsId>;
  countProductAditionals!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Additionals {
    return Additionals.init({
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
    Price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'Additionals',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Additionals_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
