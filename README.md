# WebTelnet

WebTelnet is a proxy server to bridge websocket to telnet, enable visiting telnet servers with browsers.

## Purpose

WebTelnet can be used to:

* Visit telnet servers with browser.
* Play MUD game with browser.

## Install

```bash
$ [sudo] npm install -g webtelnet
```

## Usage

```bash
$ webtelnet <http-port> <telnet-port> [-h <telnet-host>] [-w <path/to/www>]
```

* By default, telnet-host is 127.0.0.1. You can also proxy to other hosts.
* By default, path/to/www point to WebTelnet web app. You can use customized web app, for example, a web app optimized for specific MUD.

Example, if you have a MUD server listening on port 4000, to map to http port 8080:

```bash
$ webtelnet 8080 4000
```

Or run it with forever,
```bash
$ forever start `which webtelnet` 8080 4000 -w /home/liming/es2-mudlib/www
```

Then, use a browser to visit the web: http://your-host:8080/

## Screenshot

Playing MUD with PC broswer:

![webmud-pc](https://github.com/mudchina/webtelnet/raw/master/docs/webmud-pc.jpg)

Playing MUD with mobile broswer on iPhone6:

![webmud-mobile](https://github.com/mudchina/webtelnet/raw/master/docs/webmud-ios.jpg)

## Credits

Created by Raymond Xie, published under MIT license.
