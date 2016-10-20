var k = prompt("Hur mycket vill du ladda kortet med mannen? Max 10 lax och du kan endast fylla på med hunching, två hundra eler röding.");

var trans = 0;
var total = 0;
var noll = 0;


while (total < k) {

  if (total + 500 <= k) {

    total = total + 500;
    k = k - 500;
    trans++;
  } else if (total + 200 <= k || total === 150) {

    total = total + 200;
    k = k - 200;
    trans++;
  } else if (total + 100 <= k || total === 50) {

    total = total + 100;
    k = k - 100;
    trans++;
  }


};

console.log(k);


while (k > noll) {

  if (k > 499 || k > 549) {

    total = total + 500;
    k = k - 500;
    trans++;
  } else if (k > 199 || k > 149) {

    total = total + 200;
    k = k - 200;
    trans++;
  } else if (k > 99 || k > 49) {

    total = total + 100;
    k = k - 100;
    trans++;
  }


};



console.log("Antal transaktioner:" + " " + trans);
console.log("Hur mycket du fyllde på:" + " " + total);
console.log(k);

