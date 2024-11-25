import { app } from "./../src/framework/http/app";
import supertest from "supertest";

export const testServer = supertest(app);
