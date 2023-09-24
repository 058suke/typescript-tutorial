// 「3, 2, 1」と1秒ごとにカウントダウンする

// setTimeoutで記述する場合
function countdown(num: string): void {
  console.log(num);
}

setTimeout(() => {
  countdown('3');
  setTimeout(() => {
    countdown('2');
    setTimeout(() => {
      countdown('1');
    }, 1000);
  }, 1000);
}, 1000);


// Promiseを使って記述する場合
function countdownPromise(num: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(num);
      resolve(num);
    }, 1000);
  })
}

countdownPromise('3')
  .then(() => {
    countdownPromise('2');
  })
  .then(() => {
    countdownPromise('1');
  });

// async/awaitを使って記述する場合
async function countdownAsync(): Promise<void> {
  await countdownPromise('3');
  await countdownPromise('2');
  await countdownPromise('1');
}
countdownAsync();