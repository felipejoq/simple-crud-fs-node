import { handleError } from "../../config/errors/handler.error.js";
import { isUUID } from "../../config/plugins/uuid.plugin.js";
import { CreateSongDto, UpdateSongDto } from "../../domain/dtos/songs/index.js";

export class SongController {
  constructor(songService) {
    this.songService = songService;
  }

  getSongs = (req, res) => {
    this.songService.getSongs()
      .then(data => res.json(data))
      .catch(e => handleError(e, res));
  }

  getSongById = (req, res) => {
    const { songId } = req.params;

    if (!isUUID(songId))
      return res.status(400).json({ error: 'El id no es un UUID válido' });

    this.songService.getSongById({ songId })
      .then(data => res.json(data))
      .catch(e => handleError(e, res));
  }

  createSong = (req, res) => {

    const { title, artist, tone } = req.body;

    const [error, createSongDto] = CreateSongDto.create({ title, artist, tone });

    if (error) return res.status(400).json({ error });

    return this.songService.createSong(createSongDto)
      .then(data => res.json(data))
      .catch(e => handleError(e, res));
  }

  updateSongById = (req, res) => {

    const { songId } = req.params;
    const { title, artist, tone } = req.body;

    const [error, updateSongDto] = UpdateSongDto.create({ id: songId, title, artist, tone });

    if (error) return res.status(400).json({ error });

    return this.songService.updateSongById(updateSongDto)
      .then(data => res.json(data))
      .catch(e => handleError(e, res));
  }

  deleteSongById = (req, res) => {
    const { songId } = req.params;

    if (!isUUID(songId))
      return res.status(400).json({ error: 'El id no es un UUID válido' });

    this.songService.deleteSongById({ songId })
      .then(data => res.json(data))
      .catch(e => handleError(e, res));
  }

}