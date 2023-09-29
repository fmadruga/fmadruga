import { DataTypes, QueryInterface } from 'sequelize';

export const up = async (queryInterface: QueryInterface): Promise<void> => {
  await queryInterface.createTable('additional_info', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    availableToTravel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'available_to_travel',
    },
    availableToMove: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'available_to_move',
    },
    driveLicense: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'drive_license',
    },
    driveLicenseType: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'drive_license_type',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at',
    },
  });
};

export const down = async (queryInterface: QueryInterface): Promise<void> => {
  await queryInterface.dropTable('additional_info');
};
