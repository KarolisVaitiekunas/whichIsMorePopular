import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface ICardProps {
  //gamePicture: StaticImageData;
  gamePicture: string;
  reviews: string;
  gameName: string;
  gameReviewCount: string;
  handlePickGame: (reviews: string, gameName: string) => void;
}

export function Card(props: ICardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.4 },
      }}
      onClick={() => props.handlePickGame(props.reviews, props.gameName)}
      className="w-64 h-48 flex flex-col justify-center items-center rounded-t-lg m-3 border-2 border-steamBlueLight cursor-pointer"
    >
      <Image className="rounded-t-lg" src={props.gamePicture} alt="Game picture" height="600px" width="256px" quality={100} />
      <h2 className="justify-self-center text-white text-sm font-bold">{props.gameName}</h2>
      <p className="text-white">
        Total reviews: <span className="font-bold">{props.gameReviewCount}</span>
      </p>
    </motion.div>
  );
}
