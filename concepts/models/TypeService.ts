import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Services, ServicesId } from './Services';

export interface TypeServiceAttributes {
  Id: number;
  Name?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
}

export type TypeServicePk = "Id";
export type TypeServiceId = TypeService[TypeServicePk];
export type TypeServiceOptionalAttributes = "Id" | "Name" | "IsActive" | "IsDeleted";
export type TypeServiceCreationAttributes = Optional<TypeServiceAttributes, TypeServiceOptionalAttributes>;

export class TypeService extends Model<TypeServiceAttributes, TypeServiceCreationAttributes> implements TypeServiceAttributes {
  Id!: number;
  Name?: string;
  IsActive?: boolean;
  IsDeleted?: boolean;

  // TypeService hasMany Services via IdTypeService
  Services!: Services[];
  getServices!: Sequelize.HasManyGetAssociationsMixin<Services>;
  setServices!: Sequelize.HasManySetAssociationsMixin<Services, ServicesId>;
  addService!: Sequelize.HasManyAddAssociationMixin<Services, ServicesId>;
  addServices!: Sequelize.HasManyAddAssociationsMixin<Services, ServicesId>;
  createService!: Sequelize.HasManyCreateAssociationMixin<Services>;
  removeService!: Sequelize.HasManyRemoveAssociationMixin<Services, ServicesId>;
  removeServices!: Sequelize.HasManyRemoveAssociationsMixin<Services, ServicesId>;
  hasService!: Sequelize.HasManyHasAssociationMixin<Services, ServicesId>;
  hasServices!: Sequelize.HasManyHasAssociationsMixin<Services, ServicesId>;
  countServices!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof TypeService {
    return TypeService.init({
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
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'TypeService',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "TypeService_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
