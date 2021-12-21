import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { City, CityId } from './City';
import type { Market, MarketId } from './Market';
import type { Order, OrderId } from './Order';
import type { RolesUser, RolesUserId } from './RolesUser';
import type { Services, ServicesId } from './Services';
import type { UserScore, UserScoreId } from './UserScore';
import type { Vehicles, VehiclesId } from './Vehicles';

export interface UsersAttributes {
	Id: number;
	Name?: string;
	LastName?: string;
	Email?: string;
	RegistrationDate?: string;
	Phone?: string;
	ProfilePhoto?: string;
	IsActive?: boolean;
	InvitationCode?: string;
	VirtualWallet?: number;
	BirthDate?: string;
	MarketId?: number;
	Admin?: boolean;
	Address?: string;
	Gender?: number;
	TypeUser?: number;
	LicenseValidity?: string;
	AccountNumber?: string;
	Coordinator?: boolean;
	IdCity?: number;
	haveDatafono?: boolean;
	IdMarket?: number;
	Verified?: boolean;
	Id_Old?: string;
	TokenPush?: string;
	Longitude?: string;
	Latitude?: string;
	Instructions?: string;
	Password?: string;
	IsDeleted?: boolean;
}

export type UsersPk = 'Id';
export type UsersId = Users[UsersPk];
export type UsersOptionalAttributes =
	| 'Id'
	| 'Name'
	| 'LastName'
	| 'Email'
	| 'RegistrationDate'
	| 'Phone'
	| 'ProfilePhoto'
	| 'IsActive'
	| 'InvitationCode'
	| 'VirtualWallet'
	| 'BirthDate'
	| 'MarketId'
	| 'Admin'
	| 'Address'
	| 'Gender'
	| 'TypeUser'
	| 'LicenseValidity'
	| 'AccountNumber'
	| 'Coordinator'
	| 'IdCity'
	| 'haveDatafono'
	| 'IdMarket'
	| 'Verified'
	| 'Id_Old'
	| 'TokenPush'
	| 'Longitude'
	| 'Latitude'
	| 'Instructions'
	| 'Password'
	| 'IsDeleted';
export type UsersCreationAttributes = Optional<
	UsersAttributes,
	UsersOptionalAttributes
>;

export class Users
	extends Model<UsersAttributes, UsersCreationAttributes>
	implements UsersAttributes
{
	Id!: number;
	Name?: string;
	LastName?: string;
	Email?: string;
	RegistrationDate?: string;
	Phone?: string;
	ProfilePhoto?: string;
	IsActive?: boolean;
	InvitationCode?: string;
	VirtualWallet?: number;
	BirthDate?: string;
	MarketId?: number;
	Admin?: boolean;
	Address?: string;
	Gender?: number;
	TypeUser?: number;
	LicenseValidity?: string;
	AccountNumber?: string;
	Coordinator?: boolean;
	IdCity?: number;
	haveDatafono?: boolean;
	IdMarket?: number;
	Verified?: boolean;
	Id_Old?: string;
	TokenPush?: string;
	Longitude?: string;
	Latitude?: string;
	Instructions?: string;
	Password?: string;
	IsDeleted?: boolean;

	// Users belongsTo City via IdCity
	IdCity_City!: City;
	getIdCity_City!: Sequelize.BelongsToGetAssociationMixin<City>;
	setIdCity_City!: Sequelize.BelongsToSetAssociationMixin<City, CityId>;
	createIdCity_City!: Sequelize.BelongsToCreateAssociationMixin<City>;
	// Users belongsTo Market via IdMarket
	IdMarket_Market!: Market;
	getIdMarket_Market!: Sequelize.BelongsToGetAssociationMixin<Market>;
	setIdMarket_Market!: Sequelize.BelongsToSetAssociationMixin<Market, MarketId>;
	createIdMarket_Market!: Sequelize.BelongsToCreateAssociationMixin<Market>;
	// Users hasMany Order via IdUsers
	Orders!: Order[];
	getOrders!: Sequelize.HasManyGetAssociationsMixin<Order>;
	setOrders!: Sequelize.HasManySetAssociationsMixin<Order, OrderId>;
	addOrder!: Sequelize.HasManyAddAssociationMixin<Order, OrderId>;
	addOrders!: Sequelize.HasManyAddAssociationsMixin<Order, OrderId>;
	createOrder!: Sequelize.HasManyCreateAssociationMixin<Order>;
	removeOrder!: Sequelize.HasManyRemoveAssociationMixin<Order, OrderId>;
	removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<Order, OrderId>;
	hasOrder!: Sequelize.HasManyHasAssociationMixin<Order, OrderId>;
	hasOrders!: Sequelize.HasManyHasAssociationsMixin<Order, OrderId>;
	countOrders!: Sequelize.HasManyCountAssociationsMixin;
	// Users hasMany RolesUser via IdUsers
	RolesUsers!: RolesUser[];
	getRolesUsers!: Sequelize.HasManyGetAssociationsMixin<RolesUser>;
	setRolesUsers!: Sequelize.HasManySetAssociationsMixin<RolesUser, RolesUserId>;
	addRolesUser!: Sequelize.HasManyAddAssociationMixin<RolesUser, RolesUserId>;
	addRolesUsers!: Sequelize.HasManyAddAssociationsMixin<RolesUser, RolesUserId>;
	createRolesUser!: Sequelize.HasManyCreateAssociationMixin<RolesUser>;
	removeRolesUser!: Sequelize.HasManyRemoveAssociationMixin<
		RolesUser,
		RolesUserId
	>;
	removeRolesUsers!: Sequelize.HasManyRemoveAssociationsMixin<
		RolesUser,
		RolesUserId
	>;
	hasRolesUser!: Sequelize.HasManyHasAssociationMixin<RolesUser, RolesUserId>;
	hasRolesUsers!: Sequelize.HasManyHasAssociationsMixin<RolesUser, RolesUserId>;
	countRolesUsers!: Sequelize.HasManyCountAssociationsMixin;
	// Users hasMany Services via IdUser
	Services!: Services[];
	getServices!: Sequelize.HasManyGetAssociationsMixin<Services>;
	setServices!: Sequelize.HasManySetAssociationsMixin<Services, ServicesId>;
	addService!: Sequelize.HasManyAddAssociationMixin<Services, ServicesId>;
	addServices!: Sequelize.HasManyAddAssociationsMixin<Services, ServicesId>;
	createService!: Sequelize.HasManyCreateAssociationMixin<Services>;
	removeService!: Sequelize.HasManyRemoveAssociationMixin<Services, ServicesId>;
	removeServices!: Sequelize.HasManyRemoveAssociationsMixin<
		Services,
		ServicesId
	>;
	hasService!: Sequelize.HasManyHasAssociationMixin<Services, ServicesId>;
	hasServices!: Sequelize.HasManyHasAssociationsMixin<Services, ServicesId>;
	countServices!: Sequelize.HasManyCountAssociationsMixin;
	// Users hasMany UserScore via IdUserDomiciliary
	UserScores!: UserScore[];
	getUserScores!: Sequelize.HasManyGetAssociationsMixin<UserScore>;
	setUserScores!: Sequelize.HasManySetAssociationsMixin<UserScore, UserScoreId>;
	addUserScore!: Sequelize.HasManyAddAssociationMixin<UserScore, UserScoreId>;
	addUserScores!: Sequelize.HasManyAddAssociationsMixin<UserScore, UserScoreId>;
	createUserScore!: Sequelize.HasManyCreateAssociationMixin<UserScore>;
	removeUserScore!: Sequelize.HasManyRemoveAssociationMixin<
		UserScore,
		UserScoreId
	>;
	removeUserScores!: Sequelize.HasManyRemoveAssociationsMixin<
		UserScore,
		UserScoreId
	>;
	hasUserScore!: Sequelize.HasManyHasAssociationMixin<UserScore, UserScoreId>;
	hasUserScores!: Sequelize.HasManyHasAssociationsMixin<UserScore, UserScoreId>;
	countUserScores!: Sequelize.HasManyCountAssociationsMixin;
	// Users hasMany UserScore via IdUser
	IdUser_UserScores!: UserScore[];
	getIdUser_UserScores!: Sequelize.HasManyGetAssociationsMixin<UserScore>;
	setIdUser_UserScores!: Sequelize.HasManySetAssociationsMixin<
		UserScore,
		UserScoreId
	>;
	addIdUser_UserScore!: Sequelize.HasManyAddAssociationMixin<
		UserScore,
		UserScoreId
	>;
	addIdUser_UserScores!: Sequelize.HasManyAddAssociationsMixin<
		UserScore,
		UserScoreId
	>;
	createIdUser_UserScore!: Sequelize.HasManyCreateAssociationMixin<UserScore>;
	removeIdUser_UserScore!: Sequelize.HasManyRemoveAssociationMixin<
		UserScore,
		UserScoreId
	>;
	removeIdUser_UserScores!: Sequelize.HasManyRemoveAssociationsMixin<
		UserScore,
		UserScoreId
	>;
	hasIdUser_UserScore!: Sequelize.HasManyHasAssociationMixin<
		UserScore,
		UserScoreId
	>;
	hasIdUser_UserScores!: Sequelize.HasManyHasAssociationsMixin<
		UserScore,
		UserScoreId
	>;
	countIdUser_UserScores!: Sequelize.HasManyCountAssociationsMixin;
	// Users hasMany Vehicles via IdUser
	Vehicles!: Vehicles[];
	getVehicles!: Sequelize.HasManyGetAssociationsMixin<Vehicles>;
	setVehicles!: Sequelize.HasManySetAssociationsMixin<Vehicles, VehiclesId>;
	addVehicle!: Sequelize.HasManyAddAssociationMixin<Vehicles, VehiclesId>;
	addVehicles!: Sequelize.HasManyAddAssociationsMixin<Vehicles, VehiclesId>;
	createVehicle!: Sequelize.HasManyCreateAssociationMixin<Vehicles>;
	removeVehicle!: Sequelize.HasManyRemoveAssociationMixin<Vehicles, VehiclesId>;
	removeVehicles!: Sequelize.HasManyRemoveAssociationsMixin<
		Vehicles,
		VehiclesId
	>;
	hasVehicle!: Sequelize.HasManyHasAssociationMixin<Vehicles, VehiclesId>;
	hasVehicles!: Sequelize.HasManyHasAssociationsMixin<Vehicles, VehiclesId>;
	countVehicles!: Sequelize.HasManyCountAssociationsMixin;

	static initModel(sequelize: Sequelize.Sequelize): typeof Users {
		return Users.init(
			{
				Id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				Name: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				LastName: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				Email: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				RegistrationDate: {
					type: DataTypes.DATEONLY,
					allowNull: true,
				},
				Phone: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				ProfilePhoto: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				IsActive: {
					type: DataTypes.BOOLEAN,
					allowNull: true,
				},
				InvitationCode: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				VirtualWallet: {
					type: DataTypes.INTEGER,
					allowNull: true,
				},
				BirthDate: {
					type: DataTypes.DATEONLY,
					allowNull: true,
				},
				MarketId: {
					type: DataTypes.INTEGER,
					allowNull: true,
				},
				Admin: {
					type: DataTypes.BOOLEAN,
					allowNull: true,
				},
				Address: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				Gender: {
					type: DataTypes.INTEGER,
					allowNull: true,
				},
				TypeUser: {
					type: DataTypes.INTEGER,
					allowNull: true,
				},
				LicenseValidity: {
					type: DataTypes.DATEONLY,
					allowNull: true,
				},
				AccountNumber: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				Coordinator: {
					type: DataTypes.BOOLEAN,
					allowNull: true,
				},
				IdCity: {
					type: DataTypes.INTEGER,
					allowNull: true,
					references: {
						model: 'City',
						key: 'Id',
					},
				},
				haveDatafono: {
					type: DataTypes.BOOLEAN,
					allowNull: true,
				},
				IdMarket: {
					type: DataTypes.INTEGER,
					allowNull: true,
					references: {
						model: 'Market',
						key: 'Id',
					},
				},
				Verified: {
					type: DataTypes.BOOLEAN,
					allowNull: true,
				},
				Id_Old: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				TokenPush: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				Longitude: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				Latitude: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				Instructions: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				Password: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				IsDeleted: {
					type: DataTypes.BOOLEAN,
					allowNull: true,
				},
			},
			{
				sequelize,
				tableName: 'Users',
				schema: 'public',
				timestamps: false,
				indexes: [
					{
						name: 'Users_pkey',
						unique: true,
						fields: [{ name: 'Id' }],
					},
				],
			}
		);
	}
}
