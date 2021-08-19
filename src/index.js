const MORSE_TABLE = {
  "000.-": "a",
  "0-...": "b",
  "0-.-.": "c",
  "00-..": "d",
  "0000.": "e",
  "0..-.": "f",
  "00--.": "g",
  "0....": "h",
  "000..": "i",
  "0.---": "j",
  "00-.-": "k",
  "0.-..": "l",
  "000--": "m",
  "000-.": "n",
  "00---": "o",
  "0.--.": "p",
  "0--.-": "q",
  "00.-.": "r",
  "00...": "s",
  "0000-": "t",
  "00..-": "u",
  "0...-": "v",
  "00.--": "w",
  "0-..-": "x",
  "0-.--": "y",
  "0--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "*****": " ",
};

function decode(expr) {
  let filter = [];
  for (let i = 0; i < expr.length; i = i + 2) {
    if (expr[i] === "0") {
      filter.push("0");
    } else if (expr[i] + expr[i + 1] === "10") {
      filter.push(".");
    } else if (expr[i] + expr[i + 1] === "11") {
      filter.push("-");
    } else {
      filter.push("*");
    }
  }
  let letters = [];
  for (let i = 0; i < filter.length; i = i + 5) {
    letters.push(
      `${
        filter[i] +
        filter[i + 1] +
        filter[i + 2] +
        filter[i + 3] +
        filter[i + 4]
      }`
    );
  }
  let decoded = [];
  let words = letters.map((w) => w.split(" "));
  for (let i = 0; i < letters.length; i++) {
    decoded[i] = [];
    for (let x = 0; x < words[i].length; x++) {
      if (MORSE_TABLE[words[i][x]]) {
        decoded[i].push(MORSE_TABLE[words[i][x]]);
      }
    }
  }
  return decoded.join("");
}

module.exports = {
  decode,
};
