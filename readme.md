Add `localhost.com 127.0.0.1` to /etc/hosts

```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout key.pem -out cert.pem -config req.cnf -sha256

npx http-server -p 443 -S
```

- https://medium.com/@keybaudio/virtual-midi-devices-on-macos-a45cdbdffdaf
- https://flit.github.io/projects/midikeys/
- https://volcanomobile.net/midi-web-tools/midi-clock-online/index.html
