import {describe, expect, jest, test} from "@jest/globals";
import {Server} from "../src/Server.js";
import express from "express";
import {envs} from "../src/config/plugins/envs.js";
import {AppRouter} from "../src/routes/v1/appRoutes.js";

jest.mock('../src/Server.js');

describe('should call server with arguments and start', () => {

  test('should work', async () => {
    await import('../src/app.js');

    expect(Server).toHaveBeenCalledTimes(1);
    expect(Server).toHaveBeenCalledWith({
      port: envs.PORT,
      routes: expect.any(Function),
      acceptedOrigins: [],
    });

    expect(Server.prototype.start).toHaveBeenCalledWith();

  });

});