import React, { useState } from "react";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Card } from "../components/Card";
import Layout from "../components/Layout";
import gamePicture from "../images/header.jpg";
import gamePicture2 from "../images/header2.jpg";
import { getGames } from "../dbFunctions";
import Modal from "../components/Modal";
import { Igame } from "../dbFunctions";

const IndexPage = (props) => {
  const [gameData, setGameData] = useState<Array<Igame>>(props.gameData);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);

  const [isVisible, setVisible] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handlePickGame = async (reviews: string, gameName: string) => {
    const isCorrect = gameData.every((game: Igame) => {
      if (game.name !== gameName) {
        if (game.reviews <= reviews) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

    if (isCorrect) {
      if (bestScore < currentScore + 1) {
        setBestScore(currentScore + 1);

        setIsCorrect(true);
        setVisible(true);

        setTimeout(() => {
          setVisible(false);
        }, 2000);
      }
      setCurrentScore(currentScore + 1);
    } else {
      setCurrentScore(0);

      setIsCorrect(false);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }

    let newGameData = await getGames("keris.ro.lt");
    setGameData(newGameData);
  };
  return (
    <React.Fragment>
      <Modal isCorrect={isCorrect} isVisible={isVisible} />
      <Layout title="temp">
        <div
          className={`h-pageHeight flex flex-col justify-around bg-gradient-to-r from-steamDark via-steamDarkLight to-steamBlueDark pointer-events-${
            isVisible ? "none" : "auto"
          }`}
        >
          <h1 className="ml-auto mr-auto text-center md:text-2xl 2xl:text-3xl text-white">
            Guess the game with the highest positive rating!
          </h1>
          <div className="flex justify-evenly content-between flex-wrap lg:w-full 2xl:w-3/5 h-auto ml-auto mr-auto overflow-y-auto">
            {gameData.map((game: Igame, index: number) => {
              return (
                <Card
                  key={index}
                  handlePickGame={handlePickGame}
                  reviews={game.reviews}
                  gamePicture={game.image}
                  gameName={game.name}
                  gameReviewCount={game.reviewCount}
                />
              );
            })}
          </div>
          <div className="ml-auto mr-auto">
            <h2 className="text-white text-xl">Current score: {currentScore}</h2>
            <h2 className="text-white text-xl">Best score: {bestScore}</h2>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let gameData: Array<Igame> = await getGames("localhost");
  if (gameData == undefined || gameData == null) {
    gameData = [];
  }
  return {
    props: { gameData },
  };
};

export default IndexPage;
