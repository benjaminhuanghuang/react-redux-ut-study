# Jest

## Setup
``` 
    npm i -D jest babel-jest
```

## Command
```
$ jest --watch
$ jest --coverage
$ jest --config jest.config.js
npm test -- --watch


# Test foldeer
jest src/utils


# Test single file
jest src/utils/sort.test.js


# Test test suit

```

## Run jest by using npm script
```
    "scripts": {
        "test": "jest"

    }
    $ npm test
```
    
## Default config
    Place tests in a __tests__ folder, or name your test files with a .spec.js or .test.js extension. 

## Config Jest 
in package.json
```
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
```
in jest.config.json 
```
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

```
moduleFileExtensions specifies an array of file extensions your modules 

In moduleNameMapper, we map different files to their respective aliases. 
The test case will use the aliases to find the module to be test.


## Jest API
- Matchers


- Truthiness
```
toBeNull 只匹配 null
toBeUndefined, toBeDefined 匹配 undefined, definde
toBeTruthy 匹配任何 if 语句为真
toBeFalsy 匹配任何 if 语句为假
```
- Numbers
```
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);

  // Float
   expect(value).toBeCloseTo(4.12344);
```

- String
```
  expect('Christoph').toMatch(/stop/);
```

- Array
```
 expect(shoppingList).toContain('beer');
```

- Exception
```
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
```

- Async
```
  Test the fetchData(callback) 函数，获取一些数据并在完成时调用 callback(data)。 
  你期望返回的数据是一个字符串 good

  使用单个参数调用 done，而不是将测试放在一个空参数的函数。 Jest会等done回调函数执行结束后，结束测试。
  test('the data is good', done => {
    function callback(data) {
      try {
        expect(data).toBe('good');
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchData(callback);
  });
```

- Promise
```
  test('the data is good', () => {
  return fetchData().then(data => {
    expect(data).toBe('good');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch('error'));
});
```
- Hooks
Jest提供了`beforeEach`、`afterEach`、`beforeAll`、`afterAll`等钩子，用于一些测试之前等状态预设和测试完成后等重置、清理工作. 
其中`beforeEach`和`afterEach`会分别在每个单元测试的运行前和运行结束后执行，`beforeAll`和`afterAll`则是在所有单元测试的执行前和执行完成后运行。

此外可以通过 `describe` 块来将测试分组。 当 `before` 和 `after` 的块在 `describe` 块内部时，则其只适用于该 `describe` 块内的测试。

顶级的 `beforeEach` 在 `describe` 块级的 `beforeEach` 之前被执行

```
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});
```
- Mock
