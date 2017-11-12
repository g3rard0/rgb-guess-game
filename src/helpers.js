
export let randomNum =  (min, max) => { //retrieved from the mdn docs
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export let getColor = () => {
  let min = 0,
      max = 255,
      red = randomNum(min, max),
      green = randomNum(min, max),
      blue = randomNum(min, max);

  return [red, green, blue];
};
