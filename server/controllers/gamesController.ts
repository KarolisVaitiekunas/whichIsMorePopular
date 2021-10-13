import { Request, Response } from "express";
import gamesModel from "../models/gamesModel";
import { IgamesDocument } from "../models/gamesModel";

export const getGames = async (req: Request, res: Response) => {
  try {
    let games: Array<IgamesDocument> = [];
    let firstTime: boolean = true;
    for (let index = 0; index < 4; index++) {
      //    let game: IgamesDocument = await gamesModel.find(); will error becasue who tf knows how to use ts
      var random = Math.floor(Math.random() * (await gamesModel.countDocuments()));
      let game: any = await gamesModel.findOne().skip(random);

      if (!firstTime) {
        let exists: boolean = false;
        for (let _game of games) {
          if (JSON.stringify(_game) === JSON.stringify(game)) {
            index = index - 1;
            exists = true;
            break;
          }
        }
        if (!exists) {
          games.push(game);
        }
      } else {
        firstTime = false;
        games.push(game);
      }
    }

    res.status(200).send({ success: true, data: games });
  } catch (error) {
    res.status(500).send({ success: false, data: [] });
  }
};
