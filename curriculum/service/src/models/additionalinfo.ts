import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface AdditionalInfoAttributes {
  id?: number;
  available_to_travel?: boolean;
  available_to_move?: boolean;
  drive_license?: boolean;
  drive_license_type?: string;
}

interface AdditionalInfoCreationAttributes
  extends Optional<
    AdditionalInfoAttributes,
    | 'id'
    | 'available_to_travel'
    | 'available_to_move'
    | 'drive_license'
    | 'drive_license_type'
  > {}

class AdditionalInfo extends Model<
  AdditionalInfoAttributes,
  AdditionalInfoCreationAttributes
> {
  declare id: CreationOptional<number>;
  declare available_to_travel: boolean | null;
  declare available_to_move: boolean | null;
  declare drive_license: boolean | null;
  declare drive_license_type: string | null;

  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
  declare readonly deleted_at: CreationOptional<Date>;
}

AdditionalInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    available_to_travel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    available_to_move: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    drive_license: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    drive_license_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'additional_info',
    modelName: 'AdditionalInfo',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    sequelize,
  },
);

export default AdditionalInfo;
