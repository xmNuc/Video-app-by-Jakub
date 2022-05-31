```
Video app by Jakub
author: Jakub (xmnuc@o2.pl)
date of build: 05.2022.

EN:
Video app

Application description
Video app by Jakub uses:
● React stack at the time of build - the newest react version "^ 18.1.0"
● reactstrap "^ 9.0.2"
● Youtube API
● es6

The application stores the user's favorite videos as part of the page.
The user can add a movie to the website through the input available on the home page and pasting:
● the movie's url, i.e .:
○ https://www.youtube.com/watch?v=4JOAqRS_lms
○ https://youtu.be/vJ3a_AuEW18
○ https://youtu.be/4JOAqRS_lms?t=110
● movie ID, for example:
○ vJ3a_AuEW18

Videos are listed with data such as
● number of plays
● number of likes
● name of the movie
● movie thumbnail
● publication date
and actions such as:
● watch (also after clicking on the thumbnail, the movie then opens in the modal)
● delete
● add to favorites - the star button adds the video to your favorites

The list of films has:
● pagination
● possibility to choose the type of display (tiles or a list)
● ability to clear all videos
● possibility of uploading a demo of films (loading the database of films with IDs hardcoded in the application)
● "favorites only" filter - showing only your favorite movies
● sort by publish date: old/new

Movies are also available after closing and reopening the browser using localstorage.

Youtube Api was used:
● youtube API - https://developers.google.com/youtube/v3/getting-started

For security reasons, the keys / secrets from the above API were not made available in the repository.
A sample .env file is saved in the main directory of the program.

All dependence used in the program.
From the package.json file

PL:
Video app

Opis aplikacji
Video app by Jakub używa:
● stacku reactowego w momencie budowy - najnowszej wersji react "^18.1.0"
● reactstrap "^9.0.2"
● Youtube API
● es6

Aplikacja przechowuje ulubione filmy użytkownika w ramach strony.
Użytkownik może dodać film na stronę poprzez input dostępny na stronie głównej i
wklejenie:
● paska adresu filmu, czyli np.:
○ https://www.youtube.com/watch?v=4JOAqRS_lms
○ https://youtu.be/vJ3a_AuEW18
○ https://youtu.be/4JOAqRS_lms?t=110
● identyfikatora filmu, czyli np.:
○ vJ3a_AuEW18

Filmy są wylistowane z danymi takimi jak
● liczba odtworzeń
● liczba polubień
● nazwa filmu
● miniaturka filmu
● data publikacji
i akcjami takimi jak:
● obejrzyj (również po kliknięciu w miniaturkę, film wtedy otwiera się w modalu)
● usuń
● dodaj do ulubionych - przycisk gwiazdki dodaje video do ulubionych

Lista filmów posiada:
● paginację
● możliwość wyboru rodzaju displayu (kafelki albo lista)
● możliwość wyczyszczenia wszystkich filmów
● możliwość wgrania demo filmów (wczytanie bazy filmow o idkach zahardocodowanych w aplikacji)
● filtr "tylko ulubione" - pokazujący tylko ulubione filmy
● sortowanie po dacie publikacji: stare/nowe

Filmy są dostępne również po zamknięciu i ponownym otworzeniu przeglądarki dzięki urzyciu localstorage.

Wykorzystano Api youtube:
● youtube API - https://developers.google.com/youtube/v3/getting-started

Ze względów bezpieczeństwa nie udostępniono kluczy/secretów z powyższego API w repozytorium.
Przykładowy plik .env zapisany jest w katalogu główny programu.

EN:
All dependence used in the program.
From the package.json file
PL:
Wyszytkie dependence wykorzystane w programie.
Z pliku package.json
"dependencies": {
"@testing-library/jest-dom": "^5.16.4",
"@testing-library/react": "^13.2.0",
"@testing-library/user-event": "^13.5.0",
"@types/jest": "^27.5.1",
"@types/node": "^16.11.36",
"@types/react": "^18.0.9",
"@types/react-dom": "^18.0.4",
"bootstrap": "^5.1.3",
"get-video-id": "^3.6.4",
"react": "^18.1.0",
"react-dom": "^18.1.0",
"react-player": "^2.10.1",
"react-scripts": "^2.1.8",
"reactstrap": "^9.0.2",
"typescript": "^4.6.4",
"web-vitals": "^2.1.4"

"devDependencies": {
"@types/bootstrap": "^5.1.12",
"@types/vimeo": "^2.1.4"
}

### `npm start`

Runs the app in the development mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

2022 Jaub D (thecatrix.eu)(xmnuc@o2.pl)
```
