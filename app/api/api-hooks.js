import { useState, useEffect } from 'react';
import { getNormalizedGameDataByCategory, isResponseOk } from './api-utils';
import { endpoints } from './config';

export const useGetDataByCategory = (category) => {
    const [games, setGames] = useState(null);

    useEffect(() => {
      const fetchGame = async () => {
        const games = await getNormalizedGameDataByCategory(endpoints.games, category);
        isResponseOk(games) && setGames(games);
      }
      
      fetchGame();
    }, []);
    
    return games;
  };