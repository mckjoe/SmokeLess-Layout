# SmokeLess

### By Joseph McKinney, June 2018.

## Description
This is an app that is made to assist somebody in their efforts to quit smoking cigarettes.  It should keep track of statistics about when they quit, financial information, and also health benefits that they should expect as a result of not smoking.

## User Stories
1.  "I want to be able to see how much time has passed since my last cigarrette.  It would be nice to see this as an ongoing counter in years, months, weeks, days, minutes and seconds, because seeing the time add up by the second will remind me that every second I go without smoking is for a reason and makes a difference" - random person

2.  "I want to know how much money I have saved.  Smoking is super expensive, and it would be really cool to know how much money I would have spent on cigarettes in the amount of time since I quit." - random person

3. "I want to know if my health is getting better yet, and if so in what way?  Have I even made it far enough to experience anything positive, or has all of this misery been for nothing?  Seeing what I've done for my health as I go I think would be super motivating." - random person

4. "I need some ideas of something I can do to get passed this craving that I'm having right now." - random person

5. "I want to know when I will/should feel better.  Is there some sort of time frame that should depict craving strength and potential duration?  Knowing how close I am to the checkpoints would be super motivating to continue not smoking." - random person  

6.  "I want to be able to read other peoples experiences or suggestions because other peoples experiences will help me know what to expect and will also remind me that I'm not alone and that I CAN do this." - random person

7.  "I want to be able to share my experiences with other people who are going through or who will be going through something similar to me or something that I have been through.  A sense of community and encouragement would be huge right now for a lot of people, and having made it as far as I have even though I never thought I could I feel a strong urge to remind other people that regardless of how they feel right now they can do this.  I also want to be able to share this super helpful article that I found the other day." - random person

8.  "I want to know how many cigarettes I have avoided smoking since I stopped. I feel like it would be really motivating to see that number grow, and honestly I've never kept track past one day.  Addictions have a way of making you ignore the longterm so I've never thought about the number I smoke per day in terms of years months or even weeks. I feel like this could be a somewhat rude but unarguable example of how ridiculously easy it is to smoke hundreds of cigarettes in a month without ever realizing it.  To me that sounds a lot worse than 15 a day and would be a lot more motivating for me." - random person

9.  "I want to know how much time I have saved.  Smoking a cigarette takes me about 12 minutes, so since I stopped smoking, how much time have I saved that I would have spent smoking cigarettes?" - random person

10.  "I want to see a timeline of the health benefits I can expect to have experienced since I stopped smoking.  I feel like I've seen commercials before that have these incredibly dramatic timelines about when your heart rate returns to normal and when your risk for a heart attack will drop and some of that stuff.  If I could view a timeline of all that information within the app that would be pretty cool.  Also if I got some sort of notification or some sort of reminder when I make it past these benchmarks that would be cool too." - random person

## My Plan
I am building an app that people can use that will help them continue to not smoke after they have decided to stop.  I stopped smoking a bit over a year ago and I got a ton of motivation from being able to follow along with the time passed and also the number of cigarettes I would have smoked through the process.  Im a year and three months without a cigarette and I still check my time without and cigarette counter often.  In my experience I also had ideas of my own that I thought would make for a more friendly, easy, motivating and hopefully a more successful app in terms of keeping people motivated to not smoke.  My plan is to address some of the more common functions of apps that help you quit smoking, like a running timer and a number of cigarettes that somebody has not smoked as well as money saved but to also use my own experiences to make one that includes a timeline of health benefits and a way for people to interact with each other so that I can share my experiences and hopefully motivate someone else, or if someone else is looking for a little motivation they can have a place to go similar to a "wall" and read stories or even interact with people who know what they are experiencing.  

## Hold-ups
I got held up for a while trying to sort out my routing.  I had originally called all of my routes without a slash before them, so when I would click to route it would just add the new route to the path that was already being used. Essentially, when I would go the way of signing up for a new user, by the time it got to the home screen the router was "/register/register-questions/main", so I had to create a new routing path for returning users who went to the login screen and that made it so when they got to the main screen the path was /login/main.  When I learned that a simple "/" would solve all of my problems I danced a jig.  I really thought for a while that I was going to have to create all possible routes to make sure that whichever path someone took they could still get to where they wanted to go.  As I got deeper and deeper into this is when I realized that I needed to approach the problem differently.  I also decided last night that I needed to change the colora that I was using to style my app.  I tried not to change too much because I didn't want to deviate too far from my sketches, but I did re-do my wireframing to show the change and to make sure I liked the final product.  

## Important!
This site was made with Angular. To view the site in a live development server, please clone repository from github to your desktop, enter the project home directory and with command line enter "npm install". this will add all needed dependencies, and then you can run "ng serve --open" in the command line to view the site in a live development server.

## Setup/Installation Requirements
### To download and intall
* Start by downloading NPM. Go to their website and follow instructions to download and install.
* Clone project from GitHub to your desktop with the command line.
* Enter project root directory.
* Type "npm install" to download and install all dependencies.
### To open in Atom text editor
* type 'atom .' in command line.
### To view in browser
* Click link to firebase deployed webpage.  
### To view in live development server
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known Bugs
At this time there are no known bugs. If you find any or have any questions or suggestions, feel free to email: mckinney.a.joe@gmail.com.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
