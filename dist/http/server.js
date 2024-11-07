"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
const PORT = process.env.PORT;
app_1.app.listen(PORT, () => {
    console.log(`\n\n SERVER IS RUNNING ON PORT ${PORT}\n\n`);
});
app_1.app.on("error", (error) => {
    console.log("\n\n   FAILURE AN UNEXPECTED ERROR OCCURRED  \n\n");
    console.log("Erro: ", error);
});
//# sourceMappingURL=server.js.map