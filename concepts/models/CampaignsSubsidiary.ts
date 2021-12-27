import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Campaigns, CampaignsId } from './Campaigns';
import type { Subsidiary, SubsidiaryId } from './Subsidiary';

export interface CampaignsSubsidiaryAttributes {
  Id: number;
  IdSubsidiary: number;
  IdCampaignPromotion: number;
  IsDeleted?: boolean;
}

export type CampaignsSubsidiaryPk = "Id";
export type CampaignsSubsidiaryId = CampaignsSubsidiary[CampaignsSubsidiaryPk];
export type CampaignsSubsidiaryOptionalAttributes = "Id" | "IsDeleted";
export type CampaignsSubsidiaryCreationAttributes = Optional<CampaignsSubsidiaryAttributes, CampaignsSubsidiaryOptionalAttributes>;

export class CampaignsSubsidiary extends Model<CampaignsSubsidiaryAttributes, CampaignsSubsidiaryCreationAttributes> implements CampaignsSubsidiaryAttributes {
  Id!: number;
  IdSubsidiary!: number;
  IdCampaignPromotion!: number;
  IsDeleted?: boolean;

  // CampaignsSubsidiary belongsTo Campaigns via IdCampaignPromotion
  IdCampaignPromotion_Campaign!: Campaigns;
  getIdCampaignPromotion_Campaign!: Sequelize.BelongsToGetAssociationMixin<Campaigns>;
  setIdCampaignPromotion_Campaign!: Sequelize.BelongsToSetAssociationMixin<Campaigns, CampaignsId>;
  createIdCampaignPromotion_Campaign!: Sequelize.BelongsToCreateAssociationMixin<Campaigns>;
  // CampaignsSubsidiary belongsTo Subsidiary via IdSubsidiary
  IdSubsidiary_Subsidiary!: Subsidiary;
  getIdSubsidiary_Subsidiary!: Sequelize.BelongsToGetAssociationMixin<Subsidiary>;
  setIdSubsidiary_Subsidiary!: Sequelize.BelongsToSetAssociationMixin<Subsidiary, SubsidiaryId>;
  createIdSubsidiary_Subsidiary!: Sequelize.BelongsToCreateAssociationMixin<Subsidiary>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CampaignsSubsidiary {
    return CampaignsSubsidiary.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdSubsidiary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subsidiary',
        key: 'Id'
      }
    },
    IdCampaignPromotion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Campaigns',
        key: 'Id'
      }
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'CampaignsSubsidiary',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "CampaignsSubsidiary_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
