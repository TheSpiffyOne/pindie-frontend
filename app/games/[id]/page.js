'use client'

import Styles from "./Game.module.css"
import { useEffect, useState } from "react"
import { endpoints } from "../../api/config"
import { getJWT, getNormalizedGameDataById, isResponseOk } from "@/app/api/api-utils";
import { Preloader } from "../../components/Preloader/Preloader"
import { checkIfUserVoted, vote } from "@/app/api/api-utils";
import { useStore } from "@/app/store/app-store";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";

export default function GamePage(props) {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [game, setGame] = useState(null)
  const { openPopup, checkIsAuthorized, currentUser, isAuthorized } = useStore();
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const game = await getNormalizedGameDataById(
        endpoints.games,
        props.params.id
      );
      isResponseOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    checkIsAuthorized();
  }, []);

  useEffect(() => {
    if (currentUser && game) {
      setIsVoted(checkIfUserVoted(game, currentUser._id));
    } else {
      setIsVoted(false)
    }
  }, [currentUser, game]);

  const handleVote = async () => {
    if (isAuthorized && currentUser) {
      const jwt = getJWT();
      let usersIdArray = game.users.length
        ? game.users.map((user) => user.id)
        : [];
        console.log(currentUser)
      usersIdArray.push(currentUser._id);
      const response = await vote(
        `${endpoints.games}/${game.id}`,
        jwt,
        usersIdArray
      );
      if (isResponseOk(response)) {
        setIsVoted(true);
        setGame(() => {
          return {
            ...game,
            users: [...game.users, currentUser],
          };
        });
      }
    } else {
      openPopup();
    }
  };

  return (
    <main className="main">
      {game ? (
        <>
          <section className={Styles["game"]}>
            <iframe
              className={Styles["game__iframe"]}
              src={game.link}
            ></iframe>
          </section>
          <section className={Styles["about"]}>
            <h2 className={Styles["about__title"]}>{game.title}</h2>
            <div className={Styles["about__content"]}>
              <p className={Styles["about__description"]}>
                {game.description}
              </p>
              <div className={Styles["about__author"]}>
                <p>
                  Автор:{" "}
                  <span className={Styles["about__accent"]}>{game.developer}</span>
                </p>
              </div>
            </div>
            <div className={Styles["about__vote"]}>
              <p className={Styles["about__vote-amount"]}>
                За игру уже проголосовали:
                <span className={Styles["about__accent"]}>{game.users.length}</span>
              </p>
              <button
                disabled={isVoted}
                className={`button ${Styles["about__vote-button"]}`}
                onClick={handleVote}
              >
                {isVoted ? "Голос учтён" : "Голосовать"}
              </button>
            </div>
          </section></>
      ) : preloaderVisible ? (
        <Preloader />
      ) : (
        <GameNotFound/>
      )}
    </main>
  );
}