import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Market, MarketId } from './Market';
import type { Users, UsersId } from './Users';

export interface MarketScoreAttributes {
	Id: number;
	IsDeleted?: boolean;
	CreateDate?: string;
	Packing?: number;
	Preparation?: number;
	IdMarket: number;
	Comments?: string;
	IdUser?: number;
}

export type MarketScorePk = 'Id';
export type MarketScoreId = MarketScore[MarketScorePk];
export type MarketScoreOptionalAttributes =
	| 'Id'
	| 'IsDeleted'
	| 'CreateDate'
	| 'Packing'
	| 'Preparation'
	| 'IdMarket'
	| 'Comments'
	| 'IdUser';
export type MarketScoreCreationAttributes = Optional<
	MarketScoreAttributes,
	MarketScoreOptionalAttributes
>;

export class MarketScore
	extends Model<MarketScoreAttributes, MarketScoreCreationAttributes>
	implements MarketScoreAttributes
{
	Id!: number;
	IsDeleted?: boolean;
	CreateDate?: string;
	Packing?: number;
	Preparation?: number;
	IdMarket!: number;
	Comments?: string;
	IdUser?: number;

	// MarketScore belongsTo Market via IdMarket
	IdMarket_Market!: Market;
	getIdMarket_Market!: Sequelize.BelongsToGetAssociationMixin<Market>;
	setIdMarket_Market!: Sequelize.BelongsToSetAssociationMixin<Market, MarketId>;
	createIdMarket_Market!: Sequelize.BelongsToCreateAssociationMixin<Market>;
	// MarketScore belongsTo Users via IdUser
	IdUser_User!: Users;
	getIdUser_User!: Sequelize.BelongsToGetAssociationMixin<Users>;
	setIdUser_User!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
	createIdUser_User!: Sequelize.BelongsToCreateAssociationMixin<Users>;

	static initModel(sequelize: Sequelize.Sequelize): typeof MarketScore {
		return MarketScore.init(
			{
				Id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				IsDeleted: {
					type: DataTypes.BOOLEAN,
					allowNull: true,
					defaultValue: false,
				},
				CreateDate: {
					type: DataTypes.DATEONLY,
					allowNull: true,
					defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
				},
				Packing: {
					type: DataTypes.REAL,
					allowNull: true,
				},
				Preparation: {
					type: DataTypes.REAL,
					allowNull: true,
				},
				IdMarket: {
					// autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: 'Market',
						key: 'Id',
					},
				},
				Comments: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				IdUser: {
					type: DataTypes.INTEGER,
					allowNull: true,
					references: {
						model: 'Users',
						key: 'Id',
					},
				},
			},
			{
				sequelize,
				tableName: 'MarketScore',
				schema: 'public',
				timestamps: false,
				indexes: [
					{
						name: 'MarketScore_pkey',
						unique: true,
						fields: [{ name: 'Id' }],
					},
				],
			}
		);
	}
}
