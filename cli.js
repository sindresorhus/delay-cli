#!/usr/bin/env node
'use strict';
const meow = require('meow');
const ProgressBar = require('progress');
const chalk = require('chalk');

const cli = meow(`
  Usage
  $ delay <seconds> [options]

  Options
  --width, -w    Width of progress bar [default: "20"] in chars
  --color, -c    Color of progress bar [default: "cyan"]
  --style, -s    Style of progress bar [default: ":bar"]

  Example
  $ delay 4.3 && echo 🦄
  $ delay 5 -w=30 -c=red -s="[:bar] :etas left"
`, {
  input: {
    type: 'number'
  },
  flags: {
    width: {
      type: 'number',
      alias: 'w',
      default: 20
    },
    color: {
      type: 'string',
      alias: 'c',
      default: 'cyan'
    },
    style: {
      type: 'string',
      alias: 's',
      default: ':bar'
    }
  }
});

const [seconds] = cli.input;
const {width, color, style} = cli.flags;

if (seconds === undefined) {
  console.error('Specify the delay');
  process.exit(1);
}

let chalked;
try {
  chalked = chalk[color](style);
} catch (error) {
  console.error('Invalid color');
  process.exit(1);
}

const bar = new ProgressBar(chalked, {
  total: width,
  complete: '▓',
  incomplete: '░'
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, seconds * 1000 / width);
