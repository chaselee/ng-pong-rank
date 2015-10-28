# pong-rank

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## INSTALLATION

Requirements: Node v4+, Grunt

Check out branch `10-28-15-activity`

## GAME SPEC

Let's build an app where we can add players and games to create a ping pong ranking system. The shell is already there to allow us to focus on the Angular logic. The master branch contains a beta version of this app; you can view that to get ideas to help you along.

First, build a form that allows us to add players (first name, last name). These fields should be required.

Secondly, build a form that allows us to enter games. Players should be selected from a dropdown, and their respective scores entered in a textbox.

Ideally, we would not want to allow someone to play against themselves (unless they are really, really good and FAST!).

Last, show a table showing the current rank of each ping pong player. As each game is submitted, this table should update itself, which is a good demonstration Angular binding. The ranking can be done any way you like: by wins/losses, point differential, etc.

Once the basic requirements are in place, you can add more angular concepts to enhance the app experience. For instance, you could hide the game entry div tag until there are at least two players in the system (and do the same for the ranking section). 

don't show games unless you've got two players

show a div (hint: it's already there - just need to add a directive)


FUTURE:
inject the $localStorage library to persist your data

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
