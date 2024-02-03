import {Server} from "../src/Server.js";
import express from "express";
import {envs} from "../src/config/plugins/envs.js";
import {AppRouter} from "../src/routes/v1/appRoutes.js";

export const testServer = new Server({
  port: envs.PORT,
  routes: AppRouter.routes,
  acceptedOrigins: [],
});