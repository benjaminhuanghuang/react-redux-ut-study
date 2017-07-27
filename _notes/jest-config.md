



# Jest Config file
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
