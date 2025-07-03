---
title: Cover Page Feature Guide
description: Complete guide to creating and managing cover pages in WinBidPro
sidebar_label: Cover Page
---

# Cover Page Feature Guide

## Introduction

The Cover Page feature in WinBidPro allows you to add a professional, customizable cover sheet to your shop drawing sets. Cover pages can include project details, logos, and other key information, making your submittals look polished and consistent.

## Navigation: Accessing the Cover Page Editor

Navigate to the Cover Page Editor through the `Drawings` menu item click `Cover Page...`.
  <details>
  <summary>Screenshot Showing Location</summary>

  ![Cover Page Editor Location](/screenshots/cover-page-editor-location.png)
  *Figure: Navigation to the Cover Page Editor*

  </details>

## Cover Page Overview
<!-- screenshot with an overview of each section -->
![Cover Page Editor Location](/screenshots/cover-page-editor-legend.png)

### 1. `Browse Templates...` 
Opens a file explorer to select a DWG or DXF file to be used as a template dictating where the text and image elements are displayed.
### 2. Download Templates
A manual download button that adds any missing templates from our server missing from your local documents.
### 3. `Switch Profiles...` 
Opens a dropdown where you can select an already saved profile to switch to.
### 4. `Save For Job` 
Saves the current profile state to the job.
### 5. Profile Managment 
Profiles let you save and reuse cover page settings across jobs.
  - `Save As New Profile...` Save the current state minus the job specific data to a new profile.
  - `Select Default Profile...` Choose a saved profile that will be used as default for new jobs on open.  
  - `Update Saved Profile` Prompts to confirm that you want to update the profile in question.  
  - `Delete A Profile...` Delete a saved profile.
  :::warning Profile Limitation
  Job and Schedules tab information is not saved to cover page profiles. Only Notes, Titleblock, and Images are preserved.
  :::

### 6. Page Setup 
Contains printer specific settings saved to the cover page profile.

### 7. Margins 
The v16 templates are designed to have a 0.5in margin. Keeping it simple you can think of this value as the white space from the bottom and left of the sheet to the template border.

### 8. `Show Text Anchors` 
Enable this toggle button to view the template anchors in hot pink.

![Show Anchors Enabled](/screenshots/cover-page-anchors.png)
*Figure 2: Cover Page View with anchors displayed*

### 9. Job & Schedules 
These fields only save to the current jobs cover page profile and clicking the refresh button re-generates the automatically generated data.
> **Remember**: Cover page profiles are reusable templates, while job-specific settings are unique to each project.

### 10. Notes 
These fields save to all profiles and clicking the refresh button resets the value to its last save. In the template files they are created as multiline text entities that contain an keyword surrounded by braces (e.g `{NOTES_TITLE}` `{NOTES_BODY}`).

### 11. Title Block 
These fields save to all profiles and clicking the refresh button resets the value to its last save. In the template file they are attribute definitions with a special consideration to their justification using Top, Middle or Bottom options only as they are turned into multiline text entities by WinBidPro's CAD engine. Since attribute defintions cannot have spaces we replace them with underscores, braces are not allowed in attribute names. (e.g `JOB_NAME_TITLE` `JOB_NAME_BODY`)

### 12. Images 
  - Image dropdowns are populated from job contacts (Contractor, Developer, Architect) and the Images folder (`Documents/WinBidPro/16/Images/`).
  - Supported formats: JPG, JPEG, PNG (max 400KB)
  - Add custom images via the Browse button
  - Images not the same ratio as the IMAGE_PLACEHOLDER get streched or shrunk to fit so editing the image to be the correct ratio could be important for the visuals.
  
  :::info Custom IMAGE_PLACHOLDER
  To create a custom image placeholder.
    - We use AutoCAD LT and create a block with a name like IMG_PLACEHOLDER_WHAT_YOU_WANT The key here is that the program is looking for the IMG_PLACEHOLDER part of the block name to discover image blocks.
    - Next create a rectangle of the desired image height/ratio. 
    - Then add some text with the block name at the center of the block. This is a superflous and only here for us to see where the Image Anchors exist when `Show Text Anchors` is true.
  :::

### 13. Export Options.
    - `DWG` - Images are saved as resources with the DWG
    - `DXF` - Images are saved as resources with the DXF
    - `Print`

## Cover Page Templates (DWG Files)
Cover pages are based on DWG templates. These templates define the layout and anchor points for dynamic content.

- **Editing in AutoCAD LT:** You can open templates in AutoCAD LT to adjust anchors and layout.
- **Attribute Justification:**
  :::info Important
  Attribute justification must be set to Top Left, Middle, or Right to prevent conversion issues.
  :::

## Shop Drawings Integration
- Cover page is automatically scaled to fit printer settings
- Appears as the first sheet in the shop drawing set
- Scaling warnings are shown if needed