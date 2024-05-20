'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function Shooters() {
    const shooterGames = useGetDataByCategory("shooter")
    return(
        <main className={"main-inner"}>
           {shooterGames ? <CardsListSection id="shooter" title="Шутеры" data={shooterGames}/> : <Preloader />}
        </main>
    )
}