import type { Sequelize } from 'sequelize';
import { Additionals as _Additionals } from './Additionals';
import type {
	AdditionalsAttributes,
	AdditionalsCreationAttributes,
} from './Additionals';
import { Campaigns as _Campaigns } from './Campaigns';
import type {
	CampaignsAttributes,
	CampaignsCreationAttributes,
} from './Campaigns';
import { CampaignsProducts as _CampaignsProducts } from './CampaignsProducts';
import type {
	CampaignsProductsAttributes,
	CampaignsProductsCreationAttributes,
} from './CampaignsProducts';
import { CampaignsSubsidiary as _CampaignsSubsidiary } from './CampaignsSubsidiary';
import type {
	CampaignsSubsidiaryAttributes,
	CampaignsSubsidiaryCreationAttributes,
} from './CampaignsSubsidiary';
import { Category as _Category } from './Category';
import type {
	CategoryAttributes,
	CategoryCreationAttributes,
} from './Category';
import { City as _City } from './City';
import type { CityAttributes, CityCreationAttributes } from './City';
import { CollectTaxesType as _CollectTaxesType } from './CollectTaxesType';
import type {
	CollectTaxesTypeAttributes,
	CollectTaxesTypeCreationAttributes,
} from './CollectTaxesType';
import { Concept as _Concept } from './Concept';
import type { ConceptAttributes, ConceptCreationAttributes } from './Concept';
import { Country as _Country } from './Country';
import type { CountryAttributes, CountryCreationAttributes } from './Country';
import { DeliveryService as _DeliveryService } from './DeliveryService';
import type {
	DeliveryServiceAttributes,
	DeliveryServiceCreationAttributes,
} from './DeliveryService';
import { Favor as _Favor } from './Favor';
import type { FavorAttributes, FavorCreationAttributes } from './Favor';
import { FavorConfiguration as _FavorConfiguration } from './FavorConfiguration';
import type {
	FavorConfigurationAttributes,
	FavorConfigurationCreationAttributes,
} from './FavorConfiguration';
import { FavorUbication as _FavorUbication } from './FavorUbication';
import type {
	FavorUbicationAttributes,
	FavorUbicationCreationAttributes,
} from './FavorUbication';
import { ImagesCampaign as _ImagesCampaign } from './ImagesCampaign';
import type {
	ImagesCampaignAttributes,
	ImagesCampaignCreationAttributes,
} from './ImagesCampaign';
import { Insurances as _Insurances } from './Insurances';
import type {
	InsurancesAttributes,
	InsurancesCreationAttributes,
} from './Insurances';
import { Market as _Market } from './Market';
import type { MarketAttributes, MarketCreationAttributes } from './Market';
import { MarketCategory as _MarketCategory } from './MarketCategory';
import type {
	MarketCategoryAttributes,
	MarketCategoryCreationAttributes,
} from './MarketCategory';
import { MarketCategoryRelation as _MarketCategoryRelation } from './MarketCategoryRelation';
import type {
	MarketCategoryRelationAttributes,
	MarketCategoryRelationCreationAttributes,
} from './MarketCategoryRelation';
import { MarketRanking as _MarketRanking } from './MarketRanking';
import type {
	MarketRankingAttributes,
	MarketRankingCreationAttributes,
} from './MarketRanking';
import { MarketScore as _MarketScore } from './MarketScore';
import type {
	MarketScoreAttributes,
	MarketScoreCreationAttributes,
} from './MarketScore';
import { Order as _Order } from './Order';
import type { OrderAttributes, OrderCreationAttributes } from './Order';
import { Parameters as _Parameters } from './Parameters';
import type {
	ParametersAttributes,
	ParametersCreationAttributes,
} from './Parameters';
import { PaymentType as _PaymentType } from './PaymentType';
import type {
	PaymentTypeAttributes,
	PaymentTypeCreationAttributes,
} from './PaymentType';
import { Payments as _Payments } from './Payments';
import type {
	PaymentsAttributes,
	PaymentsCreationAttributes,
} from './Payments';
import { PaymetMarket as _PaymetMarket } from './PaymetMarket';
import type {
	PaymetMarketAttributes,
	PaymetMarketCreationAttributes,
} from './PaymetMarket';
import { Permissions as _Permissions } from './Permissions';
import type {
	PermissionsAttributes,
	PermissionsCreationAttributes,
} from './Permissions';
import { PhoneRequest as _PhoneRequest } from './PhoneRequest';
import type {
	PhoneRequestAttributes,
	PhoneRequestCreationAttributes,
} from './PhoneRequest';
import { Plans as _Plans } from './Plans';
import type { PlansAttributes, PlansCreationAttributes } from './Plans';
import { ProducCategory as _ProducCategory } from './ProducCategory';
import type {
	ProducCategoryAttributes,
	ProducCategoryCreationAttributes,
} from './ProducCategory';
import { ProductAditionals as _ProductAditionals } from './ProductAditionals';
import type {
	ProductAditionalsAttributes,
	ProductAditionalsCreationAttributes,
} from './ProductAditionals';
import { Products as _Products } from './Products';
import type {
	ProductsAttributes,
	ProductsCreationAttributes,
} from './Products';
import { ProuctsOrder as _ProuctsOrder } from './ProuctsOrder';
import type {
	ProuctsOrderAttributes,
	ProuctsOrderCreationAttributes,
} from './ProuctsOrder';
import { Roles as _Roles } from './Roles';
import type { RolesAttributes, RolesCreationAttributes } from './Roles';
import { RolesUser as _RolesUser } from './RolesUser';
import type {
	RolesUserAttributes,
	RolesUserCreationAttributes,
} from './RolesUser';
import { ScheduleSubsidiary as _ScheduleSubsidiary } from './ScheduleSubsidiary';
import type {
	ScheduleSubsidiaryAttributes,
	ScheduleSubsidiaryCreationAttributes,
} from './ScheduleSubsidiary';
import { Services as _Services } from './Services';
import type {
	ServicesAttributes,
	ServicesCreationAttributes,
} from './Services';
import { States as _States } from './States';
import type { StatesAttributes, StatesCreationAttributes } from './States';
import { StoryDelivery as _StoryDelivery } from './StoryDelivery';
import type {
	StoryDeliveryAttributes,
	StoryDeliveryCreationAttributes,
} from './StoryDelivery';
import { Subsidiary as _Subsidiary } from './Subsidiary';
import type {
	SubsidiaryAttributes,
	SubsidiaryCreationAttributes,
} from './Subsidiary';
import { TypeMarket as _TypeMarket } from './TypeMarket';
import type {
	TypeMarketAttributes,
	TypeMarketCreationAttributes,
} from './TypeMarket';
import { TypePlans as _TypePlans } from './TypePlans';
import type {
	TypePlansAttributes,
	TypePlansCreationAttributes,
} from './TypePlans';
import { TypeService as _TypeService } from './TypeService';
import type {
	TypeServiceAttributes,
	TypeServiceCreationAttributes,
} from './TypeService';
import { TypesRestaurants as _TypesRestaurants } from './TypesRestaurants';
import type {
	TypesRestaurantsAttributes,
	TypesRestaurantsCreationAttributes,
} from './TypesRestaurants';
import { UserScore as _UserScore } from './UserScore';
import type {
	UserScoreAttributes,
	UserScoreCreationAttributes,
} from './UserScore';
import { Users as _Users } from './Users';
import type { UsersAttributes, UsersCreationAttributes } from './Users';
import { Vehicles as _Vehicles } from './Vehicles';
import type {
	VehiclesAttributes,
	VehiclesCreationAttributes,
} from './Vehicles';

export {
	_Additionals as Additionals,
	_Campaigns as Campaigns,
	_CampaignsProducts as CampaignsProducts,
	_CampaignsSubsidiary as CampaignsSubsidiary,
	_Category as Category,
	_City as City,
	_CollectTaxesType as CollectTaxesType,
	_Concept as Concept,
	_Country as Country,
	_DeliveryService as DeliveryService,
	_Favor as Favor,
	_FavorConfiguration as FavorConfiguration,
	_FavorUbication as FavorUbication,
	_ImagesCampaign as ImagesCampaign,
	_Insurances as Insurances,
	_Market as Market,
	_MarketCategory as MarketCategory,
	_MarketCategoryRelation as MarketCategoryRelation,
	_MarketRanking as MarketRanking,
	_MarketScore as MarketScore,
	_Order as Order,
	_Parameters as Parameters,
	_PaymentType as PaymentType,
	_Payments as Payments,
	_PaymetMarket as PaymetMarket,
	_Permissions as Permissions,
	_PhoneRequest as PhoneRequest,
	_Plans as Plans,
	_ProducCategory as ProducCategory,
	_ProductAditionals as ProductAditionals,
	_Products as Products,
	_ProuctsOrder as ProuctsOrder,
	_Roles as Roles,
	_RolesUser as RolesUser,
	_ScheduleSubsidiary as ScheduleSubsidiary,
	_Services as Services,
	_States as States,
	_StoryDelivery as StoryDelivery,
	_Subsidiary as Subsidiary,
	_TypeMarket as TypeMarket,
	_TypePlans as TypePlans,
	_TypeService as TypeService,
	_TypesRestaurants as TypesRestaurants,
	_UserScore as UserScore,
	_Users as Users,
	_Vehicles as Vehicles,
};

export type {
	AdditionalsAttributes,
	AdditionalsCreationAttributes,
	CampaignsAttributes,
	CampaignsCreationAttributes,
	CampaignsProductsAttributes,
	CampaignsProductsCreationAttributes,
	CampaignsSubsidiaryAttributes,
	CampaignsSubsidiaryCreationAttributes,
	CategoryAttributes,
	CategoryCreationAttributes,
	CityAttributes,
	CityCreationAttributes,
	CollectTaxesTypeAttributes,
	CollectTaxesTypeCreationAttributes,
	ConceptAttributes,
	ConceptCreationAttributes,
	CountryAttributes,
	CountryCreationAttributes,
	DeliveryServiceAttributes,
	DeliveryServiceCreationAttributes,
	FavorAttributes,
	FavorCreationAttributes,
	FavorConfigurationAttributes,
	FavorConfigurationCreationAttributes,
	FavorUbicationAttributes,
	FavorUbicationCreationAttributes,
	ImagesCampaignAttributes,
	ImagesCampaignCreationAttributes,
	InsurancesAttributes,
	InsurancesCreationAttributes,
	MarketAttributes,
	MarketCreationAttributes,
	MarketCategoryAttributes,
	MarketCategoryCreationAttributes,
	MarketCategoryRelationAttributes,
	MarketCategoryRelationCreationAttributes,
	MarketRankingAttributes,
	MarketRankingCreationAttributes,
	MarketScoreAttributes,
	MarketScoreCreationAttributes,
	OrderAttributes,
	OrderCreationAttributes,
	ParametersAttributes,
	ParametersCreationAttributes,
	PaymentTypeAttributes,
	PaymentTypeCreationAttributes,
	PaymentsAttributes,
	PaymentsCreationAttributes,
	PaymetMarketAttributes,
	PaymetMarketCreationAttributes,
	PermissionsAttributes,
	PermissionsCreationAttributes,
	PhoneRequestAttributes,
	PhoneRequestCreationAttributes,
	PlansAttributes,
	PlansCreationAttributes,
	ProducCategoryAttributes,
	ProducCategoryCreationAttributes,
	ProductAditionalsAttributes,
	ProductAditionalsCreationAttributes,
	ProductsAttributes,
	ProductsCreationAttributes,
	ProuctsOrderAttributes,
	ProuctsOrderCreationAttributes,
	RolesAttributes,
	RolesCreationAttributes,
	RolesUserAttributes,
	RolesUserCreationAttributes,
	ScheduleSubsidiaryAttributes,
	ScheduleSubsidiaryCreationAttributes,
	ServicesAttributes,
	ServicesCreationAttributes,
	StatesAttributes,
	StatesCreationAttributes,
	StoryDeliveryAttributes,
	StoryDeliveryCreationAttributes,
	SubsidiaryAttributes,
	SubsidiaryCreationAttributes,
	TypeMarketAttributes,
	TypeMarketCreationAttributes,
	TypePlansAttributes,
	TypePlansCreationAttributes,
	TypeServiceAttributes,
	TypeServiceCreationAttributes,
	TypesRestaurantsAttributes,
	TypesRestaurantsCreationAttributes,
	UserScoreAttributes,
	UserScoreCreationAttributes,
	UsersAttributes,
	UsersCreationAttributes,
	VehiclesAttributes,
	VehiclesCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
	const Additionals = _Additionals.initModel(sequelize);
	const Campaigns = _Campaigns.initModel(sequelize);
	const CampaignsProducts = _CampaignsProducts.initModel(sequelize);
	const CampaignsSubsidiary = _CampaignsSubsidiary.initModel(sequelize);
	const Category = _Category.initModel(sequelize);
	const City = _City.initModel(sequelize);
	const CollectTaxesType = _CollectTaxesType.initModel(sequelize);
	const Concept = _Concept.initModel(sequelize);
	const Country = _Country.initModel(sequelize);
	const DeliveryService = _DeliveryService.initModel(sequelize);
	const Favor = _Favor.initModel(sequelize);
	const FavorConfiguration = _FavorConfiguration.initModel(sequelize);
	const FavorUbication = _FavorUbication.initModel(sequelize);
	const ImagesCampaign = _ImagesCampaign.initModel(sequelize);
	const Insurances = _Insurances.initModel(sequelize);
	const Market = _Market.initModel(sequelize);
	const MarketCategory = _MarketCategory.initModel(sequelize);
	const MarketCategoryRelation = _MarketCategoryRelation.initModel(sequelize);
	const MarketRanking = _MarketRanking.initModel(sequelize);
	const MarketScore = _MarketScore.initModel(sequelize);
	const Order = _Order.initModel(sequelize);
	const Parameters = _Parameters.initModel(sequelize);
	const PaymentType = _PaymentType.initModel(sequelize);
	const Payments = _Payments.initModel(sequelize);
	const PaymetMarket = _PaymetMarket.initModel(sequelize);
	const Permissions = _Permissions.initModel(sequelize);
	const PhoneRequest = _PhoneRequest.initModel(sequelize);
	const Plans = _Plans.initModel(sequelize);
	const ProducCategory = _ProducCategory.initModel(sequelize);
	const ProductAditionals = _ProductAditionals.initModel(sequelize);
	const Products = _Products.initModel(sequelize);
	const ProuctsOrder = _ProuctsOrder.initModel(sequelize);
	const Roles = _Roles.initModel(sequelize);
	const RolesUser = _RolesUser.initModel(sequelize);
	const ScheduleSubsidiary = _ScheduleSubsidiary.initModel(sequelize);
	const Services = _Services.initModel(sequelize);
	const States = _States.initModel(sequelize);
	const StoryDelivery = _StoryDelivery.initModel(sequelize);
	const Subsidiary = _Subsidiary.initModel(sequelize);
	const TypeMarket = _TypeMarket.initModel(sequelize);
	const TypePlans = _TypePlans.initModel(sequelize);
	const TypeService = _TypeService.initModel(sequelize);
	const TypesRestaurants = _TypesRestaurants.initModel(sequelize);
	const UserScore = _UserScore.initModel(sequelize);
	const Users = _Users.initModel(sequelize);
	const Vehicles = _Vehicles.initModel(sequelize);

	ProductAditionals.belongsTo(Additionals, {
		as: 'IdAdditional_Additional',
		foreignKey: 'IdAdditional',
	});
	Additionals.hasMany(ProductAditionals, {
		as: 'ProductAditionals',
		foreignKey: 'IdAdditional',
	});
	CampaignsProducts.belongsTo(Campaigns, {
		as: 'IdCampaign_Campaign',
		foreignKey: 'IdCampaign',
	});
	Campaigns.hasMany(CampaignsProducts, {
		as: 'CampaignsProducts',
		foreignKey: 'IdCampaign',
	});
	CampaignsSubsidiary.belongsTo(Campaigns, {
		as: 'IdCampaignPromotion_Campaign',
		foreignKey: 'IdCampaignPromotion',
	});
	Campaigns.hasMany(CampaignsSubsidiary, {
		as: 'CampaignsSubsidiaries',
		foreignKey: 'IdCampaignPromotion',
	});
	ImagesCampaign.belongsTo(Campaigns, {
		as: 'IdCampaign_Campaign',
		foreignKey: 'IdCampaign',
	});
	Campaigns.hasMany(ImagesCampaign, {
		as: 'ImagesCampaigns',
		foreignKey: 'IdCampaign',
	});
	Category.belongsTo(Category, { as: 'Parent_Category', foreignKey: 'Parent' });
	Category.hasMany(Category, { as: 'Categories', foreignKey: 'Parent' });
	ProducCategory.belongsTo(Category, {
		as: 'IdCategory_Category',
		foreignKey: 'IdCategory',
	});
	Category.hasMany(ProducCategory, {
		as: 'ProducCategories',
		foreignKey: 'IdCategory',
	});
	MarketRanking.belongsTo(City, { as: 'IdCity_City', foreignKey: 'IdCity' });
	City.hasMany(MarketRanking, { as: 'MarketRankings', foreignKey: 'IdCity' });
	Subsidiary.belongsTo(City, { as: 'IdCity_City', foreignKey: 'IdCity' });
	City.hasMany(Subsidiary, { as: 'Subsidiaries', foreignKey: 'IdCity' });
	Users.belongsTo(City, { as: 'IdCity_City', foreignKey: 'IdCity' });
	City.hasMany(Users, { as: 'Users', foreignKey: 'IdCity' });
	Market.belongsTo(CollectTaxesType, {
		as: 'IdCollectTaxesType_CollectTaxesType',
		foreignKey: 'IdCollectTaxesType',
	});
	CollectTaxesType.hasMany(Market, {
		as: 'Markets',
		foreignKey: 'IdCollectTaxesType',
	});
	Payments.belongsTo(Concept, {
		as: 'IdConcept_Concept',
		foreignKey: 'IdConcept',
	});
	Concept.hasMany(Payments, { as: 'Payments', foreignKey: 'IdConcept' });
	States.belongsTo(Country, {
		as: 'IdCountry_Country',
		foreignKey: 'IdCountry',
	});
	Country.hasMany(States, { as: 'States', foreignKey: 'IdCountry' });
	FavorUbication.belongsTo(Favor, {
		as: 'IdFavor_Favor',
		foreignKey: 'IdFavor',
	});
	Favor.hasMany(FavorUbication, {
		as: 'FavorUbications',
		foreignKey: 'IdFavor',
	});
	MarketCategoryRelation.belongsTo(Market, {
		as: 'IdMarket_Market',
		foreignKey: 'IdMarket',
	});
	Market.hasMany(MarketCategoryRelation, {
		as: 'MarketCategoryRelations',
		foreignKey: 'IdMarket',
	});
	MarketRanking.belongsTo(Market, {
		as: 'IdMarket_Market',
		foreignKey: 'IdMarket',
	});
	Market.hasMany(MarketRanking, {
		as: 'MarketRankings',
		foreignKey: 'IdMarket',
	});
	MarketScore.belongsTo(Market, {
		as: 'IdMarket_Market',
		foreignKey: 'IdMarket',
	});
	Market.hasMany(MarketScore, { as: 'MarketScores', foreignKey: 'IdMarket' });
	PaymetMarket.belongsTo(Market, { as: 'Market', foreignKey: 'Market_Id' });
	Market.hasMany(PaymetMarket, {
		as: 'PaymetMarkets',
		foreignKey: 'Market_Id',
	});
	Products.belongsTo(Market, { as: 'IdMarket_Market', foreignKey: 'IdMarket' });
	Market.hasMany(Products, { as: 'Products', foreignKey: 'IdMarket' });
	Subsidiary.belongsTo(Market, {
		as: 'IdMarket_Market',
		foreignKey: 'IdMarket',
	});
	Market.hasMany(Subsidiary, { as: 'Subsidiaries', foreignKey: 'IdMarket' });
	Users.belongsTo(Market, { as: 'IdMarket_Market', foreignKey: 'IdMarket' });
	Market.hasMany(Users, { as: 'Users', foreignKey: 'IdMarket' });
	MarketCategory.belongsTo(MarketCategory, {
		as: 'Parent_MarketCategory',
		foreignKey: 'Parent',
	});
	MarketCategory.hasMany(MarketCategory, {
		as: 'MarketCategories',
		foreignKey: 'Parent',
	});
	MarketCategoryRelation.belongsTo(MarketCategory, {
		as: 'IdMarketCategory_MarketCategory',
		foreignKey: 'IdMarketCategory',
	});
	MarketCategory.hasMany(MarketCategoryRelation, {
		as: 'MarketCategoryRelations',
		foreignKey: 'IdMarketCategory',
	});
	ProuctsOrder.belongsTo(Order, { as: 'IdOrder_Order', foreignKey: 'IdOrder' });
	Order.hasMany(ProuctsOrder, { as: 'ProuctsOrders', foreignKey: 'IdOrder' });
	PaymetMarket.belongsTo(PaymentType, {
		as: 'PaymentType',
		foreignKey: 'PaymentType_Id',
	});
	PaymentType.hasMany(PaymetMarket, {
		as: 'PaymetMarkets',
		foreignKey: 'PaymentType_Id',
	});
	Insurances.belongsTo(Plans, { as: 'Plan', foreignKey: 'Plans_Id' });
	Plans.hasMany(Insurances, { as: 'Insurances', foreignKey: 'Plans_Id' });
	CampaignsProducts.belongsTo(Products, {
		as: 'IdProduct_Product',
		foreignKey: 'IdProduct',
	});
	Products.hasMany(CampaignsProducts, {
		as: 'CampaignsProducts',
		foreignKey: 'IdProduct',
	});
	ProducCategory.belongsTo(Products, {
		as: 'IdProduct_Product',
		foreignKey: 'IdProduct',
	});
	Products.hasMany(ProducCategory, {
		as: 'ProducCategories',
		foreignKey: 'IdProduct',
	});
	ProductAditionals.belongsTo(Products, {
		as: 'IdProduct_Product',
		foreignKey: 'IdProduct',
	});
	Products.hasMany(ProductAditionals, {
		as: 'ProductAditionals',
		foreignKey: 'IdProduct',
	});
	ProuctsOrder.belongsTo(Products, {
		as: 'IdProducts_Product',
		foreignKey: 'IdProducts',
	});
	Products.hasMany(ProuctsOrder, {
		as: 'ProuctsOrders',
		foreignKey: 'IdProducts',
	});
	Permissions.belongsTo(Roles, { as: 'IdRoles_Role', foreignKey: 'IdRoles' });
	Roles.hasMany(Permissions, { as: 'Permissions', foreignKey: 'IdRoles' });
	RolesUser.belongsTo(Roles, { as: 'IdRoles_Role', foreignKey: 'IdRoles' });
	Roles.hasMany(RolesUser, { as: 'RolesUsers', foreignKey: 'IdRoles' });
	DeliveryService.belongsTo(Services, {
		as: 'Service',
		foreignKey: 'Services_Id',
	});
	Services.hasMany(DeliveryService, {
		as: 'DeliveryServices',
		foreignKey: 'Services_Id',
	});
	Favor.belongsTo(Services, { as: 'Service', foreignKey: 'Services_Id' });
	Services.hasMany(Favor, { as: 'Favors', foreignKey: 'Services_Id' });
	Insurances.belongsTo(Services, { as: 'Service', foreignKey: 'Services_Id' });
	Services.hasMany(Insurances, { as: 'Insurances', foreignKey: 'Services_Id' });
	PhoneRequest.belongsTo(Services, {
		as: 'IdServices_Service',
		foreignKey: 'IdServices',
	});
	Services.hasMany(PhoneRequest, {
		as: 'PhoneRequests',
		foreignKey: 'IdServices',
	});
	ProuctsOrder.belongsTo(Services, {
		as: 'IdServices_Service',
		foreignKey: 'IdServices',
	});
	Services.hasMany(ProuctsOrder, {
		as: 'ProuctsOrders',
		foreignKey: 'IdServices',
	});
	City.belongsTo(States, { as: 'IdState_State', foreignKey: 'IdState' });
	States.hasMany(City, { as: 'Cities', foreignKey: 'IdState' });
	CampaignsSubsidiary.belongsTo(Subsidiary, {
		as: 'IdSubsidiary_Subsidiary',
		foreignKey: 'IdSubsidiary',
	});
	Subsidiary.hasMany(CampaignsSubsidiary, {
		as: 'CampaignsSubsidiaries',
		foreignKey: 'IdSubsidiary',
	});
	Order.belongsTo(Subsidiary, {
		as: 'IdSubsidiary_Subsidiary',
		foreignKey: 'IdSubsidiary',
	});
	Subsidiary.hasMany(Order, { as: 'Orders', foreignKey: 'IdSubsidiary' });
	ScheduleSubsidiary.belongsTo(Subsidiary, {
		as: 'Subsidiary',
		foreignKey: 'SubsidiaryId',
	});
	Subsidiary.hasMany(ScheduleSubsidiary, {
		as: 'ScheduleSubsidiaries',
		foreignKey: 'SubsidiaryId',
	});
	Market.belongsTo(TypeMarket, {
		as: 'IdTypeMarket_TypeMarket',
		foreignKey: 'IdTypeMarket',
	});
	TypeMarket.hasMany(Market, { as: 'Markets', foreignKey: 'IdTypeMarket' });
	Plans.belongsTo(TypePlans, {
		as: 'IdTypePlan_TypePlan',
		foreignKey: 'IdTypePlan',
	});
	TypePlans.hasMany(Plans, { as: 'Plans', foreignKey: 'IdTypePlan' });
	Services.belongsTo(TypeService, {
		as: 'IdTypeService_TypeService',
		foreignKey: 'IdTypeService',
	});
	TypeService.hasMany(Services, {
		as: 'Services',
		foreignKey: 'IdTypeService',
	});
	MarketScore.belongsTo(Users, { as: 'IdUser_User', foreignKey: 'IdUser' });
	Users.hasMany(MarketScore, { as: 'MarketScores', foreignKey: 'IdUser' });
	Order.belongsTo(Users, { as: 'IdUsers_User', foreignKey: 'IdUsers' });
	Users.hasMany(Order, { as: 'Orders', foreignKey: 'IdUsers' });
	RolesUser.belongsTo(Users, { as: 'IdUsers_User', foreignKey: 'IdUsers' });
	Users.hasMany(RolesUser, { as: 'RolesUsers', foreignKey: 'IdUsers' });
	Services.belongsTo(Users, { as: 'IdUser_User', foreignKey: 'IdUser' });
	Users.hasMany(Services, { as: 'Services', foreignKey: 'IdUser' });
	StoryDelivery.belongsTo(Users, { as: 'User', foreignKey: 'Users_Id' });
	Users.hasMany(StoryDelivery, {
		as: 'StoryDeliveries',
		foreignKey: 'Users_Id',
	});
	UserScore.belongsTo(Users, { as: 'IdUser_User', foreignKey: 'IdUser' });
	Users.hasMany(UserScore, { as: 'UserScores', foreignKey: 'IdUser' });
	UserScore.belongsTo(Users, {
		as: 'IdUserDomiciliary_User',
		foreignKey: 'IdUserDomiciliary',
	});
	Users.hasMany(UserScore, {
		as: 'IdUserDomiciliary_UserScores',
		foreignKey: 'IdUserDomiciliary',
	});
	Vehicles.belongsTo(Users, { as: 'IdUser_User', foreignKey: 'IdUser' });
	Users.hasMany(Vehicles, { as: 'Vehicles', foreignKey: 'IdUser' });

	return {
		Additionals: Additionals,
		Campaigns: Campaigns,
		CampaignsProducts: CampaignsProducts,
		CampaignsSubsidiary: CampaignsSubsidiary,
		Category: Category,
		City: City,
		CollectTaxesType: CollectTaxesType,
		Concept: Concept,
		Country: Country,
		DeliveryService: DeliveryService,
		Favor: Favor,
		FavorConfiguration: FavorConfiguration,
		FavorUbication: FavorUbication,
		ImagesCampaign: ImagesCampaign,
		Insurances: Insurances,
		Market: Market,
		MarketCategory: MarketCategory,
		MarketCategoryRelation: MarketCategoryRelation,
		MarketRanking: MarketRanking,
		MarketScore: MarketScore,
		Order: Order,
		Parameters: Parameters,
		PaymentType: PaymentType,
		Payments: Payments,
		PaymetMarket: PaymetMarket,
		Permissions: Permissions,
		PhoneRequest: PhoneRequest,
		Plans: Plans,
		ProducCategory: ProducCategory,
		ProductAditionals: ProductAditionals,
		Products: Products,
		ProuctsOrder: ProuctsOrder,
		Roles: Roles,
		RolesUser: RolesUser,
		ScheduleSubsidiary: ScheduleSubsidiary,
		Services: Services,
		States: States,
		StoryDelivery: StoryDelivery,
		Subsidiary: Subsidiary,
		TypeMarket: TypeMarket,
		TypePlans: TypePlans,
		TypeService: TypeService,
		TypesRestaurants: TypesRestaurants,
		UserScore: UserScore,
		Users: Users,
		Vehicles: Vehicles,
	};
}
