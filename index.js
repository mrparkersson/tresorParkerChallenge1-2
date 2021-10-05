function beautifulDays(i, j, k) {
  // any variable to hold the beautiful day
  let beautifulNumber = 0;
  //   loop through the number we are getting
  for (let day = i; day <= j; day++) {
    //   appling the reverse method to get the inverse of the number passed
    const inverseofTheDay = parseFloat(
      day.toString().split("").reverse().join("")
    );
    if (Math.abs(day - inverseofTheDay) % k === 0) {
      beautifulNumber++;
    }
    // console.log(the perfect Number we are getting)
    // console.log(beautifulNumber);
    return beautifulNumber;
  }
}

beautifulDays(20, 23, 6);
