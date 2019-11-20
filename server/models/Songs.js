module.exports = (sequelize, dataTypes) => {
  return (Songs = sequelize.define("Songs", {
    SongName: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    Genre: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    Artist: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    AlbumCover: {
      type: dataTypes.STRING
    }
  }));
};
