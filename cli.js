#!/usr/bin/env node
'use strict';
const meow = require('meow');

const cli = meow(`
  Usage
  $ delay <seconds>

  Example
  $ delay 4.3 && echo 🦄
`, {
  input: {
    type: 'number'
  }
});

let [seconds] = cli.input;

if (seconds === undefined || isNaN(seconds)) {
  console.error('Specify the delay');
  process.exit(1);
}

const font = [
  [`  ▄▄▄▄▄▄▄▄▄  `,
   ` ▐░░░░░░░░░▌ `,
   `▐░█░█▀▀▀▀▀█░▌`,
   `▐░▌▐░▌    ▐░▌`,
   `▐░▌ ▐░▌   ▐░▌`,
   `▐░▌  ▐░▌  ▐░▌`,
   `▐░▌   ▐░▌ ▐░▌`,
   `▐░▌    ▐░▌▐░▌`,
   `▐░█▄▄▄▄▄█░█░▌`,
   ` ▐░░░░░░░░░▌ `,
   `  ▀▀▀▀▀▀▀▀▀  `],
  [`    ▄▄▄▄     `,
   `  ▄█░░░░▌    `,
   ` ▐░░▌▐░░▌    `,
   `  ▀▀ ▐░░▌    `,
   `     ▐░░▌    `,
   `     ▐░░▌    `,
   `     ▐░░▌    `,
   `     ▐░░▌    `,
   ` ▄▄▄▄█░░█▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀▀▀ `],
  [` ▄▄▄▄▄▄▄▄▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀█░▌`,
   `          ▐░▌`,
   `          ▐░▌`,
   ` ▄▄▄▄▄▄▄▄▄█░▌`,
   `▐░░░░░░░░░░░▌`,
   `▐░█▀▀▀▀▀▀▀▀▀ `,
   `▐░█▄▄▄▄▄▄▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀▀▀ `],
  [` ▄▄▄▄▄▄▄▄▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀█░▌`,
   `          ▐░▌`,
   ` ▄▄▄▄▄▄▄▄▄█░▌`,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀█░▌`,
   `          ▐░▌`,
   ` ▄▄▄▄▄▄▄▄▄█░▌`,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀▀▀ `],
  [` ▄         ▄ `,
   `▐░▌       ▐░▌`,
   `▐░▌       ▐░▌`,
   `▐░▌       ▐░▌`,
   `▐░█▄▄▄▄▄▄▄█░▌`,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀█░▌`,
   `          ▐░▌`,
   `          ▐░▌`,
   `          ▐░▌`,
   `           ▀ `],
  [` ▄▄▄▄▄▄▄▄▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   `▐░█▀▀▀▀▀▀▀▀▀ `,
   `▐░█▄▄▄▄▄▄▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀█░▌`,
   `          ▐░▌`,
   `          ▐░▌`,
   ` ▄▄▄▄▄▄▄▄▄█░▌`,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀▀▀ `],
  [` ▄▄▄▄▄▄▄▄▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   `▐░█▀▀▀▀▀▀▀▀▀ `,
   `▐░▌          `,
   `▐░█▄▄▄▄▄▄▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   `▐░█▀▀▀▀▀▀▀█░▌`,
   `▐░▌       ▐░▌`,
   `▐░█▄▄▄▄▄▄▄█░▌`,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀▀▀ `],
  [` ▄▄▄▄▄▄▄▄▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀█░▌`,
   `         ▐░▌ `,
   `        ▐░▌  `,
   `       ▐░▌   `,
   `      ▐░▌    `,
   `     ▐░▌     `,
   `    ▐░▌      `,
   `   ▐░▌       `,
   `    ▀        `],
  [` ▄▄▄▄▄▄▄▄▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   `▐░█▀▀▀▀▀▀▀█░▌`,
   `▐░▌       ▐░▌`,
   `▐░█▄▄▄▄▄▄▄█░▌`,
   ` ▐░░░░░░░░░▌ `,
   `▐░█▀▀▀▀▀▀▀█░▌`,
   `▐░▌       ▐░▌`,
   `▐░█▄▄▄▄▄▄▄█░▌`,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀▀▀ `],
  [` ▄▄▄▄▄▄▄▄▄▄▄ `,
   `▐░░░░░░░░░░░▌`,
   `▐░█▀▀▀▀▀▀▀█░▌`,
   `▐░▌       ▐░▌`,
   `▐░█▄▄▄▄▄▄▄█░▌`,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀█░▌`,
   `          ▐░▌`,
   ` ▄▄▄▄▄▄▄▄▄█░▌`,
   `▐░░░░░░░░░░░▌`,
   ` ▀▀▀▀▀▀▀▀▀▀▀ `]
];

const fontHeight = font[0].length;
const fontWidth = font[0][0].length;
const maxLen = seconds.toString().length;

const getNumerals = num => {
  const str = num.toString();
  const padding = str.length < maxLen ? ' '.repeat((maxLen - str.length) * fontWidth) + '\n' : '\n';
  let out = '';
  for (let b = 0; b < fontHeight; b++) {
    for (let a = 0; a < str.length; a++) {
      out += font[parseInt(str[a])][b];
    }
    out += padding;
  }
  return out;
};

const cursorUp = () => {
  for (let a = 0; a < fontHeight; a++) {
    process.stdout.write('\x1B[K\x1B[1A\r');
  }
};

const wait = duration => {
  return new Promise(resolve => setTimeout(resolve, duration * 1000));
};

const output = num => {
  process.stdout.write(getNumerals(num));
};

(async () => {
  if (seconds < 1) {
    output(1);
    await wait(seconds);
  } else {
    const remainder = seconds - Math.floor(seconds);
    seconds = Math.floor(seconds);
    output(seconds);
    await wait(remainder);
    while (seconds > 0) {
      await wait(1);
      seconds--;
      cursorUp();
      output(seconds);
    }
  }
  cursorUp();
  output(0);
})();
