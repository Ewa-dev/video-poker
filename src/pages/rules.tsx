import "./pages/rules.css"

export default function Regler(){
    return (
        <main className="Container">
            <h1>Regler</h1>
            <p>Kortverdier
                Kortene er arrangert fra høyest til lavest i følgende rekkefølge:
                Ess-Konge-Dronning-Knekt-10-9-8-7-6-5-4-3-2-Ess.
                Merk at ess er oppført to ganger, så den kan betraktes som det høyeste eller laveste kortet. 
                Nedenfor er en liste over alle mulige vinnende kombinasjoner i rekkefølge fra høyest til lavest.
            </p>

            <h2>Utbetalinger</h2>
            <p>
                Royal Flush utbetaling = 2000 poeng
                Straight Flush med ess på topp
                Straight Flush Utbetaling = 250 poeng
                En straight med alle kort i samme farge. Eksempel: 3 ruter, 4 ruter, 5 ruter, 6 hjerter, 7 hjerter
                Fire like Utbetaling = 125 poeng
                Fire matchende kort av samme rang. (Ved målrettet menes 4 knekter eller konger, ikke bare 4 bildekort). Eksempel: Kn-Kn-Kn-Kn
                Fullt hus Utbetaling = 40 poeng
                Tre matchende kort av samme rang pluss to matchende kort av samme rang (tre like og et par). Eksempel: 4-4-4-8-8
                Flush Utbetaling = 25 poeng
                Alle kort i samme farge. Eksempel: 3-7-8-Dronning-Ess der alle er hjerter.
                Straight Utbetaling = 20 poeng
                Alle kort i rekkefølge. Eksempel: Ess-2-3-4-5
                Tre like Utbetaling = 15 poeng
                Tre matchende kort av samme rang. Eksempel: K-K-K
                To par Utbetaling = 10 poeng
                Tro matchende kort av samme rang pluss to ytterligere matchende kort av samme rang. Eksempel: Ess-Ess-5-5
                Par Utbetaling = 5 poeng
                To matchende kort av samme rang. Eksempel: Dame-Dame 

                (kilden: internettcasinoer.net)
                </p>
        </main>
    );
}