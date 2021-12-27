import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TypesRestaurantsAttributes {
  Id: number;
  Name?: string;
  Image?: string;
  IsDeleted?: boolean;
  IsActive?: boolean;
  CreateDate?: string;
}

export type TypesRestaurantsPk = "Id";
export type TypesRestaurantsId = TypesRestaurants[TypesRestaurantsPk];
export type TypesRestaurantsOptionalAttributes = "Id" | "Name" | "Image" | "IsDeleted" | "IsActive" | "CreateDate";
export type TypesRestaurantsCreationAttributes = Optional<TypesRestaurantsAttributes, TypesRestaurantsOptionalAttributes>;

export class TypesRestaurants extends Model<TypesRestaurantsAttributes, TypesRestaurantsCreationAttributes> implements TypesRestaurantsAttributes {
  Id!: number;
  Name?: string;
  Image?: string;
  IsDeleted?: boolean;
  IsActive?: boolean;
  CreateDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof TypesRestaurants {
    return TypesRestaurants.init({
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
    Image: {
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
    tableName: 'TypesRestaurants',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "TypesRestaurants_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
