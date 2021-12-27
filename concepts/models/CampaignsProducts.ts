import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Campaigns, CampaignsId } from './Campaigns';
import type { Products, ProductsId } from './Products';

export interface CampaignsProductsAttributes {
  Id: number;
  IdCampaign: number;
  IdProduct: number;
  IsDeleted?: boolean;
}

export type CampaignsProductsPk = "Id";
export type CampaignsProductsId = CampaignsProducts[CampaignsProductsPk];
export type CampaignsProductsOptionalAttributes = "Id" | "IsDeleted";
export type CampaignsProductsCreationAttributes = Optional<CampaignsProductsAttributes, CampaignsProductsOptionalAttributes>;

export class CampaignsProducts extends Model<CampaignsProductsAttributes, CampaignsProductsCreationAttributes> implements CampaignsProductsAttributes {
  Id!: number;
  IdCampaign!: number;
  IdProduct!: number;
  IsDeleted?: boolean;

  // CampaignsProducts belongsTo Campaigns via IdCampaign
  IdCampaign_Campaign!: Campaigns;
  getIdCampaign_Campaign!: Sequelize.BelongsToGetAssociationMixin<Campaigns>;
  setIdCampaign_Campaign!: Sequelize.BelongsToSetAssociationMixin<Campaigns, CampaignsId>;
  createIdCampaign_Campaign!: Sequelize.BelongsToCreateAssociationMixin<Campaigns>;
  // CampaignsProducts belongsTo Products via IdProduct
  IdProduct_Product!: Products;
  getIdProduct_Product!: Sequelize.BelongsToGetAssociationMixin<Products>;
  setIdProduct_Product!: Sequelize.BelongsToSetAssociationMixin<Products, ProductsId>;
  createIdProduct_Product!: Sequelize.BelongsToCreateAssociationMixin<Products>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CampaignsProducts {
    return CampaignsProducts.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdCampaign: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Campaigns',
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
    tableName: 'CampaignsProducts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "CampaignsProducts_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
