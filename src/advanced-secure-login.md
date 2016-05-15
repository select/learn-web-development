title: Securing your SSH login
author:
  name: Falko Krause
  github: select
  twitter: rockdapus
  url: https://github.com/select/learn-web-development
output: dist/advanced-secure-login.html
theme: ../cleaver-select-theme
<!-- theme: ./custom-theme -->
controls: true

--
# Securing your login
## Simpler and more secure SSH logins

--
### Command line required - <br>get one for Windows
This tutorial requires you to have access to a proper **command line**.

Get one on Windows with [Cygwin](https://www.cygwin.com/)<br>
or the newly announce [Ubuntu bash for Windows](https://msdn.microsoft.com/en-us/commandline/wsl/about).

<img src="commandline.jpg" alt="https://nubon.de/funktionen/einkaufslisten.html replace with similar image if no rights">

--
### Get a cheap V-server

There are 3 kinds of servers you can rent (simplified)

**Managed**: $$$ "all" the software you need is already installed.

**Virtual server**: $ only a basic operating system installed in a *virtual machine*, you install the rest. CPU and RAM are shared with other users, you are guaranteed a certain capacity.

**Dedicated server**: $$$ you are the only user on the server you rent.

--
### Login as root
Once you have rented the server you will get a root (admin) login.
```bash-blank
$ ssh root@SERVER_IP_ADDRESS
```
On the server you can install software as you wish\
using your root privileges

--
### Simiplify the login with an alias
<style type="text/css">
.hint {
    font-size: .6em;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.7em;
}
.hint div {
    display: none;
    position: absolute;
    background: #FFF;
    padding: 15px;
    width: 400px;
    right: 0;
    font-size: 2rem;
}
.hint:hover div {
    display: block;
}
</style>
<div class="hint">What does `~` mean?
  <div>
      `~` is the abbreviation for your home folder `/home/myname`
  </div>
</div>
Create an alias for your server by ceating a SSH config <br>
and entering an alias that you can remember.
```bash-blank
local$ nano ~/ssh/config
```
```
Host myserver
    HostName 123.456.2.42
    User root
```
now you can simply login with
```bash-blank
local$ ssh myserver
```


--
### Always logging in as root is a bad idea
As root you have rights to change everything <br>
without having to use a password.

Let's create a user that needs to a password when 
accessing critial system features.

--
### Set up a new user that can `sudo`
While being logged in we create a new user
```bash-blank
remote$ adduser webuser
… # set password etc
```
Now we allow the user to administer a system by adding him to the `sudo`ers
```bash-blank
remote$ gpasswd -a webuser sudo
```

--
### Disable login as `root` user
Now that we have a user that is more restricted <br> 
we want to disable the login for the `root` user
```bash-blank
remote$ nano /etc/ssh/sshd_config
```
and change the line with `PermitRootLogin` to:
```
PermitRootLogin no
```
Restart SSH to apply the changes!
```bash-blank
remote$ service ssh restart
```

--
### Edit the SSH config to use your new user
Now that we have a more secure user,<br>
exit from the remote server <br>

```bash-blank
remote$ exit
```

and change your SSH config.
```bash-blank
local$ nano ~/ssh/config
```

```
Host myserver
    HostName 123.456.2.42
    User webuser
```

--
### Don't type passwords - use a SSH key
Generate a key file that will be automatically used when you
log in via SSH (it's safer)
```bash-blank
local$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/myname/…
  .ssh/id_rsa): /home/myname/.ssh/id_rsa.myserver
…
```

You will have access to many servers, generate a keyfile **for each
server**!

… not done yet

--
### Use a password on your SSH key
Use a password to protect your SSH key.
```bash-blank
…
Enter passphrase (empty for no passphrase): ***
Enter same passphrase again: ***
```
But does this mean I have to type this password all the time?
Not exactly you will see.

First we will make it impossible to brute force the SSH access.

--
### Now we have a private and a public key

```bash-blank
local$ ls -l ~/.ssh/
-rw-r--r-- 1 me me 3,9K … config
-rw------- 1 me me 1,7K … id_rsa
-rw-r--r-- 1 me me  394 … id_rsa.pub
-rw------- 1 me me 1,8K … id_rsa.myserver
-rw-r--r-- 1 me me  395 … id_rsa.myserver.pub
-rw------- 1 me me  71K … known_hosts
```


--
### Upload the key file
<div class="hint">What does `\` mean?
  <div>
      `\` means that the command continues on the next line
  </div>
</div>

```bash-blank
local$ ssh-copy-id \
 -i ~/.ssh/id_rsa.myserver.pub myserver
```

<div class="left">
  
  Notice the `.pub` ending, this means that this is the <br>
  **public key file**.
  
  <div style="font-size: .7em; position: absolute; bottom: 0; ">
    [ssh-copy-id](https://github.com/beautifulcode/ssh-copy-id-for-OSX) for OSX <br>
    Image from [Wikipedia](https://en.wikipedia.org/wiki/Public-key_cryptography)
  </div>
</div>
<div class="right">
  <img src="Public_key_encryption.svg.png" alt="asynchronous encryption">
</div>


--
### What happens on login
<style type="text/css">
.sshagent {
  width: 380px!important;
}
</style>
<div class="left">
  <img src="sshagent1.gif" class="sshagent"><br>
  <img src="sshagent2.gif" class="sshagent"><br>
  <img src="sshagent3.gif" class="sshagent"><br>
  <div style="font-size: .7em; position: absolute; bottom: 0; ">
    Images from [Steve Friedl's Unixwiz.net](http://www.unixwiz.net/techtips/ssh-agent-forwarding.html)
  </div>
</div>
<div class="right">
  <br>
  <img src="ssh-pagent-prompt.gif" class="sshagent"><br>
  <img src="sshagent4.gif" class="sshagent"><br>
  <img src="sshagent5.gif" class="sshagent"><br>
</div>

--
### Disable login with passwords
Now that we have a secure key file we want to disable all
logins with a password.
```bash-blank
local$ ssh myserver
… # enter your password for the ssh key
… # don't allow your OS to unlock on boot-login
remote$ sudo su
… # enter your password for the webuser
remote-root$ nano /etc/ssh/sshd_config
```
add the following line (look first if it is already present)
```
PasswordAuthentication no
```

--
### SSH password only once per session
Your OS will remember the password for the whole session (until you shut down your computer)

```bash-blank
remote-root$ exit
remote$ exit
```
Log out of the remote server.<br>
You can also use <kbd>ctrl</kbd><kbd>D</kbd> instead of typing `exit`

Now log in again

```bash-blank
local$ ssh myserver
```

--
### Use a password manager
Now you have 2 new passwords that you would have to remember, but **don't** you will just **use a weak passwords or forget your password**.

Instead use a password manager like [KeePassX](https://www.keepassx.org/)<br>
and generate long passwords like
```
Fsow@/`MM#msVwk_vD~Vz_eH; M>yPQ@&3+:6Q*(>e5#0T o(`xe5,aG?{s-{8~
```

Use one strong + long password that you will remember because you type it alot.

--
### KeePass works on all systems

On Windows / OS X / iOS [KeePass](https://keepass.info)

On Android [KeePassDroid](https://play.google.com/store/apps/details?id=com.android.keepass&hl=en)

There are sever other variants that should work too

--
### Sync over your own OwnCloud

Now that you have come so far …

Don't trust a company like LastPass
to not 'hand out' your passwords

Set up [OwnCloud](https://owncloud.org/) on your server and sync your password vault to all devices.

--
### Add aditional users
To add access for additional users

- Let them create a new SSH key
- Make sure that they use a passphrase
- Upload their key file
- Add them to `sudo`ers if necessary

--
### When your SSH agent doesn't send the right key

```
Host github.com
    IdentityFile ~/.ssh/id_rsa.github
```
You can tell your ssh agent to send the right keyfile

--
### Advanced topics not coverd, but interesting
- Agent Forwarding <br>
keys from `local$` can be forwared when 
```bash-blank
local$ ssh remote
remote$ ssh remote2
```
- Hardware authentication devices like [YubiKey](https://www.yubico.com/products/yubikey-hardware/)

--
### (Not so) stupid things to avoid

- Not posting your password by accident into a chat window.
- Checking a key into a [github repository](https://it.slashdot.org/story/13/01/25/132203/github-kills-search-after-hundreds-of-private-keys-exposed).
- Not [locking your computer](http://www.howtogeek.com/57552/the-10-most-ridiculously-awesome-geeky-computer-pranks/) when you get a coffee.
- Let somebody stand behing you [shoulder picking](https://goo.gl/spDbD9) your password.


--
### All commands

```bash-blank-small
$ ssh root@SERVER_IP_ADDRESS
local$ nano ~/ssh/config
… Host myserver
…    HostName 123.456.2.42
…    User root
local$ ssh myserver
remote$ adduser webuser
… # set password etc
remote$ gpasswd -a webuser sudo
remote$ nano /etc/ssh/sshd_config
… PermitRootLogin no
remote$ service ssh restart
remote$ exit
local$ nano ~/ssh/config
… Host myserver
…    HostName 123.456.2.42
…    User webuser
local$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/myname/…
  .ssh/id_rsa): /home/myname/.ssh/id_rsa.myserver
Enter passphrase (empty for no passphrase): ***
Enter same passphrase again: ***
…
local$ ssh-copy-id -i ~/.ssh/id_rsa.myserver.pub myserver
local$ ssh myserver
… # enter your password for the ssh key
… # don't allow your OS to unlock on boot-login
remote$ sudo su
… # enter your password for the webuser
remote-root$ nano /etc/ssh/sshd_config
… PasswordAuthentication no
remote-root$ exit
remote$ exit
… # or use use ctrl+D instead of typing exit
local$ ssh myserver
```

--
### Literature

- https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04
- http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
- https://github.com/beautifulcode/ssh-copy-id-for-OSX
- https://owncloud.org/
- https://www.cygwin.com/
- https://msdn.microsoft.com/en-us/commandline/wsl/about
- https://www.yubico.com/products/yubikey-hardware/
<style type="text/css">
#literature + ul {
  font-size: 0.7em;
}
</style>
