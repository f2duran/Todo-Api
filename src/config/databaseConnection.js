let mongoose = require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
     useNewUrlParser: true,
     useUnifiedTopology: true

})
     .then(() => {
          console.log("veri tabanina basari ile bagnaldi");
     })
     .catch((err) => {
          console.log("veri tabanina baglanliamadi" + err);
     })

//mongodb ye baglamak icin