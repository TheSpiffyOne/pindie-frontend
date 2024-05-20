'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function Pixel() {
    const pixelGames = useGetDataByCategory("pixel");
    return (
        <main className="main-inner">
            {pixelGames ? <CardsListSection id="pixel" title="Пиксельные" data={pixelGames} /> : <Preloader />}
        </main>
    );
}