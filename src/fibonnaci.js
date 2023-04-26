const fibonnaciGenerator = function* () {
  let n = 0;

  const f = n => {
    if (n === 0) {
      return 0;
    }

    if (n === 1) {
      return 1;
    }

    return f(n-1) + f(n-2);
  };

  while (true) {
    yield f(n);

    n += 1;
  }
};

export default fibonnaciGenerator;
