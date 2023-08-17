const { re } = require("semver");

module.exports = function toReadable (number) {
    let dozens;
    let wd = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    if (20 <= number) {
        dozens = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
    };
    const num = String(number).split('');
    if (num.length === 2)
        if (number % 10 == 0) {
            return dozens[number];
        } else {
            if (num[0] == 2) {
                return dozens[20] + ' ' + wd[num[1]];
            }
            if (num[0] == 3) {
                return dozens[30] + ' ' + wd[num[1]];
            }
            if (num[0] == 4) {
                return dozens[40] + ' ' + wd[num[1]];
            }
            if (num[0] == 5) {
                return dozens[50] + ' ' + wd[num[1]];
            }
            if (num[0] == 6) {
                return dozens[60] + ' ' + wd[num[1]];
            }
            if (num[0] == 7) {
                return dozens[70] + ' ' + wd[num[1]];
            }
            if (num[0] == 8) {
                return dozens[80] + ' ' + wd[num[1]];
            }
            if (num[0] == 9) {
                return dozens[90] + ' ' + wd[num[1]];
            }
        }
    if (num.length === 3)
        if (number % 100 != 0) {
            if (number % 10 === 0) {
                if (num[1] == 4) {
                    return wd[parseInt(num[0])] + ' hundred ' + dozens[40];
                }
                if (num[1] == 5) {
                    return wd[parseInt(num[0])] + ' hundred ' + dozens[50];
                }
                if (num[1] == 6) {
                    return wd[parseInt(num[0])] + ' hundred ' + dozens[60];
                }
                if (num[1] == 7) {
                    return wd[parseInt(num[0])] + ' hundred ' + dozens[70];
                }
                if (num[1] == 8) {
                    return wd[parseInt(num[0])] + ' hundred ' + dozens[80];
                }
                if (num[1] == 9) {
                    return wd[parseInt(num[0])] + ' hundred ' + dozens[90];
                }
                if (num[1] == 3) {
                    return wd[parseInt(num[0])] + ' hundred ' + dozens[30];
                }
                if (num[1] == 2) {
                    return wd[parseInt(num[0])] + ' hundred ' + dozens[20];
                }
            }
            if (num[1] == 0) {
                return wd[parseInt(num[0])] + ' hundred ' + wd[num[2]];
            }
            if (num[1] == 1) {
                if (num[2] == 0) {
                    return wd[parseInt(num[0])] + ' hundred ' + wd[10]
                }
                if (num[2] == 1) {
                    return wd[parseInt(num[0])] + ' hundred ' + wd[11]
                }
                if (num[2] == 2) {
                    return wd[parseInt(num[0])] + ' hundred ' + wd[12]
                }
                if (num[2] == 3) {
                    return wd[parseInt(num[0])] + ' hundred ' + wd[13]
                }
                if (num[2] == 4) {
                    return wd[parseInt(num[0])] + ' hundred ' + wd[14]
                }
                if (num[2] == 5) {
                    return wd[parseInt(num[0])] + ' hundred ' + wd[15]
                }
                if (num[2] == 6) {
                    return wd[parseInt(num[0])] + ' hundred ' + wd[16]
                }
                if (num[2] == 7) {
                    return wd[parseInt(num[0])] + ' hundred ' + wd[17]
                }
                if (num[2] == 8) {
                    return wd[parseInt(num[0])] + ' hundred ' + wd[18]
                }
                if (num[2] == 9) {
                    return wd[parseInt(num[0])] + ' hundred ' + wd[19]
                }
            }
            if (num[1] == 2) {
                return wd[parseInt(num[0])] + ' hundred ' + dozens[20] + ' ' + wd[num[2]];
            }
            if (num[1] == 3) {
                return wd[parseInt(num[0])] + ' hundred ' + dozens[30] + ' ' + wd[num[2]];
            }
            if (num[1] == 4) {
                return wd[parseInt(num[0])] + ' hundred ' + dozens[40] + ' ' + wd[num[2]];
            }
            if (num[1] == 5) {
                return wd[parseInt(num[0])] + ' hundred ' + dozens[50] + ' ' + wd[num[2]];
            }
            if (num[1] == 6) {
                return wd[parseInt(num[0])] + ' hundred ' + dozens[60] + ' ' + wd[num[2]];
            }
            if (num[1] == 7) {
                return wd[parseInt(num[0])] + ' hundred ' + dozens[70] + ' ' + wd[num[2]];
            }
            if (num[1] == 8) {
                return wd[parseInt(num[0])] + ' hundred ' + dozens[80] + ' ' + wd[num[2]];
            }
            if (num[1] == 9) {
                return wd[parseInt(num[0])] + ' hundred ' + dozens[90] + ' ' + wd[num[2]];
            }
        } else {
            return wd[parseInt(num[0])] + ' hundred';
        }
    } else {
        return wd[number];
    }
}

