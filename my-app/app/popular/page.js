'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function Popular() {
    const popularGames = useGetDataByCategory("popular")
    return(
        <main className={"main-inner"}>
            {popularGames ? <CardsListSection id="popular" title="Популярные" data={popularGames}/> : <Preloader />}
        </main>
    )
}