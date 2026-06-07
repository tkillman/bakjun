const printFn = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("num :: ", num);
      resolve(num);
    }, 0);
  });
};

const solution = () => {
  Array(2)
    .fill()
    .forEach(async (_, index) => {
      console.log("start index :: ", index);
      const num = await printFn(index);
      console.log("end num :: ", num);
    });

  console.log("finish");
};

solution();
