---
id: installing-on-a-server
title: Installing on a Server
sidebar_label: Installing on Server
---

## Deploying WinBidPro to your Server

This is considered an advanced scenario and this article assumes you are fairly knowledgeable about IT topics such as User Profiles, Group Policies, Roaming data, etc. This article is meant for IT professionals to understand how to deploy WinBidPro.

### Things to know first

**Install location**: `%LocalAppData%\WinBidPro`

**Default Catalog Location**: `%UserProfile%\WinBidPro\15.0`

### Installing WinBidPro

WinBidPro installs **per user**, not machine wide. This allows it to update itself which it does automatically while the program is running. There is not currently an opt-out setting for auto-updates.

:::note
The WinBidPro installer is created using Squirrel -- an open-source project. It's fast, simple, and installs with only user permissions rather than admin permissions. 
:::

There are two options to initially install the program for multiple users:

1. (*recommended*) Using the "WinBidPro Deployment Tool"
2. Log in as each user and run the normal installer for each.

### Using the WinBidPro Deployment Tool

This is a small program meant for server scenarios. When it is run, it will appear in the installed programs under Windows. It adds itself as a startup program via the Windows Registry and will install WinBidPro when a user logs in. Typically when a user logs in for the first time after installing this deployment tool, the program will install within 10-20 seconds and a shorcut will appear on the Desktop for WinBidPro.

:::info
The deployment tool deploys WinBidPro for **all** users on login. See the "deploying for specific users" section below to learn how to make this work for a subset of your users.
:::

:::note
**Troubleshooting**: If the directory `%LocalAppData%\WinBidPro` already exists, the deployment tool will not install the program. If it does not appear to be deploying the program, ensure this directory does not exist.
:::

### Deploying for Only *Some* Users

When it is not desired to deploy the program for all users, the Deployment tool can still be used by editing the registry a little. Follow these steps:

1. Install the WinBidPro Deployment Tool
2. Copy the WinBidProDeployment key/value from `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Run`
3. Install this registry key for WinBidPro users via a Group Policy at the location `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`
4. ​​Log in as one of the users and it should install

### Working with Multiple Server Nodes

The deployment should work fine in load-balancing scenarios where there are multiple server nodes and the user profiles roam from node to node. When a user logs onto a node without the program, the deployment tool will do its work.

## Sharing Catalog Data

To set up a shared location for WinBidPro data, follow these steps.

1. Install the program for at least one user
2. Open the WinBidPro.
3. Log in with your GDS Estimating account (*Note: IT admins could log in with their own account if easier as they will receive trial automatically.*)
4. In the Vendors list that opens on startup, click **Get More Catalogs...** at the top.
5. Download the catalogs desired by your team
6. These catalogs are now in the default location `%UserProfile%\WinBidPro\15.0`. Copy this directory to your desired network location.
7. The copied files should have included the Master.mdb file. Create a new txt file at `%ProgramData%\WinBidPro\15.0\location.txt` and put the absolute path to the Master.mdb in that file in a single line and save it.
8. Get back into WinBidPro and in the Vendors list, change the path of each catalog in the list that should be shared to the correct location
9. Select each catalog to be shared and click **Share Catalog** in the bottom left corner of the Vendors window. This ensures it will be listed for all users.

Done! The data should be shared by all users.

What did we just do in step 7? Each user could point to their own set of catalogs. This is saved in a location.txt file in their roaming directory and is typically managed by WinBidPro via the User Defaults menu within the program. However, WinBidPro checks the %ProgramData% directory for an override. It is a convenient place to store the location for *all* WinBidPro users on the server so you don't need to manually point each user to the shared location one-by-one.