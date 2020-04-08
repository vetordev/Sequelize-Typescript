"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Project extends sequelize_1.Model {
    static start(sequelize) {
        this.init({
            id_project: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name_project: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            id_agency: {
                type: sequelize_1.DataTypes.INTEGER,
                references: {
                    model: 'agency',
                    key: 'id_agency'
                },
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'project',
            freezeTableName: true
        });
    }
    static associate(models) {
        this.belongsTo(models.agency, { foreignKey: 'id_agency', as: 'Agency' });
    }
}
exports.default = Project;
