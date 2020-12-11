
function fetchData()
{
  return new Promise((resolve, reject)=>
  {
    setTimeout(() => {
      // do something...
      const err = false

      if(err){
        resolve('good');
      }
      else{
        reject('error')
      }
    }, 1000);

  }) 
}


test('the data is good', () => {
  return fetchData().then(data => {
    expect(data).toBe('good');
  });
});

/*
如果fetchData() 返回额 Promise是rejected的，请确保添加 expect.assertions 来验证一定数量的断言被调用。 
否则一个fulfilled态的 Promise 不会让测试失败
*/
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch('error'));
});


/*
.resolves / .rejects
*/
test('the data is good', () => {
  return expect(fetchData()).resolves.toBe('good');
});

test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error');
});

