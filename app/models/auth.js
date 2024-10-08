'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Auth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Auth.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
        },
      })
    }
  }
  Auth.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Auth',
    }
  )
  return Auth
}
