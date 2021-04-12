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
8) Copy the access token. It looks like this:

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
```python
module.exports ={
    REACT_APP_MAPBOX_ACCESS_TOKEN: "PASTE ACCESS TOKEN HERE"
}
```

14) In the dev.js file, paste the mapbox access token you copied earlier where it says "PASTE ACCESS TOKEN". Be sure that the access token is a string. (quotes on the outside)

15) Go to root directory. ~./
```bash
cd ../../
```
16) Start a local server from the root directory of the repository.
```bash
npm run dev
```

## Create and Connect new local branch to online git branch
1) Create new dev branch.
```bash
git checkout -b dev
```

2)Edit any file. This is so that github sees a change.
3) Save the change.
```bash 
gaa .
```

4) Make your first git commit message.
```bash
gcmsg "first commit on new local branch"
```

5) Git push your code to Github and connect it to the remote branch online
```bash
git push origin dev
```
Now you should be connected from local to remote github branch.

6) Do the same steps from 1-5 but make a new local branch called [chris_dev]



## Making Edits

In the master or main branch, run this in terminal
```bash
git fetch --all #this gathers the information from the web

```
```bash
git pull --all #this actually makes the changes in your local repo"
```


Do edits on the dev branch or make a new branch to make some edits. To make sure youʻre on the correct branch, run:
```bash
git branch
```
to exit press "q"


To run tests, from the root directory, run:
```bash
npm t
```

When finished and no errors, go to master branch and then merge to dev
```bash
git checkout master #this changes branches, to the master branch
git merge dev #this merges the changes from the dev branch to the current branch you are on
```

If you merge conflicts, push to github. Make sure to push up all branches
```bash
ggpush
```

lastly, save and push to heroku
```bash
git push heroku master
```

Open a web browser to the heroku repo
```bash
heroku open
```





