# Congressional App Challenge 2023

Authors: Ty Brennan and Thomas Catalan

## Installation

(Paaartial follow these steps exactly!)

### (1) Install required python libraries. I recommend using a virtual environment

```(bash)
python -m venv venv
```

Then activate your environment (`source venv/Scripts/activate` for Windows or `source venv/bin/activate` for Linux) and execute the following to instasl python libraries.

```(bash)
pip install -rf requirements.txt
```

### (2) Install Node.js

![image](assets/nodejs.png)

[Here](https://nodejs.org/en) is a link to the official website.

### (3) Install Dependency(s)

```(bash)
npm install axios --save
npm i -S @react-google-maps/api
```

### (4) Get API key

Go to console.cloud.google.com and get a key. I forgot how. Then make a file in frontend called `.env` and add this line:

```(bash)
REACT_APP_APIKEY=<<YOUR API KEY GOES HERE>>
```

## Deploy Development Server on Local Machine

### Option 1: Just run frontend components (not compiled)

While in `frontend` directory, execute

```(bash)
npm start
```

### Option 2: Run full stack (Backend + Frontend)

While in project directory, execute

```(bash)
npm run build
flask run
```

> Note: If there is an error, check if you are in the correct python environment.
