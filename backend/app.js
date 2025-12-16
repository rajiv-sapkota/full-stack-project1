const express = require("express");
const cors=require('cors')
const bookRoute=require('./routes/bookRoute.js')
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
}));

//importing database connection
 require("./database/connection.js");


app.use('/api',bookRoute)



app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
