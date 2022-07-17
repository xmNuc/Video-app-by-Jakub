```
Video app by Jakub
author: Jakub (xmnuc@o2.pl)
date of build: 05.2022.


http://videoapp.thecatrix.eu/


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
Versions you can find in the package.json file
PL:
Wyszytkie dependence wykorzystane w programie.
Wersje wykorzystanych zasobów znajdziesz w pliku package.json
"dependencies": {
"@testing-library/jest-dom",
"@testing-library/react"
"@testing-library/user-event"
"@types/jest"
"@types/node"
"@types/react"
"@types/react-dom"
"bootstrap"
"get-video-id"
"react"
"react-dom"
"react-player"
"react-scripts"
"reactstrap"
"typescript"
"web-vitals"

"devDependencies": {
"@types/bootstrap"
"@types/vimeo"
}

### `npm start`

Runs the app in the development mode.\

### `npm run build`

Builds the app for production to the `build` folder.\


2022 Jakub D (thecatrix.eu)(xmnuc@o2.pl)(https://www.youtube.com/channel/UCtnIjUpe2EVZbH26p20obnA)
```
