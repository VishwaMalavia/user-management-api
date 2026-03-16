const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const logger = require("./middleware/logger");

app.use(express.json());
app.use(logger);

app.use("/users", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});