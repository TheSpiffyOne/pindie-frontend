'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function TDS() {
    const tdsGames = useGetDataByCategory("TDS")
    return(
        <main className={"main-inner"}>
            {tdsGames ? <CardsListSection id="TDS" title="TDS" data={tdsGames}/> : <Preloader />}
        </main>
    )
}