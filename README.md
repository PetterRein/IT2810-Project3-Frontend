# Frontend repo for Project 3 in IT2810

This is a project developed in React.js with Redux for the course IT2810.

The guide at https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8 was used for this setup

Graphqø queries with React Hooks guide https://medium.com/better-programming/use-graphql-query-hooks-with-react-d440c6dcb57d

## Getting started
- [Prerequisites](#prerequisites)
- [Setup](#setup)

### Prerequisites
- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/)

### Setup
- Install [Prerequisites](#prerequisites)
- Navigate to desired location and clone repo
- Enter `cd project-3-frontend` to enter repo folder
- Enter `npm install` to install required packages
- Enter `npm start` to run the application
- web should start at `localhost:3000`

### Timetracking
Timetracking will be done with [Toggl](https://https://toggl.com/) and/or [Wakatime](https://wakatime.com). 


### Dokumentasjon

I Prosjekt 3 har gruppen fått i oppgave å lage en søkbar katalog. Objektene gruppen har valgt er filmer, og vi har valgt å benytte GraphQL og MongoDB for å strukturere dataen. Noen av kravene til funksjonalitet var opp til oss; Vi har valgt å implementere kommentarfelt og vurdering av filmer for å dekke kravet om bruker-generert data.

Frontend er delt inn i de to essensielle visningene ListView og DetailView for å støtte kravet om en listebasert presentasjon med mulighet for å se mer detaljer om objektene. ListView er ansett som nettsidens indeks og inneholder en visning av alle filmer i databasen samt relatert funksjonalitet. DetailView inneholder en utvidet detaljrik visning av én film samt kommentarfeltet knyttet til den bestemte filmen. 

Vi mener dette er en hensiktsmessig måte å strukturere nettsiden på, ettersom filmer kan vises i en enklere modell i en liste (med poster og tittel) og deretter trykkes inn på for å finne svært mye informasjon. Vi har også valgt å benytte Routes for å separere filmer på bestemte sider med egen URL fremfor å benytte en ren spa popup / modal implementasjon ettersom muligheten for å linke direkte til filmer (for å dele med venner eller søke opp senere) er lettere dersom hver film har egen URL. Det er også hensiktsmessig å tildele en god del plass til hver film (som man ikke alltid får i en Modal-visning) både i forhold til mobiltilpassning, men også for å gi kommentarfeltet en hensiktsmessig plassering og utforming. 

For å støtte konseptet om en listevisning og detaljvisning har vi opprettet komponentene MovieList, MovieListElement, MovieDetail. Vi bruker Routes for å bytte mellom visningene.
- MovieList inneholder en liste med MovieListElement-komponenter som representerer én film hver.
- MovieDetail er en egen visning av en bestemt film man kan trykke på i listen for å se utvidet innhold. MovieDetail inneholder også CommentSection-komponentet som viser 
- SearchField-komponentet og relatert innhold som støtter kravet om søk / filtrering av innhold med en inputfield.
- SearchField benytter Redux actions til å rendere et søkefelt og deretter filtrere innholdet med en Reducer.
- VoteAverageFilter benytter Redux actions til å rendere radiobuttons og deretter filtrere innholdet med en Reducer.
- CommentSection med Comment og CommentAdd er laget for å vise kommentarer på filmer og kunne lage nye kommentarer, det var krav om at noe data skulle bli lagret

I frontend har vi importert CSS-rammeverket vi lagde fra forrige prosjekt. Dette var allerede grid-basert og mobilresponsivt, så vi har benyttet dette på nytt til å enkelt lage en visning med to kolonner som viser lister med filmer nedover på nettsiden. 

Redux ble valgt fordi Petter hadde hørt mye bra om dette og det virket totalt sett kanskje bra og bruke. Det finnes også mye bra dokumentasjon på Redux.

For å dekke kravet om Sortering er det satt opp mulighet for Field og Direction sortering som vil endre på listen etter hva bruker velger. Begge må velges for at det skal skje noe det det ikke gir mening uten en av feltene. Når noe har blir endret så skjer det en onChange() som vil hente inn den nye dataen.

For å dekke kravet om Filtering er det satt opp mulighet for å søk blant Title og Overview på filmene i databasen. Dette er gjort gjennom at MongoDB lager en index på feltene Title og Overview som det går å søke blant.

For å dekke kravet om at alt ikke skal vises med en gang så er det implementert pagination med offset. Der du spør databasen om antall filmer du vil ha og hvor langt ut i listen du er på. Når filmer blir lastet blir det også gjort et kall som spør hvor mange filmer det akkurat nå er mulig å hente med filter og søk. Ut fra dette blir tallet delt opp i sider du kan skifte mellom.

For å dekke kravet om avansert visning så er det funnet en komponent react-wordcloud som er en ordsky komponent som det er bare å pushe en haug med ord inn i. Så i App.js blir det gått over alle overviewene til filmene som er i viewet og blir presentert i siden wordcloud.

Av backend/api er det satt opp GraphQL som virker som er overtakeren til REST. GraphQL kjører på en expresserver, der dataen kommer fra MongoDB som database. GraphQL gir deg valget hvilken data du vil ha i queryet som er ganske smud.

For å dekke kravet om Redux så er det satt opp noen actions og reducers som lagrer movies som vises, sort valgene og søke valget du har gjort i en state som blir brukt for å lage quriene. I starten var det tenkt å bruke Apollo men dette går ikke helt sammen med Redux så det ble litt rart oppsett nå der noe bruker Redux og noe ikke. Men kravet er dekt.

Ellers er det bare brukt funksjonelle komponenter som er det som blir eneste etterhvert da Classbased er på vei ut.

Det satt opp både CI på frontend og backend som hjelper utviklingen. Du slipper å dekke på at koden skal bli bygget og oppsettet på serveren blir gjort for deg. Det er også mulighet for å kjøre tester automatisk som fanger feil som du evt ikke har sett selv. Serveren så er det satt inn i build-scriptet at babel skal kjøre sånn at vi kan skrive i nyeste JavaScript Syntax, også så vil det pågrunn av .env filene vår bli fikset urlene som vi bruker i appen når den blir deployet.

Også er det mulig å se gjennom commit-loggen for å se hva som har blitt gjort. Det har blitt brukt en type av GitFlow der hver feature,hotfix har fått seg en branch som når den er ferdig så blir den merget inn i master. Også er issues med boards brukt for at utviklerene skulle se hva de andre jobber på for å gjøre utvikligen lettere-

#### Testing
Av testing er det satt om noen tester med Jest/Enzyme som tester enkelt komponenter om de rendrer riktig med rett input. Det kan også ha vært implementert noen tester som har testet de forksjellige funksjonene som finnes, actions f.eks. Men ettersom vi også har Cypress som tester Frontend og Backend i lag der disse funksjonene blir kjørt så hvis det hadde vært noe feil med de så hadde det blitt oppdaget der. Cypress så er det satt opp noen tester som besøker siden (OBS du må være på Eduroam i Trondheim) og sjekker om at ting ser ut som de skal. Cypress tester også noen av fuksjonene som søk, filter og sorting og sjekker om ting blir sortert som det er planlagt. Det står ikke noe i kravene hvor mye tester vi skal ha bare at vi skal ha det så vi har implementert noen grunn tester for å vise fram konseptet.

Siden er også testet på PC i Chrome og Firefox, sjekker der at den render riktig og at ting fungerer som planlagt. På mobil så fungerere ting det ser bare litt rart ut i landscape mode.

Det er satt opp en CI som det er mulighet for å legge til at testene blir kjørt ved hver merge request, dette er slått av for frontend men det er satt opp på backend.

