# LuckyWheelHackaton

## About

I've created this project for the LuckyWheel Hackaton. At time of the deadline (2020-11-22 12:00) it is pretty undone.
Criterias to met:
* [ ] Browser PWA
* [ ] Use of File System API in a meaningful way
* [x] Use of IndexedDB API in a meaningful way
* [ ] Use of Service Workers API in a meaningful way

## The Game

The core concept of this game with the urge to use every listed API was an Angular based game where the player has to 
* [x] ["hack"](https://hackertyper.net/#) their way into various Evil Corporations (got the idea from Mr. Robot)
* [x] steal every data they could (basically just download files generated from their key strokes)
* [ ] "compromise" the sites by uploading only files matching criterias (randomly selected by the app based on file name or content)
* [ ] all level would get a given timeframe which could be extended in the Lab by uploading files matching random rules (e.g.: .jpg image with filesize more than 1Mb, but less than 2Mb)  
* [ ] In case of an unsuccessful action (both hacking or compromising) the game should be ended
* [ ] In case all corporation hacked the score and time would be saved

## The project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
