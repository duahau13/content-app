---
title: "How to secure a VPS"
author: "Duong Thu"
date: "2024-9-12"
draft: false
categories: ["linux", "vps"]
tags: ["begginer"]
image:
  src: "/img/cyber-security.jpg"
  alt: "How to strengthen security of a VPS"
slug: "how-to-secure-a-vps"
---

After you have successfully created a Compute Instance, there are a few initial configuration steps you should perform within your new Linux system. This includes updating your system, setting the timezone, configuring a custom hostname, adding a limited user, hardening SSH to prevent unauthorized access, and configuring a firewall. These steps ensure your instance is up to date, secure, and ready for use.

## Before you begin

If you haven't done so already, review the following guides to learn more about using Linode and Compute Instances.

- Get started
- Create a Compute Instance
- FAQs

## Perform system updates

Updating your system frequently is the single biggest security precaution you can take for any operating system. Software updates range from critical vulnerability patches to minor bug fixes and many software vulnerabilities are actually patched by the time they become public. Updating also provides you with the latest software versions available for your distribution.

```
apt update && apt upgrade
```

## Set the timezone

All new Compute Instances are set to UTC time by default. However, you may prefer to use the time zone which you live in so log file timestamps are relative to your local time.

### Check the time

Use the `date` command to view the current date and time according to your server.

```
root@localhost:~# date
Thu Feb 16 12:17:52 EST 2018
```

## Harden SSH access

By default, password authentication is used to connect to your Compute Instance via SSH. A cryptographic key-pair is more secure because a private key takes the place of a password, which is generally much more difficult to decrypt by brute-force. In this section we'll create a key-pair and configure your system to not accept passwords for SSH logins.

### Create and upload your SSH key

To protect your user account with public key authentication, you first need to create an SSH key pair and upload the public key to your server.

### SSH daemon options

Lastly, edit the SSH configuration file to disallow root login and disable password authentication over SSH.

1.Open the SSH configuration file on your Compute Instance using a Linux text editor, such as nano or vim

```
sudo nano /etc/ssh/sshd_config
```

2.Disallow root logins over SSH. This requires all SSH connections be by non-root users. Once a limited user account is connected, administrative privileges are accessible either by using `sudo` or changing to a root shell using `su -`

```
# Authentication:
...
PermitRootLogin no
```

## Next steps

These are the most basic steps to harden any Linux server, but further security layers will depend on its intended use. Additional techniques can include application configurations, using intrusion detection, installing a form of access control, fine tuning sudo access, removing exposed services, and more.
