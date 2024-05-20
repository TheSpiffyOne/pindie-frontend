'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
  const newGames = useGetDataByCategory("new");
  return (
    <main className="main-inner">
      {newGames ? <CardsListSection id="new" title="Новые" data={newGames} /> : <Preloader />}
    </main>
  );
}