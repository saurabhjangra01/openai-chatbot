import app from "./app.js";
import { connectMongo } from "./db/connect.js";
// connection to database and express server
const PORT = process.env.PORT || 5050;
// connecting mongo
connectMongo()
    .then(() => {
    console.log("######## Mongo Connected");
    // connecting express
    app.listen(PORT, () => {
        console.log(`######## Express connected on PORT: ${PORT}`);
    });
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map