"use client";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "./api/api-hooks";

export default function Home() {

  const popularGames = useGetDataByCategory("popular");
  const newGames = useGetDataByCategory("new");

  return (
    <main className="main">
      <Banner />
      <CardsListSection type='slider' id="popular" title="Популярные" data={popularGames} />
      <CardsListSection type='slider' id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}