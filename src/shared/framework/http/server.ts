import "reflect-metadata";
import { app } from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`\n\n SERVER IS RUNNING ON PORT ${PORT}\n\n`);
});

app.on("error", (error) => {
  console.log("\n\n   FAILURE AN UNEXPECTED ERROR OCCURRED  \n\n");
  console.log("Erro: ", error);
});
