const { sequelize } = require("./Util/database");
const { DataTypes } = require(`sequelize`);

module.exports = {
  User: sequelize.define(`user`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: DataTypes.STRING,
    passwordhash: DataTypes.STRING,
  }),
  Recipe: sequelize.define(`recipe`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: DataTypes.STRING,
    instructions: DataTypes.TEXT,
    ingredients: DataTypes.JSON,
    ingredientsAmount: DataTypes.JSON,
    time: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }),
  Favs: sequelize.define(`favorites`, {
    userFavId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    favorite: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER,
  }),
};
