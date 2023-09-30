import { differenceInYears } from 'date-fns';
import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface PersonalInfoAttributes {
  id?: number;
  avatar: string;
  firstname: string;
  lastname: string;
  fullname?: string;
  address: string;
  phone_number: string;
  email: string;
  nationality: string;
  birthdate: Date;
  age?: number;
  gender: string;
}

interface PersonalInfoCreationAttributes
  extends Optional<PersonalInfoAttributes, 'id' | 'avatar'> {}

class PersonalInfo extends Model<
  PersonalInfoAttributes,
  PersonalInfoCreationAttributes
> {
  declare id: CreationOptional<number>;
  declare avatar: string | null;
  declare firstname: string;
  declare lastname: string;
  declare address: string;
  declare phone_number: string;
  declare email: string;
  declare nationality: string;
  declare birthdate: Date | string;
  declare gender: string;

  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
  declare readonly deleted_at: CreationOptional<Date>;
}

PersonalInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullname: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstname} ${this.lastname}`;
      },
    },
    age: {
      type: DataTypes.VIRTUAL,
      get() {
        return differenceInYears(new Date(), new Date(this.birthdate));
      },
    },
  },
  {
    tableName: 'personal_info',
    modelName: 'PersonalInfo',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    sequelize,
  },
);

export default PersonalInfo;
