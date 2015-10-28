# pong-rank

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## INSTALLATION

Requirements: Node v4+, Grunt

https://nodejs.org/en/download/

Clone this repo

Check out the branch `10-28-15-activity`

run `./node_modules/.bin/grunt serve`

## GAME SPEC

Let's build an app where we can add players and games to create a ping pong ranking system. The shell is already there to allow us to focus on the Angular logic. The master branch contains a beta version of this app; you can view that to get ideas to help you along.

The work will take place in `app\views\main.html`

First, build a form that allows us to add players (first name, last name). These fields should be required.

Secondly, build a form that allows us to enter games. Players should be selected from a dropdown, and their respective scores entered into a textbox.

Ideally, we would not want to allow someone to play against themselves (unless they are really, really good and FAST!).

Last, show a table showing the current rank of each ping pong player. As each game is submitted, this table should update itself, which is a good demonstration of Angular binding. The ranking can be done any way you like: by wins/losses, point differential, etc.

Once the basic requirements are in place, you can add more angular concepts to enhance the app experience. For instance, you could hide the game entry div tag until there are at least two players in the system (and do the same for the ranking section).

Other ideas:
* If there are no players in the system, show a div where the rankings would be with the text "Please add some players". (hint: the div is already there! It just needs the proper angular directive added).

* Inject and use the $localStorage library to persist your data to the browser's local storage. The dependency is already in the project - you just need to use it.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
