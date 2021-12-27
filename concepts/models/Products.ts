import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CampaignsProducts, CampaignsProductsId } from './CampaignsProducts';
import type { Market, MarketId } from './Market';
import type { ProducCategory, ProducCategoryId } from './ProducCategory';
import type { ProductAditionals, ProductAditionalsId } from './ProductAditionals';
import type { ProuctsOrder, ProuctsOrderId } from './ProuctsOrder';

export interface ProductsAttributes {
  id: number;
  Sku?: string;
  Name?: string;
  Amount?: number;
  ShortDescription?: string;
  LongDescription?: string;
  Price?: number;
  Image?: string;
  Total?: number;
  Comments?: string;
  IsActive?: boolean;
  Id_Old?: string;
  IdMarket: number;
  MarketingPrice?: number;
  IsDeleted?: boolean;
  CreateDate?: string;
}

export type ProductsPk = "id";
export type ProductsId = Products[ProductsPk];
export type ProductsOptionalAttributes = "id" | "Sku" | "Name" | "Amount" | "ShortDescription" | "LongDescription" | "Price" | "Image" | "Total" | "Comments" | "IsActive" | "Id_Old" | "MarketingPrice" | "IsDeleted" | "CreateDate";
export type ProductsCreationAttributes = Optional<ProductsAttributes, ProductsOptionalAttributes>;

export class Products extends Model<ProductsAttributes, ProductsCreationAttributes> implements ProductsAttributes {
  id!: number;
  Sku?: string;
  Name?: string;
  Amount?: number;
  ShortDescription?: string;
  LongDescription?: string;
  Price?: number;
  Image?: string;
  Total?: number;
  Comments?: string;
  IsActive?: boolean;
  Id_Old?: string;
  IdMarket!: number;
  MarketingPrice?: number;
  IsDeleted?: boolean;
  CreateDate?: string;

  // Products belongsTo Market via IdMarket
  IdMarket_Market!: Market;
  getIdMarket_Market!: Sequelize.BelongsToGetAssociationMixin<Market>;
  setIdMarket_Market!: Sequelize.BelongsToSetAssociationMixin<Market, MarketId>;
  createIdMarket_Market!: Sequelize.BelongsToCreateAssociationMixin<Market>;
  // Products hasMany CampaignsProducts via IdProduct
  CampaignsProducts!: CampaignsProducts[];
  getCampaignsProducts!: Sequelize.HasManyGetAssociationsMixin<CampaignsProducts>;
  setCampaignsProducts!: Sequelize.HasManySetAssociationsMixin<CampaignsProducts, CampaignsProductsId>;
  addCampaignsProduct!: Sequelize.HasManyAddAssociationMixin<CampaignsProducts, CampaignsProductsId>;
  addCampaignsProducts!: Sequelize.HasManyAddAssociationsMixin<CampaignsProducts, CampaignsProductsId>;
  createCampaignsProduct!: Sequelize.HasManyCreateAssociationMixin<CampaignsProducts>;
  removeCampaignsProduct!: Sequelize.HasManyRemoveAssociationMixin<CampaignsProducts, CampaignsProductsId>;
  removeCampaignsProducts!: Sequelize.HasManyRemoveAssociationsMixin<CampaignsProducts, CampaignsProductsId>;
  hasCampaignsProduct!: Sequelize.HasManyHasAssociationMixin<CampaignsProducts, CampaignsProductsId>;
  hasCampaignsProducts!: Sequelize.HasManyHasAssociationsMixin<CampaignsProducts, CampaignsProductsId>;
  countCampaignsProducts!: Sequelize.HasManyCountAssociationsMixin;
  // Products hasMany ProducCategory via IdProduct
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
  // Products hasMany ProductAditionals via IdProduct
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
  // Products hasMany ProuctsOrder via IdProducts
  ProuctsOrders!: ProuctsOrder[];
  getProuctsOrders!: Sequelize.HasManyGetAssociationsMixin<ProuctsOrder>;
  setProuctsOrders!: Sequelize.HasManySetAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  addProuctsOrder!: Sequelize.HasManyAddAssociationMixin<ProuctsOrder, ProuctsOrderId>;
  addProuctsOrders!: Sequelize.HasManyAddAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  createProuctsOrder!: Sequelize.HasManyCreateAssociationMixin<ProuctsOrder>;
  removeProuctsOrder!: Sequelize.HasManyRemoveAssociationMixin<ProuctsOrder, ProuctsOrderId>;
  removeProuctsOrders!: Sequelize.HasManyRemoveAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  hasProuctsOrder!: Sequelize.HasManyHasAssociationMixin<ProuctsOrder, ProuctsOrderId>;
  hasProuctsOrders!: Sequelize.HasManyHasAssociationsMixin<ProuctsOrder, ProuctsOrderId>;
  countProuctsOrders!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Products {
    return Products.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Sku: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShortDescription: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LongDescription: {
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
    Total: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Comments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Id_Old: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdMarket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Market',
        key: 'Id'
      }
    },
    MarketingPrice: {
      type: DataTypes.INTEGER,
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
    tableName: 'Products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Products_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
