# pretty-delay-cli

> Delay execution for a given amount of seconds, prettily.

Similar to the [`sleep`](https://en.wikipedia.org/wiki/Sleep_(Unix)) command, but cross-platform, and looks great doing it.

This is basically a fork of [@sindresorhus' delay-cli](https://www.npmjs.com/package/delay-cli) with colored progress bar added.


## Install

```
$ npm i -g pretty-delay-cli
```


## Usage

```
  Usage
  $ delay <seconds> [options]

  Options
  --width, -w    Width of progress bar [default: "20"] in chars
  --color, -c    Color of progress bar [default: "cyan"]
  --style, -s    Style of progress bar [default: ":bar"]

  Example
  $ delay 4.3 && echo 🦄
  $ delay 5 -w=30 -c=red -s="[:bar] :etas left"
```


## Related

- [delay](https://github.com/sindresorhus/delay) - API for this module


## License

MIT
