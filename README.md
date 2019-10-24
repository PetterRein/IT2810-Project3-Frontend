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
Timetracking will be done with [Toggle](https://https://toggl.com/) and/or [Wakatime](https://wakatime.com). 


### Dokumentasjon

I Prosjekt 3 har gruppen fått i oppgave å lage en søkbar katalog. Objektene gruppen har valgt er filmer, og vi har valgt å benytte GraphQL og MongoDB for å strukturere dataen. Noen av kravene til funksjonalitet var opp til oss; Vi har valgt å implementere kommentarfelt og vurdering av filmer for å dekke kravet om bruker-generert data.

Frontend er delt inn i de to essensielle visningene ListView og DetailView for å støtte kravet om en listebasert presentasjon med mulighet for å se mer detaljer om objektene. ListView er ansett som nettsidens indeks og inneholder en visning av alle filmer i databasen samt relatert funksjonalitet. DetailView inneholder en utvidet detaljrik visning av én film samt kommentarfeltet knyttet til den bestemte filmen. 

Vi mener dette er en hensiktsmessig måte å strukturere nettsiden på, ettersom filmer kan vises i en enklere modell i en liste (med poster og tittel) og deretter trykkes inn på for å finne svært mye informasjon. Vi har også valgt å benytte Routes for å separere filmer på bestemte sider med egen URL fremfor å benytte en ren spa popup / modal implementasjon ettersom muligheten for å linke direkte til filmer (for å dele med venner eller søke opp senere) er lettere dersom hver film har egen URL. Det er også hensiktsmessig å tildele en god del plass til hver film (som man ikke alltid får i en Modal-visning) både i forhold til mobiltilpassning, men også for å gi kommentarfeltet en hensiktsmessig plassering og utforming. 

For å støtte konseptet om en listevisning og detaljvisning har vi opprettet komponentene MovieList, MovieListElement, MovieDetail. Vi bruker Routes for å bytte mellom visningene.
- MovieList inneholder en liste med MovieListElement-komponenter som representerer én film hver.
- MovieDetail er en egen visning av en bestemt film man kan trykke på i listen for å se utvidet innhold. MovieDetail inneholder også CommentSection-komponentet som viser 
- SearchField-komponentet og relatert innhold som støtter kravet om søk / filtrering av innhold med en inputfield.
- SearchField benytter Redux actions til å rendere et søkefelt og deretter filtrere innholdet med en Reducer.

I frontend har vi importert CSS-rammeverket vi lagde fra forrige prosjekt. Dette var allerede grid-basert og mobilresponsivt, så vi har benyttet dette på nytt til å enkelt lage en visning med to kolonner som viser lister med filmer nedover på nettsiden. 

