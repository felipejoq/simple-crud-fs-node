import { Router } from "express";
import { SongController } from "./songs.controller.js";
import { SongsService } from "../../services/songs.service.js";
import { DataService } from "../../services/data.service.js";

export class SongRoutes {

  static get routes() {

    const songRouter = Router();
    const songController = new SongController(new SongsService(new DataService()));

    songRouter.get('/', songController.getSongs);
    songRouter.post('/', songController.createSong);
    songRouter.get('/:songId', songController.getSongById);
    songRouter.put('/:songId', songController.updateSongById);
    songRouter.delete('/:songId', songController.deleteSongById);

    return songRouter;
  }

}