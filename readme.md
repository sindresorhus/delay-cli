# delay-cli

> Delay execution for a given duration

Similar to the [`sleep`](https://en.wikipedia.org/wiki/Sleep_(Unix)) command, but cross-platform and with support for human-readable durations.

## Install

```sh
npm install --global delay-cli
```

## Usage

```
$ delay --help

  Usage
    $ delay <duration>

  Examples
    $ delay 4.3 && echo 🦄
    $ delay 2s && echo 🦄
    $ delay 500ms && echo 🦄
    $ delay 1m 30s && echo 🦄

  The duration can be a number in seconds or a human-readable duration like "1h 30m".
```

The duration can be specified as:
- A number in seconds: `2`, `4.3`, `0.5`
- Human-readable format: `500ms`, `2s`, `1m`, `1h30m`, `1m 30s`, `2 days 5 hours`

Supported units: `ns`, `ms`, `s`, `m`, `h`, `d`, `w` (and their long forms like `seconds`, `minutes`, etc.)

## Related

- [delay](https://github.com/sindresorhus/delay) - API for this package
- [parse-duration-ms](https://github.com/sindresorhus/parse-duration-ms) - Parse duration strings to milliseconds
