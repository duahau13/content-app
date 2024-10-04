---
title: "How to install Docker on Ubuntu servers"
author: "Duong Thu"
date: "2024-9-30"
draft: false
description: "Docker simplifies the process of managing application processes in containers. While containers are similar to virtual machines in certain ways, they are more lightweight and resource-friendly."
categories: ["linux", "docker"]
tags: ["beginner"]
image:
  src: "/img/docker.png"
  alt: "Install Docker on Ubuntu"
slug: "how-to-install-docker-on-ubuntu-server"
---

## Introduction

Docker simplifies the process of managing application processes in containers. While containers are similar to virtual machines in certain ways, they are more lightweight and resource-friendly. This allows developers to break down an application environment into multiple isolated services.
For applications depending on several services, orchestrating all the containers to start up, communicate, and shut down together can quickly become unwieldy. Docker Compose is a tool that allows you to run multi-container application environments based on definitions set in a YAML file. It uses service definitions to build fully customizable environments with multiple containers that can share networks and data volumes.
In this guide, you’ll demonstrate how to install Docker Compose on an Ubuntu 20.04 server and how to get started using this tool.

## Prerequisites

To follow this article, you will need:

- Access to an Ubuntu 20.04 local machine or development server as a non-root user with sudo privileges. If you’re using a remote server, it’s advisable to have an active firewall installed. To set these up, please refer to our Initial Server Setup Guide for Ubuntu 20.04.
- Docker installed on your server or local machine, following Steps 1 and 2 of How To Install and Use Docker on Ubuntu 20.04.

## Step 1 — Installing Docker Compose

To make sure you obtain the most updated stable version of Docker Compose, you’ll download this software from its official Github repository.
First, confirm the latest version available in their releases page. At the time of this writing, the most current stable version is `1.29.2`.

The following command will download the `1.29.2` release and save the executable file at `/usr/local/bin/docker-compose`, which will make this software globally accessible as `docker-compose`:

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Next, set the correct permissions so that the `docker-compose` command is executable:

```
sudo chmod +x /usr/local/bin/docker-compose
```

To verify that the installation was successful, you can run:

```
docker-compose --version
```

You’ll see output similar to this:

```
Output
docker-compose version 1.29.2, build 5becea4c
```
