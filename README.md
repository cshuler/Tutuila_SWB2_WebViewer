# Tutuila_SWB2_WebViewer


Project Premise: 
Understanding the distribution of groundwater recharge is important for water resources managers in making informed decisions. However, models that predict groundwater recharge typicall generate outputs that are complicated and are in formats that are not user friendly for managers.  In American Samoa existing water budget models have been developed, but not yet been presented to the public and decision makers via a decision support tool that follows methodology from other similar tools such as the Oahu Groundwater Recharge Viewer. This tool will create a valuable product to support water resource management in American Samoa.

# Local Installation
1) Make an account with [mapbox](https://account.mapbox.com/)
2) Go to Dashboard
3) Scroll to the bottom
4) Click the "Create a token" button
5) Name the token, your preference (e.g. "dev")
6) Make sure all "Public scopes" are checked, leave all secret scopes unchecked, leave "URL" blank, 
7) Click "Create token"
8) Copy the access token. it looks like this:

```bash
pk.eyJ1Ijoia2FuYWthaGFja2ODg2MDIwOTJ3cnpmZ21yaGx4MSJ9.ZHCcUo
```

9) In the terminal, in the root of the repository
```bash
npm i
```

10) cd into client
```bash
cd client/
```

11) In the terminal, in the client directory
```bash
npm i
```

12) Create a dev.js file in the ~./client/config/
```bash
cd config/
touch dev.js
```

13) Setup dev.js file like so: 
```javascript
module.exports ={
    REACT_APP_MAPBOX_ACCESS_TOKEN: "PASTE ACCESS TOKEN HERE"
}
```

14) In the dev.js file, paste the mapbox access token you copied earlier where it says "PASTE ACCESS TOKEN". Be sure that the access token is a string. (quotes on the outside)

15) Go to root directory.
```bash
cd ../../
```
16) Start a local server from the root directory of the repository.
```bash
npm run dev
```


# Making Edits

Do edits on the dev branch
test it
when finished and no errors, go to master branch and then merge to dev
save and push to github
lastly, save and push to heroku

open up with
heroku open





