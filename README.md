# bcw-capstone
## Overview
What's for Lunch (WaFL) is a Kahoot!-inspired collaborative decision making framework designed to alleviate the social tension common in lunch and other mealtime decisions.

## Requirements
WaFL is built on a node.js backend with a Vue frontend, and deployed to the web as a Heroku app persisted with MongoDB.

## Deployment
Development builds are available on the 'dev' branch.
Deployments are to Heroku directly/automatically from the 'master' branch.
Before committing to the `master` branch, be sure the new version has a built client.
```
# navigate to client directory
cd client

# run the build command
npm run build

# verify updates in /dist
git add -A
git status

# commit
git commit
```
