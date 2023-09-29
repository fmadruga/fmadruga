import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface ExperienceAttributes {
  id?: number;
  started_at: Date;
  finished_at?: Date;
  work_here?: boolean;
  position: string;
  company: string;
  description: string;
}

interface ExperienceCreationAttributes
  extends Optional<ExperienceAttributes, 'id' | 'finished_at'> {}

class Experience extends Model<
  ExperienceAttributes,
  ExperienceCreationAttributes
> {
  declare id: CreationOptional<number>;
  declare started_at: Date | string;
  declare finished_at: CreationOptional<Date | string>;
  declare position: string;
  declare company: string;
  declare description: string;

  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
  declare readonly deleted_at: CreationOptional<Date>;
}

Experience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    started_at: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    finished_at: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    work_here: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.finished_at ? false : true;
      },
    },
  },
  {
    tableName: 'experiences',
    modelName: 'Experience',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    sequelize,
  },
);

export default Experience;
