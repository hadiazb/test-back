import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Campaigns, CampaignsId } from './Campaigns';

export interface ImagesCampaignAttributes {
  Id: number;
  Image?: string;
  IdCampaign: number;
  IsDeleted?: boolean;
  CreateDate?: string;
  IsActive?: boolean;
}

export type ImagesCampaignPk = "Id";
export type ImagesCampaignId = ImagesCampaign[ImagesCampaignPk];
export type ImagesCampaignOptionalAttributes = "Id" | "Image" | "IsDeleted" | "CreateDate" | "IsActive";
export type ImagesCampaignCreationAttributes = Optional<ImagesCampaignAttributes, ImagesCampaignOptionalAttributes>;

export class ImagesCampaign extends Model<ImagesCampaignAttributes, ImagesCampaignCreationAttributes> implements ImagesCampaignAttributes {
  Id!: number;
  Image?: string;
  IdCampaign!: number;
  IsDeleted?: boolean;
  CreateDate?: string;
  IsActive?: boolean;

  // ImagesCampaign belongsTo Campaigns via IdCampaign
  IdCampaign_Campaign!: Campaigns;
  getIdCampaign_Campaign!: Sequelize.BelongsToGetAssociationMixin<Campaigns>;
  setIdCampaign_Campaign!: Sequelize.BelongsToSetAssociationMixin<Campaigns, CampaignsId>;
  createIdCampaign_Campaign!: Sequelize.BelongsToCreateAssociationMixin<Campaigns>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ImagesCampaign {
    return ImagesCampaign.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdCampaign: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Campaigns',
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
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ImagesCampaign',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ImagesCampaign_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
