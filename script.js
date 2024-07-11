import QRCode from 'qrcode'

const QRCodeCapacity = {
  1: {
    alphanumeric: { L: 25, M: 20, Q: 16, H: 10 },
    numeric: { L: 41, M: 34, Q: 27, H: 17 },
    byte: { L: 17, M: 14, Q: 11, H: 7 },
    bits: { L: 152, M: 128, Q: 104, H: 72 }
  },
  2: {
    alphanumeric: { L: 47, M: 38, Q: 29, H: 20 },
    numeric: { L: 77, M: 63, Q: 48, H: 34 },
    byte: { L: 32, M: 26, Q: 20, H: 14 },
    bits: { L: 272, M: 224, Q: 176, H: 128 }
  },
  3: {
    alphanumeric: { L: 77, M: 61, Q: 47, H: 35 },
    numeric: { L: 127, M: 101, Q: 77, H: 58 },
    byte: { L: 53, M: 42, Q: 32, H: 24 },
    bits: { L: 440, M: 352, Q: 272, H: 208 }
  },
  4: {
    alphanumeric: { L: 114, M: 90, Q: 67, H: 50 },
    numeric: { L: 187, M: 149, Q: 111, H: 82 },
    byte: { L: 78, M: 62, Q: 46, H: 34 },
    bits: { L: 640, M: 512, Q: 384, H: 288 }
  },
  5: {
    alphanumeric: { L: 154, M: 122, Q: 87, H: 64 },
    numeric: { L: 255, M: 202, Q: 144, H: 106 },
    byte: { L: 106, M: 84, Q: 60, H: 44 },
    bits: { L: 864, M: 688, Q: 496, H: 368 }
  },
  6: {
    alphanumeric: { L: 195, M: 154, Q: 108, H: 84 },
    numeric: { L: 322, M: 255, Q: 178, H: 139 },
    byte: { L: 134, M: 106, Q: 74, H: 58 },
    bits: { L: 1088, M: 864, Q: 608, H: 480 }
  },
  7: {
    alphanumeric: { L: 224, M: 178, Q: 125, H: 93 },
    numeric: { L: 370, M: 293, Q: 207, H: 154 },
    byte: { L: 154, M: 122, Q: 86, H: 64 },
    bits: { L: 1248, M: 992, Q: 704, H: 528 }
  },
  8: {
    alphanumeric: { L: 279, M: 221, Q: 157, H: 122 },
    numeric: { L: 461, M: 365, Q: 259, H: 202 },
    byte: { L: 192, M: 152, Q: 108, H: 84 },
    bits: { L: 1552, M: 1232, Q: 880, H: 688 }
  },
  9: {
    alphanumeric: { L: 335, M: 262, Q: 189, H: 143 },
    numeric: { L: 552, M: 432, Q: 312, H: 235 },
    byte: { L: 230, M: 180, Q: 130, H: 98 },
    bits: { L: 1856, M: 1456, Q: 1056, H: 800 }
  },
  10: {
    alphanumeric: { L: 395, M: 311, Q: 221, H: 174 },
    numeric: { L: 652, M: 513, Q: 364, H: 288 },
    byte: { L: 271, M: 213, Q: 151, H: 119 },
    bits: { L: 2192, M: 1728, Q: 1232, H: 976 }
  },
  11: {
    alphanumeric: { L: 468, M: 366, Q: 259, H: 200 },
    numeric: { L: 772, M: 604, Q: 427, H: 331 },
    byte: { L: 321, M: 251, Q: 177, H: 137 },
    bits: { L: 2592, M: 2032, Q: 1440, H: 1120 }
  },
  12: {
    alphanumeric: { L: 535, M: 419, Q: 296, H: 227 },
    numeric: { L: 883, M: 691, Q: 489, H: 374 },
    byte: { L: 367, M: 287, Q: 203, H: 155 },
    bits: { L: 2960, M: 2320, Q: 1648, H: 1264 }
  },
  13: {
    alphanumeric: { L: 619, M: 483, Q: 352, H: 259 },
    numeric: { L: 1022, M: 796, Q: 580, H: 427 },
    byte: { L: 425, M: 331, Q: 241, H: 177 },
    bits: { L: 3424, M: 2672, Q: 1952, H: 1440 }
  },
  14: {
    alphanumeric: { L: 667, M: 528, Q: 376, H: 283 },
    numeric: { L: 1101, M: 871, Q: 621, H: 468 },
    byte: { L: 458, M: 362, Q: 258, H: 194 },
    bits: { L: 3688, M: 2920, Q: 2088, H: 1576 }
  },
  15: {
    alphanumeric: { L: 758, M: 600, Q: 426, H: 321 },
    numeric: { L: 1250, M: 991, Q: 703, H: 530 },
    byte: { L: 520, M: 412, Q: 292, H: 220 },
    bits: { L: 4184, M: 3320, Q: 2360, H: 1784 }
  },
  16: {
    alphanumeric: { L: 854, M: 656, Q: 470, H: 365 },
    numeric: { L: 1408, M: 1082, Q: 775, H: 602 },
    byte: { L: 586, M: 450, Q: 322, H: 250 },
    bits: { L: 4712, M: 3624, Q: 2600, H: 2024 }
  },
  17: {
    alphanumeric: { L: 938, M: 734, Q: 531, H: 408 },
    numeric: { L: 1548, M: 1212, Q: 876, H: 674 },
    byte: { L: 644, M: 504, Q: 364, H: 280 },
    bits: { L: 5176, M: 4056, Q: 2936, H: 2264 }
  },
  18: {
    alphanumeric: { L: 1046, M: 816, Q: 574, H: 452 },
    numeric: { L: 1725, M: 1346, Q: 948, H: 746 },
    byte: { L: 718, M: 560, Q: 394, H: 310 },
    bits: { L: 5768, M: 4504, Q: 3176, H: 2504 }
  },
  19: {
    alphanumeric: { L: 1153, M: 909, Q: 644, H: 493 },
    numeric: { L: 1903, M: 1500, Q: 1063, H: 813 },
    byte: { L: 792, M: 624, Q: 442, H: 338 },
    bits: { L: 6360, M: 5016, Q: 3560, H: 2728 }
  },
  20: {
    alphanumeric: { L: 1249, M: 970, Q: 702, H: 557 },
    numeric: { L: 2061, M: 1600, Q: 1159, H: 919 },
    byte: { L: 858, M: 666, Q: 482, H: 382 },
    bits: { L: 6888, M: 5352, Q: 3880, H: 3080 }
  },
  21: {
    alphanumeric: { L: 1352, M: 1035, Q: 742, H: 587 },
    numeric: { L: 2232, M: 1708, Q: 1224, H: 969 },
    byte: { L: 929, M: 711, Q: 509, H: 403 },
    bits: { L: 7456, M: 5712, Q: 4096, H: 3248 }
  },
  22: {
    alphanumeric: { L: 1460, M: 1134, Q: 823, H: 640 },
    numeric: { L: 2409, M: 1872, Q: 1358, H: 1056 },
    byte: { L: 1003, M: 779, Q: 565, H: 439 },
    bits: { L: 8048, M: 6256, Q: 4544, H: 3536 }
  },
  23: {
    alphanumeric: { L: 1588, M: 1248, Q: 890, H: 672 },
    numeric: { L: 2620, M: 2059, Q: 1468, H: 1108 },
    byte: { L: 1091, M: 857, Q: 611, H: 461 },
    bits: { L: 8752, M: 6880, Q: 4912, H: 3712 }
  },
  24: {
    alphanumeric: { L: 1704, M: 1326, Q: 963, H: 744 },
    numeric: { L: 2812, M: 2188, Q: 1588, H: 1228 },
    byte: { L: 1171, M: 911, Q: 661, H: 511 },
    bits: { L: 9392, M: 7312, Q: 5312, H: 4112 }
  },
  25: {
    alphanumeric: { L: 1853, M: 1451, Q: 1041, H: 779 },
    numeric: { L: 3057, M: 2395, Q: 1718, H: 1286 },
    byte: { L: 1273, M: 997, Q: 715, H: 535 },
    bits: { L: 10208, M: 8000, Q: 5744, H: 4304 }
  },
  26: {
    alphanumeric: { L: 1990, M: 1542, Q: 1094, H: 864 },
    numeric: { L: 3283, M: 2544, Q: 1804, H: 1425 },
    byte: { L: 1367, M: 1059, Q: 751, H: 593 },
    bits: { L: 10960, M: 8496, Q: 6032, H: 4768 }
  },
  27: {
    alphanumeric: { L: 2132, M: 1637, Q: 1172, H: 910 },
    numeric: { L: 3517, M: 2701, Q: 1933, H: 1501 },
    byte: { L: 1465, M: 1125, Q: 805, H: 625 },
    bits: { L: 11744, M: 9024, Q: 6464, H: 5024 }
  },
  28: {
    alphanumeric: { L: 2223, M: 1732, Q: 1263, H: 958 },
    numeric: { L: 3669, M: 2857, Q: 2085, H: 1581 },
    byte: { L: 1528, M: 1190, Q: 868, H: 658 },
    bits: { L: 12248, M: 9544, Q: 6968, H: 5288 }
  },
  29: {
    alphanumeric: { L: 2369, M: 1839, Q: 1322, H: 1016 },
    numeric: { L: 3909, M: 3035, Q: 2181, H: 1677 },
    byte: { L: 1628, M: 1264, Q: 908, H: 698 },
    bits: { L: 13048, M: 10136, Q: 7288, H: 5608 }
  },
  30: {
    alphanumeric: { L: 2520, M: 1994, Q: 1429, H: 1080 },
    numeric: { L: 4158, M: 3289, Q: 2358, H: 1782 },
    byte: { L: 1732, M: 1370, Q: 982, H: 742 },
    bits: { L: 13880, M: 10984, Q: 7880, H: 5960 }
  },
  31: {
    alphanumeric: { L: 2677, M: 2113, Q: 1499, H: 1150 },
    numeric: { L: 4417, M: 3486, Q: 2473, H: 1897 },
    byte: { L: 1840, M: 1452, Q: 1030, H: 790 },
    bits: { L: 14744, M: 11640, Q: 8264, H: 6344 }
  },
  32: {
    alphanumeric: { L: 2840, M: 2238, Q: 1618, H: 1226 },
    numeric: { L: 4686, M: 3693, Q: 2670, H: 2022 },
    byte: { L: 1952, M: 1538, Q: 1112, H: 842 },
    bits: { L: 15640, M: 12328, Q: 8920, H: 6760 }
  },
  33: {
    alphanumeric: { L: 3009, M: 2369, Q: 1700, H: 1307 },
    numeric: { L: 4965, M: 3909, Q: 2805, H: 2157 },
    byte: { L: 2068, M: 1628, Q: 1168, H: 898 },
    bits: { L: 16568, M: 13048, Q: 9368, H: 7208 }
  },
  34: {
    alphanumeric: { L: 3183, M: 2506, Q: 1787, H: 1394 },
    numeric: { L: 5253, M: 4134, Q: 2949, H: 2301 },
    byte: { L: 2188, M: 1722, Q: 1228, H: 958 },
    bits: { L: 17528, M: 13800, Q: 9848, H: 7688 }
  },
  35: {
    alphanumeric: { L: 3351, M: 2632, Q: 1867, H: 1431 },
    numeric: { L: 5529, M: 4343, Q: 3081, H: 2361 },
    byte: { L: 2303, M: 1809, Q: 1283, H: 983 },
    bits: { L: 18448, M: 14496, Q: 10288, H: 7880 }
  },
  36: {
    alphanumeric: { L: 3537, M: 2780, Q: 1966, H: 1530 },
    numeric: { L: 5836, M: 4588, Q: 3244, H: 2524 },
    byte: { L: 2431, M: 1911, Q: 1351, H: 1051 },
    bits: { L: 19568, M: 15312, Q: 10832, H: 8432 }
  },
  37: {
    alphanumeric: { L: 3729, M: 2894, Q: 2071, H: 1591 },
    numeric: { L: 6153, M: 4775, Q: 3417, H: 2625 },
    byte: { L: 2563, M: 1989, Q: 1423, H: 1093 },
    bits: { L: 20728, M: 15936, Q: 11408, H: 8768 }
  },
  38: {
    alphanumeric: { L: 3927, M: 3054, Q: 2181, H: 1658 },
    numeric: { L: 6479, M: 5039, Q: 3599, H: 2735 },
    byte: { L: 2699, M: 2099, Q: 1499, H: 1139 },
    bits: { L: 21968, M: 16816, Q: 12016, H: 9136 }
  },
  39: {
    alphanumeric: { L: 4087, M: 3220, Q: 2298, H: 1774 },
    numeric: { L: 6743, M: 5313, Q: 3791, H: 2927 },
    byte: { L: 2809, M: 2213, Q: 1579, H: 1219 },
    bits: { L: 23048, M: 17728, Q: 12656, H: 9776 }
  },
  40: {
    alphanumeric: { L: 4296, M: 3391, Q: 2420, H: 1852 },
    numeric: { L: 7089, M: 5596, Q: 3993, H: 3057 },
    byte: { L: 2953, M: 2331, Q: 1663, H: 1273 },
    bits: { L: 24328, M: 18672, Q: 13328, H: 10208 }
  }
};

let qrCodeGenerate;

async function generateQRCode(text, errorCorrectionLevel, version, mode) {
  try {
    qrCodeGenerate = await QRCode.toDataURL(text, { errorCorrectionLevel, version, mode });
    console.log('qrCodeGenerate', qrCodeGenerate)
    displayQrcode(qrCodeGenerate)

  } catch (err) {
    console.error('Error generating QR Code:', err);
  }
}

async function downloadQRCode() {
  try {
    const link = document.createElement('a');
    link.href = qrCodeGenerate;
    link.download = 'qrcode.png';
    link.click();
  } catch (err) {
    console.error('Error downloading QR Code:', err);
  }
}

function displayQrcode(qrCode) {
  const img = document.getElementById('qrcode-img');
  img.src = qrCode;
}

// BITS
function convertToBits(number, version, mode) {
  if (mode === 'numeric') return numericToBits(number, version);
  if (mode === 'alphanumeric') return stringToBits(number, version);
  if (mode === 'byte') return byteToBits(number, version);
}

function numericToBits(number, version) {
  const numStr = number.toString();
  const length = numStr.length;
  
  let totalBits = 0;

  totalBits += 4;
  
  if (version <= 9) {
    totalBits += 10;
  } else if (version <= 26) {
    totalBits += 12;
  } else {
    totalBits += 14;
  }

  for (let i = 0; i < length; i += 3) {
    const group = numStr.substring(i, i + 3);
    if (group.length === 3) {
      totalBits += 10; // 3 digits -> 10 bits
    } else if (group.length === 2) {
      totalBits += 7; // 2 digits -> 7 bits
    } else if (group.length === 1) {
      totalBits += 4; // 1 digit -> 4 bits
    }
  }

  return totalBits;
}

function stringToBits(text, version) {
  let totalBits = 4;

  if (version <= 9) {
    totalBits += 9;
  } else if (version <= 26) {
    totalBits += 11;
  } else {
    totalBits += 13;
  }

  const length = text.length;
  for (let i = 0; i < length; i += 2) {
    const group = text.substring(i, i + 2);
    if (group.length === 2) {
      totalBits += 11; // 2 characters -> 11 bits
    } else if (group.length === 1) {
      totalBits += 6; // 1 character -> 6 bits
    }
  }

  return totalBits;
}

function byteToBits(text, version) {
  let bits = 0

  bits += 4;
  
  if (version <= 9) {
    bits += 8;
  } else {
    bits += 16;
  }

  bits += text.length * 8
  return bits
}

function displayQrCapacity() {
  const mode = document.getElementById('mode').value;
  const version = document.getElementById('version').value;
  const errorResistance = document.getElementById('errorResistance').value;
  const inputValue = document.getElementById('inputString').value

  if (mode === 'auto') {
    document.getElementById('inputSize').innerHTML = `Maximun bits: ${QRCodeCapacity[version]['bits'][errorResistance]}`;
    return
  }

  const currentBits = convertToBits(inputValue, version, mode)
  const CurrentQRCodeCapacity = QRCodeCapacity[version][mode][errorResistance]

  const currentLengthHtml = `<span style="${inputValue.length > CurrentQRCodeCapacity ? 'color: red;' : ''}">${inputValue.length}/</span>`
  const currentBitsHtml = `<span style="${currentBits > QRCodeCapacity[version]['bits'][errorResistance] ? 'color: red;' : ''}">${currentBits}/</span>`
  document.getElementById('inputSize').innerHTML = `Length: ${currentLengthHtml}${CurrentQRCodeCapacity} - Bits: ${currentBitsHtml}${QRCodeCapacity[version]['bits'][errorResistance]}`;
}

// EVENT LISTENER
const downloadButton = document.getElementById('download');

downloadButton.addEventListener('click', () => {
  downloadQRCode(qrText, qrSize);
})

// Form submit
document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const text = document.getElementById('inputString').value;
  const errorCorrectionLevel = document.getElementById('errorResistance').value;
  const version = document.getElementById('version').value;
  const mode = document.getElementById('mode').value;
  generateQRCode(text, errorCorrectionLevel, version, mode);
});

// STRING INPUT
document.getElementById('inputString').addEventListener('input', () => {
  displayQrCapacity()
})

// VERSION SELECT
document.getElementById('version').addEventListener('input', () => {
  displayQrCapacity()
})

// MODE SELECT
document.getElementById('mode').addEventListener('input', () => {
  displayQrCapacity()
})

// errorResistance SELECT
document.getElementById('errorResistance').addEventListener('input', () => {
  displayQrCapacity()
})
