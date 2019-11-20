const bcrypt = require("bcrypt");

module.exports = (sequelize, dataTypes) => {
  return (Users = sequelize.define(
    "Users",
    {
      email: {
        type: dataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: dataTypes.STRING(255),
        allowNull: false
      },
      created: {
        type: dataTypes.DATE,
        defaultValue: sequelize.NOW
      }
    },
    {
      timestamps: false
    }
  ));
};

// module.exports = (sequelize, dataTypes) => {
//   const Users = sequelize.define(
//     "Users",
//     {
//       email: {
//         type: dataTypes.STRING(255),
//         allowNull: false
//       },
//       password: {
//         type: dataTypes.STRING(255),
//         allowNull: false
//       },
//       created: {
//         type: dataTypes.DATE,
//         defaultValue: sequelize.NOW
//       }
//     },
//     {
//       timestamps: false
//     }
//   );
//   Users.beforeSave((user, options) => {
//     if (user.changed("password")) {
//       user.password = bcrypt.hashSync(
//         user.password,
//         bcrypt.genSaltSync(10),
//         null
//       );
//     }
//   });
//   Users.prototype.comparePassword = function(passw, cb) {
//     bcrypt.compare(passw, this.password, function(err, isMatch) {
//       if (err) {
//         return cb(err);
//       }
//       cb(null, isMatch);
//     });
//   };
//   URLSearchParams.associate = function(models) {
//     // associations can be defined here
//   };
//   return Users;
// };
