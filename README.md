# Introduction

This application emails you when it finds an available Anmeldung appointment in Berlin.


Diese Anwendung E-Mails Sie, wenn es eine verfügbare Anmeldung Termin in Berlin findet.


## Installation

```shell
$ git clone git@github.com:josephfinlayson/termin-bucher.git
$ cd termin-bucher
$ npm install
$ touch api-key.js```


Sign up for a [Mailgun](https://mailgun.com/signup) account.

Insert your public API key and email to be notified on into api-key.js.
```js
var api_key = "your api key"
var emails = "user@example.com"
exports.api_key = api_key
exports.emails = emails
```


### To run

```shell
$ node index.js```
