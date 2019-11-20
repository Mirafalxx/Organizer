module.exports = (sequelize, dataTypes) => {
  return (BusinessList = sequelize.define("BusinessList", {
    List: {
      type: dataTypes.STRING(999)
    }
  }));
};
