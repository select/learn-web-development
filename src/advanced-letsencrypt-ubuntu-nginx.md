title: Let's Encrypt on Ubuntu 16.04 Nginx
author:
  name: Falko Krause
  github: select
  twitter: rockdapus
  url: https://github.com/webpgr/cached-webpgr.js
output: dist/advanced-local-storage-cache.html
<!-- theme: select/cleaver-select-theme -->
theme: ./custom-theme
controls: true

--
# Let's Encrypt on Ubuntu 16.04 Nginx
## ...

--
### Nginx site enabled
First we configure nginx to serve static files from the folder `.well-known`.

This folder will be used by *Let's Encrypt* to identify that you are in control of this server.

It does this by placing a temporary file in that folder and check if it is the one it expects
--
### Nginx site enabled
```bash-blank
remote# touch /etc/nginx/sites-available/myserver.com
remote# nano /etc/nginx/sites-available/myserver.com
```
```
server {
        listen          80;
        server_name     myserver.com abc.myserver.com;

        location ~ /.well-known {
            root /var/www;
            allow all;
        }
        
        …
```

--
### Test if the setup works
```bash-blank
remote# nginx -t
```
if this showed now errors
```bash-blank
remote# service nginx restart
```

--
### Install *Let's Encrypt*

```bash-blank
remote$ sudo su
remote# apt install letsencrypt
```


--
### Create dir and run letsencrypt
```bash-blank
remote# mkdir /var/www/.well-known
remote# apt install letsencrypt
remote# letsencrypt certonly -a webroot --webroot-path=/var/www -d myserver.com -d abc.myserver.com
```
increase security with yet another key file
```
openssl dhparam -out /etc/nginx/ssl/dhparam.pem 2048
```

--
### New secure server

```
server {
        listen 443 default_server ssl;
        server_name     myserver.com;
        ssl_certificate /etc/letsencrypt/live/myserver.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/myserver.com/privkey.pem;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_dhparam /etc/nginx/ssl/dhparam.pem;
        ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';
        ssl_session_timeout 1d;
        ssl_session_cache shared:SSL:50m;
        ssl_stapling on;
        ssl_stapling_verify on;
        add_header Strict-Transport-Security max-age=15768000;
        …
```
