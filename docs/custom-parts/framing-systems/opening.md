---
title: Opening Options Tab
sidebar_position: 5
---

:::info
    `Adapters` here refer to operable window adapters (vents) and exist to fill the need to track operable window parts.
    `Glass Adapters` are more completely handled in the `Glazing Options` tool tab. 
:::

---

A tab added to handle and configure stop and vent adapters options that can be applied automatically or manually to appropriate openings.

## Components

This window has dedicated views for `Stops` and `Operable Window Assemblies` components. These are the same as the ones in the `Components` tab and updating either of these will update both.

* See [Working with Components](../components) for more details on how to configure these assembly components.


##  Adding New Option

<div class="app-img"><img src="/screenshots/configuration/config-frame-openings.png"/></div>


- `Option #` - A customizable name appearing in the editor while using the Stop/Adapter tool tab.

- `Type:` - Determines which component list to use.
    - `Glass Stops` - Can be applied to any opening.
    - `Operable Window Adapters` - Can only be applied to operable windows.

- `Assign For` - Options to cover complex part assignment needs.
    - `All Sides` - The same assembly used for all sides.
    - `Horizontals and Verticals` - The Left and Right share an assembly assignment and the top and bottom share one.
    - `Each Side` - Each side gets assigned an assembly independently.

- `Auto Applications` - If checked the option will be applied to all opening using this system.
    - Apply as default to all Lites ( not operable windows ). 
    - Apply as default to all Operable Window Openings ( not operable windows ). 

- `Horizontals/Verticals Continuous` - Choose which sides should run the full length of the opening and which ones will be cut.

- `+ Add New Option` - Click to add additional option variations that you might apply specifically.

### Configuring Opening Options

The assembly dropdown is where you select the assembly to apply for this option.
- `Default` - Leaves the assembly blank.

- Configured Assemblies - Lists all the configured assemblies available for this option.

- `*Add New...`* - Opens up a view to add a new assembly for the selected type.
<div class="app-img"><img src="/screenshots/configuration/frame-opening-assemblies.png"/></div>

### Applying a New Assembly 
Once you have options configured, you can apply them directly to your elevations using tool tabs.

* See the [Stop/Adapter tool tab](../../drawing-elevations/stopadapter) for more details.











