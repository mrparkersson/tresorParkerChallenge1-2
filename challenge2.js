function catAndMouse(x, y, z) {
    let distBtnMouseAndCatA = Math.abs(x - z);
     let distBtnMouseAndCatB = Math.abs(y - z);

    if (distBtnMouseAndCatA < distBtnMouseAndCatB) {
      console.log("Cat A")
    return "Cat A";
  }
  if (distBtnMouseAndCatA > distBtnMouseAndCatB) {
      console.log("Cat B")
    return "Cat B";
  }
  console.log("Mouse C")
  return "Mouse C";
}
console.log(catAndMouse())
