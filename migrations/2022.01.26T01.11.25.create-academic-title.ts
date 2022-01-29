import {Migration} from '../umzug';
import Sequelize, {DataTypes} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('AcademicTitle', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    guid: {type: DataTypes.STRING, unique: true, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('AcademicTitle');
};