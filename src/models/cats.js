const { DataTypes } = require("sequelize/types")

module.exports = (sequelize , Datatypes) => {
   const schema =  {
       name: Datatypes.STRING,
       breed: Datatypes.STRING,
       markings: Datatypes.STRING,
       lastFed: DataTypes.DATE,
   }
   return sequelize.define('Cat', schema)
}