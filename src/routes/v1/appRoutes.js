import { Router } from "express";
import { SongRoutes } from "../../controllers/songs/songs.routes.js";

export class AppRouter {

  static get routes() {
    const AppRouter = Router();

    AppRouter.use('/api/v1/song', SongRoutes.routes);

    return AppRouter;
  }

}