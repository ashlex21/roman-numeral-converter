const input = document.getElementById("input");
const button = document.getElementById("button");

let reqStr = "";
function convertToRoman(num) {
  reqStr.concat("VII");

  if (num <= 0) {
    return 0;
  }
  if (num <= 3) {
    // console.log("logged in 3");
    // console.log(reqStr);
    const letter = "I".repeat(num / 1);

    reqStr += letter;
    // console.log(reqStr);
  }
  if (num <= 8 && num >= 4) {
    if (num == 4) {
      reqStr += "IV";
    } else {
      //   console.log("logged in 8");
      reqStr += "V";
      //   console.log("not yet printed");
      //   console.log(reqStr);
      //   console.log("reqStr printed");
      convertToRoman(num - 5);
    }
  }
  if (num >= 9 && num <= 39) {
    if (num == 9) {
      reqStr += "IX";
    } else {
      const letter = "X".repeat(Math.floor(num / 10));
      reqStr += letter;
      convertToRoman(num % 10);
    }
  }
  if (num >= 40 && num <= 49) {
    reqStr += "XL";
    convertToRoman(num - 40);
  }
  if (num >= 50 && num <= 89) {
    reqStr += "L";
    convertToRoman(num - 50);
  }
  if (num >= 90 && num <= 99) {
    reqStr += "XC";
    convertToRoman(num - 90);
  }
  if (num >= 100 && num <= 399) {
    reqStr += "C";
    convertToRoman(num - 100);
  }
  if (num >= 400 && num <= 499) {
    reqStr += "CD";
    convertToRoman(num - 400);
  }
  if (num >= 500 && num <= 899) {
    reqStr += "D";
    convertToRoman(num - 500);
  }
  if (num >= 900 && num <= 999) {
    reqStr += "CM";
    convertToRoman(num - 900);
  }
  if (num >= 1000 && num < 5000) {
    reqStr += "M";
    convertToRoman(num - 1000);
  }
  // console.log(reqStr);
  return reqStr;
}

// console.log(convertToRoman(22));

button.addEventListener("click", () => {
  if (input.value <= 0) {
    alert("As explained enter a number between 0-5000");
    input.value = "";
  } else {
    //   console.log(input.value);
    const res = convertToRoman(input.value);
    alert(res);
    reqStr = "";
  }
});
