module.exports = function toReadable(number) {
  digits = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
  }
  firstParts = {
      2: 'twen',
      3: 'thir',
      4: 'four',
      5: 'fif',
      6: 'six',
      7: 'seven',
      8: 'eigh',
      9: 'nine',
  }
  if (digits.hasOwnProperty(number)) {
    return digits[number];
  } else {
    switch (number.toString().length) {
    case 2:
        if (number.toString().split('')[0] == 1) {
          return `${firstParts[number.toString().split('')[1]]}teen`;
        } else if (number.toString().split('')[1] == 0) {
          return `${firstParts[number.toString().split('')[0]]}ty`;
        } else {
          return `${firstParts[number.toString().split('')[0]]}ty ${digits[number.toString().split('')[1]]}`;
        }
        break;
    case 3:
        if (digits.hasOwnProperty(number-Number(`${number.toString().split('')[0]}00`))) {
          return `${digits[number.toString().split('')[0]]} hundred ${digits[number-Number(`${number.toString().split('')[0]}00`)]}`;
        } else if (number.toString().split('')[1] == 0 && number.toString().split('')[2] == 0) {
          return `${digits[number.toString().split('')[0]]} hundred`;
        } else if (number.toString().split('')[2] == 0) {
          return `${digits[number.toString().split('')[0]]} hundred ${firstParts[number.toString().split('')[1]]}ty`;
        } else {
          return `${digits[number.toString().split('')[0]]} hundred ${firstParts[number.toString().split('')[1]]}ty ${digits[number.toString().split('')[2]]}`;
        }
  }
  }
}
