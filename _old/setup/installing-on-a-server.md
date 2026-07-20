---
id: installing-on-a-server
title: Installing on a Server
sidebar_label: Installing on Server
---

## Deploying WinBidPro to your Server

This is considered an advanced scenario and this article assumes you are fairly knowledgeable about IT topics such as User Profiles, Group Policies, Roaming data, etc. This article is meant for IT professionals to understand how to deploy WinBidPro.


### Installing WinBidPro

WinBidPro installs **per user**, not machine wide, to `%LocalAppData%\WinBidPro16`. This allows it to update itself which it does automatically when starting the program. You cannot opt-out of updates and blocking the updates will cause the program fail as we make changes and improvements to the interfaces on our server and app.

:::note
The WinBidPro installer is created using [Squirrel -- an open-source project](https://github.com/clowd/Clowd.Squirrel/tree/master). It's fast, simple, and installs with only user permissions rather than admin permissions. 
:::

There are a few options to install the program for multiple users. Two common ones are:

1. Using the "WinBidPro Deployment Tool"
2. Log in as each user and run the normal installer for each.

### Using the WinBidPro Deployment Tool

This is a small program meant for server scenarios. When it is run, it will appear in the installed programs under Windows. It adds itself as a startup program via the Windows Registry that simply installs WinBidPro when a user logs in. Typically when a user logs in for the first time after installing this deployment tool, the program will install within 10-20 seconds and a shorcut will appear on the Desktop for WinBidPro.

If you go this route, it's best to run a nightly script that checks for updates. Download the file at `https://files.gdsestimating.com/v16/install/stable/RELEASES` and check the last line of the file for a newer version than the latest. If a newer one is found, install the latest Deployment Tool at `https://files.gdsestimating.com/v16/install/stable/WinBidPro16Setup_DeploymentTool.msi`

:::info
The deployment tool deploys WinBidPro for **all** users on login. See the "deploying for specific users" section below to learn how to make this work for a subset of your users.
:::

:::note
**Troubleshooting**: If the directory `%LocalAppData%\WinBidPro` already exists, the deployment tool will not install the program. If it does not appear to be deploying the program, ensure this directory does not exist.
:::

### Using the Deployment Tool for Only *Some* Users

When it is not desired to deploy the program for all users, the Deployment tool can still be used by editing the registry a little. Follow these steps:

1. Install the WinBidPro Deployment Tool
2. Copy the WinBidProDeployment key/value from `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Run`
3. Install this registry key for WinBidPro users via a Group Policy at the location `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`
4. ​​Log in as one of the users and it should install

### Working with Multiple Server Nodes

The deployment should work fine in load-balancing scenarios where there are multiple server nodes and the user profiles roam from node to node. When a user logs onto a node without the program, the deployment tool will do its work.