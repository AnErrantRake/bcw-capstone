# bcw-capstone
## Overview
What's for Lunch (WaFL) is a Kahoot!-inspired collaborative decision making framework designed to alleviate the social tension common in lunch and other mealtime group decisions.

## Requirements
WaFL is built on a node.js backend with a Vue frontend, and deployed to the web as a Heroku app persisted with MongoDB.

## Deployment
Development builds are available on the 'dev' branch.
Deployments are to Heroku directly/automatically from the 'master' branch.
Heroku is configured to build the client on receipt.

## Testing
Testing is manual. Currently testable features include (by view):

## Development
Development environment requires a .env file to be present in the root directory with the following parameters defined:
- NODE_ENV
- PORT
- WAFL_GOOGLE_API_KEY
- WAFL_DB_USERNAME
- WAFL_DB_PASSWORD
