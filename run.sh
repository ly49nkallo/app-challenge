#!/bin/bash
#COMPILE AND DEPLOY DEVELOPMENT SERVER
cd ./frontend
npm run build
cd ..
flask run -p 5000 --no-debug