'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function Runners() {
    const runnerGames = useGetDataByCategory("runner")
    return(
        <main className={"main-inner"}>
            {runnerGames ? <CardsListSection id="runner" title="Ранеры" data={runnerGames}/>  : <Preloader />}
        </main>
    )
}