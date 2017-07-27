# Jest Command Line

$ jest --watch
$ jest --coverage
$ jest --config jest.config.js

## Run jest by using npm script
    "scripts": {
        "test": "jest"

    }
    $ npm test


## Rerunning Tests on Changes
    npm test -- --watch
    jest --watch

    Anything you pass to npm test after the first -- will be passed straight through to the underlying command

    