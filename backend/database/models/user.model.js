const userModel = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      acceptNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
      acceptNull: false,
    },
    email: {
      type: DataTypes.STRING,
      acceptNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      acceptNull: false,
      unique: true,
    },
  });
  return user;
};

module.exports = userModel;
