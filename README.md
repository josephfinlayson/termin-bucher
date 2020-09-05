# Introduction

This application emails you when it finds an available Anmeldung appointment in Berlin.


Diese Anwendung E-Mails Sie, wenn es eine verfügbare Anmeldung Termin in Berlin findet.


## Installation

```shell
$ git clone git@github.com:josephfinlayson/termin-bucher.git
$ cd termin-bucher
$ npm install
$ touch .env```


Sign up for a [Mailgun](https://mailgun.com/signup) account.

Insert your public API key into the .env file to self-host.


```js
mailgun_api_key "your api key"
```


### To run

```shell
$ npm run start
```



Feature set:
- you can enter your email
- you get notified when a termin is available

Tech implementation:
- Email gets put into a DB
- All emails in DB with type - ACTIVE get spammed with appt through mailgun
- Email contains a reset link to mark as disabled in DB



### To deploy

Deploy the kubernetes yamls using kustomise. Requires `ingress-nginx` to be deployed on the cluster.

`kubectl apply -k k8s_config`


---

To grab the amt locations, run

`curl https://service.berlin.de/export/standorte/json/ | jq '[.data[] | {name: .name, standort_id: .id, authority_id: .authority.id, authority_name: .authority.name, services: ( .services | map(.service))} | select(.services[] == "120686") | {location_name: .name, authority_name, authority_id, location_id: .standort_id}] | .' > amts2.json`