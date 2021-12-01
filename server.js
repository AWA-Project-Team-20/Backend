const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors')

app.use(express.json());
app.use(cors());

const customerRouter = require("./routes/customer");
app.use("/customer", customerRouter);

const restaurantsRouter = require("./routes/restaurants");
app.use("/restaurants", restaurantsRouter);

const managerRouter = require("./routes/manager");
app.use("/manager/restaurant", managerRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});