//import sequelize
const { Sequelize, DataTypes } = require("sequelize");

//create instance of the sequelize and set up the database connection
const sequelize = new Sequelize(
  "postgresql://postgres.yeljsssguauttyaochfm:catch me if you can@aws-1-ap-south-1.pooler.supabase.com:6543/postgres"
);

//calling authenticate method to test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "authentication successful !!!  database connection succesful !!!"
    );
  })
  .catch((err) => {
    console.log("error message:", +err);
  });

  //export the sequelize instance to use it in other parts of the application
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//importing database models
db.books = require('./models/book.model')(sequelize, DataTypes)
db.users = require('./models/user.model')(sequelize, DataTypes)

//migrate the models with database
sequelize.sync({alter:true}).then(() => {
  console.log("database and tables synced !!!")
})

module.exports = db;