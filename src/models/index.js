const Sequelize = require('sequelize');
const CatModel = require('./cats');

const setupDatabase = () => {
    const connection = new Sequelize("have_i_fed_cat_app", "root", "password", {
    host: "localhost",
    port: 3307,
    dialect: "mysql"
    })
    const Cat = CatModel(connection , Sequelize);
    
    connection.sync({ alter: true });
    return { Cat };
};

module.exports = setUpDatabase();
