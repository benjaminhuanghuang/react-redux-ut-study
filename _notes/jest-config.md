## Default config
    Place tests in a __tests__ folder, or name your test files with a .spec.js or .test.js extension. 

## Config Jest in package.json
  "jest": {
    "moduleFileExtensions": [
      "js",
      "jsx"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      ".*\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "transform": {
      "^.+\\.js$": "babel-jest"
    }
  },


## Config Jest in jest.config.json 
{
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
    "moduleNameMapper": {
        "Clock": "app/components/Clock.jsx",
        "CountdownForm": "app/components/CountdownForm.jsx",
        "Countdown": "app/components/Countdown.jsx"
    }
}


moduleFileExtensions specifies an array of file extensions your modules 

In moduleNameMapper, we map different files to their respective aliases. 
The test case will use the aliases to find the module to be test.
