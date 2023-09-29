import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface AbilityAttributes {
  id?: number;
  type: string;
  name: string;
  level?: string;
  time_of_experience?: number;
}

interface AbilityCreationAttributes
  extends Optional<AbilityAttributes, 'id' | 'level' | 'time_of_experience'> {}

class Ability extends Model<AbilityAttributes, AbilityCreationAttributes> {
  declare id: CreationOptional<number>;
  declare type: string;
  declare name: string;
  declare level: CreationOptional<string>;
  declare time_of_experience: CreationOptional<number>;

  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
  declare readonly deleted_at: CreationOptional<Date>;
}

Ability.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('LANGUAGE', 'TECNOLOGY'),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    time_of_experience: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  {
    tableName: 'abilities',
    modelName: 'Ability',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    sequelize,
  },
);

export default Ability;
