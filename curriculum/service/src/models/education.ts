import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface EducationAttributes {
  id?: number;
  started_at: Date;
  finished_at?: Date;
  in_progress?: boolean;
  qualification: string;
  institution: string;
}

interface EducationCreationAttributes
  extends Optional<EducationAttributes, 'id' | 'finished_at'> {}

class Education extends Model<
  EducationAttributes,
  EducationCreationAttributes
> {
  declare id: CreationOptional<number>;
  declare started_at: Date | string;
  declare finished_at: CreationOptional<Date | string>;
  declare qualification: string;
  declare institution: string;

  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
  declare readonly deleted_at: CreationOptional<Date>;
}

Education.init(
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
    qualification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    in_progress: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.finished_at ? false : true;
      },
    },
  },
  {
    tableName: 'educations',
    modelName: 'Education',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    sequelize,
  },
);

export default Education;
