module.exports = (sequelize, DataTypes) => {
  const Dev = sequelize.define('Dev', {
    name: {
      type: DataTypes.STRING,
      required: true
    },
    user: {
      type: DataTypes.STRING,
      required: true
    },
    bio: DataTypes.STRING,   
    avatar: {
      type: DataTypes.STRING,
      required: true
    } 
  });
  return Dev;
};