'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class VerificationToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VerificationToken.init(
    {
      userId: DataTypes.INTEGER,
      token: DataTypes.STRING,
      expiresAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'VerificationToken',
    }
  )
  return VerificationToken
}
