import app from "./app.js";
import  Logger from "./configs/logger.config.js";



const PORT= process.env.PORT || 8000;
console.log(process.env.NODE_ENV);
app.listen(PORT, () => {
    Logger.info(`server is listening at ${PORT}....`);
});

