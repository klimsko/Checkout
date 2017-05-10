sample-app
==========

TODO:
0. Create a public GIT repo so we can look it up later, and place the package files there before you begin the work.
If you cannot make it public for some reason, make sure to pack whole project along with .git folder when you're done, and send it back via email. Hint: JS tasks - it would be nice to use React (we are working with it), but you can also use pure javascript or whatever you like.

1. Prepare a responsive checkout according to the design file `acme-checkout.pdf`. Beware! There're some tiny design bugs and inconsistencies, hope you'll fix them :) .
Hint: Font used in design is Roboto 400 (Regular) and Roboto 700 (Bold) - you can get them at `https://fonts.google.com/`.

   1. Implement data validation on all the checkout inputs, so the checkout button on the bottom is only enabled when data is valid.

   2. For under 767px the menu should be converted to "hamburger" icon and expand when touched. Design according to the design file found in the app root `acme-checkout.pdf`. Hint: Icons and images are in assets folder.

Big plus:
1. Create gulp task that copies images, css, js. Source assets: `src/assets/` Target assets: `web/assets/`.

2. Make product counter (+/-) adding/removing items from bag. All prices and quantity of product should update.