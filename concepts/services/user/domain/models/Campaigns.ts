import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CampaignsProducts, CampaignsProductsId } from './CampaignsProducts';
import type { CampaignsSubsidiary, CampaignsSubsidiaryId } from './CampaignsSubsidiary';
import type { ImagesCampaign, ImagesCampaignId } from './ImagesCampaign';

export interface CampaignsAttributes {
  Id: number;
  Name?: Date;
  Description?: string;
  StartDate?: string;
  StampDate?: string;
  EndDate?: string;
  IsActive?: boolean;
  Id_Old?: number;
  CreateDate?: string;
  IsDeleted?: boolean;
}

export type CampaignsPk = "Id";
export type CampaignsId = Campaigns[CampaignsPk];
export type CampaignsOptionalAttributes = "Id" | "Name" | "Description" | "StartDate" | "StampDate" | "EndDate" | "IsActive" | "Id_Old" | "CreateDate" | "IsDeleted";
export type CampaignsCreationAttributes = Optional<CampaignsAttributes, CampaignsOptionalAttributes>;

export class Campaigns extends Model<CampaignsAttributes, CampaignsCreationAttributes> implements CampaignsAttributes {
  Id!: number;
  Name?: Date;
  Description?: string;
  StartDate?: string;
  StampDate?: string;
  EndDate?: string;
  IsActive?: boolean;
  Id_Old?: number;
  CreateDate?: string;
  IsDeleted?: boolean;

  // Campaigns hasMany CampaignsProducts via IdCampaign
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
  // Campaigns hasMany CampaignsSubsidiary via IdCampaignPromotion
  CampaignsSubsidiaries!: CampaignsSubsidiary[];
  getCampaignsSubsidiaries!: Sequelize.HasManyGetAssociationsMixin<CampaignsSubsidiary>;
  setCampaignsSubsidiaries!: Sequelize.HasManySetAssociationsMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  addCampaignsSubsidiary!: Sequelize.HasManyAddAssociationMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  addCampaignsSubsidiaries!: Sequelize.HasManyAddAssociationsMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  createCampaignsSubsidiary!: Sequelize.HasManyCreateAssociationMixin<CampaignsSubsidiary>;
  removeCampaignsSubsidiary!: Sequelize.HasManyRemoveAssociationMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  removeCampaignsSubsidiaries!: Sequelize.HasManyRemoveAssociationsMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  hasCampaignsSubsidiary!: Sequelize.HasManyHasAssociationMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  hasCampaignsSubsidiaries!: Sequelize.HasManyHasAssociationsMixin<CampaignsSubsidiary, CampaignsSubsidiaryId>;
  countCampaignsSubsidiaries!: Sequelize.HasManyCountAssociationsMixin;
  // Campaigns hasMany ImagesCampaign via IdCampaign
  ImagesCampaigns!: ImagesCampaign[];
  getImagesCampaigns!: Sequelize.HasManyGetAssociationsMixin<ImagesCampaign>;
  setImagesCampaigns!: Sequelize.HasManySetAssociationsMixin<ImagesCampaign, ImagesCampaignId>;
  addImagesCampaign!: Sequelize.HasManyAddAssociationMixin<ImagesCampaign, ImagesCampaignId>;
  addImagesCampaigns!: Sequelize.HasManyAddAssociationsMixin<ImagesCampaign, ImagesCampaignId>;
  createImagesCampaign!: Sequelize.HasManyCreateAssociationMixin<ImagesCampaign>;
  removeImagesCampaign!: Sequelize.HasManyRemoveAssociationMixin<ImagesCampaign, ImagesCampaignId>;
  removeImagesCampaigns!: Sequelize.HasManyRemoveAssociationsMixin<ImagesCampaign, ImagesCampaignId>;
  hasImagesCampaign!: Sequelize.HasManyHasAssociationMixin<ImagesCampaign, ImagesCampaignId>;
  hasImagesCampaigns!: Sequelize.HasManyHasAssociationsMixin<ImagesCampaign, ImagesCampaignId>;
  countImagesCampaigns!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Campaigns {
    return Campaigns.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    StampDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Id_Old: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Campaigns',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Campaigns_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
