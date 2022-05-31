---
sidebar_position: 1
---

# What's New

## Preconfigure All Alternate Assemblies

In v15, you had to manually enter the extrusion parts of alternate vertical assemblies for each alternate assembly action. There were also a limited number of horizontal assemblies you could configure.

Now in v16, you can configure a framing system with as many vertical and horizontal assemblies as you like, with all parts included. This allows a user to configure various alternate members once, and reuse them as much as they like. You can preconfigure expansion mullions, corner posts, reinforced mullions, and more, and they will be available in the "alternate" command tab.

## Curtain Wall Improvements

v15 was had many short-comings when it came to curtain wall. We've drastically improved the ability to configure curtain wall for accurate cuts of material. We did this this in several ways:

1. Vertical SSG support (horizontal coming soon)
2. Accurate glass sizing with more control over glass bites and SSG joints
3. Accurate pressure plate and face cover cuts
4. Added support for splices with gaps and offsets.

### SSG Support

**Curtain Wall** and **Window Wall** systems have SSG Vertical support. This will help give accurate glass sizes in such systems and accurate pressure plate and face cover cuts. SSG horizontals are not yet supported but support is coming soon.

### Pressure Plate and Face Cover Cuts

Horizontal face cover and pressure plate will account for SSG verticals and run continuous across them. You can also configure gaps at the ends for 100% accurate cuts.

### Splices (Pressure plate and cover)

You can now splice horizontal face cover and pressure plate with a preconfigured offset (where applicable). We give you an easy way to select a center point of a vertical or panel.

### Glass Sizing

Glass sizing is more accurate in Vertical SSG scenarios. You can set glass bites of assemblies to override the system's default to account for special perimeter bite situations. Note: Horizontal SSG is not yet supported but is coming soon.

## Splices

You can configure splices in your systems with gaps and offsets. The drawing commands in the splice command tab will allow splices at any point for verticals, and will snap to center and edge points for horizontal receptors as well as pressure plate and covers. You'll also receive job alerts when cuts are too long and require splices.

## Job Alerts

It can be hard to keep a so many details in your head and be sure that you checked everything. WinBidPro 16 can now help! WinBidPro 16 will perform various checks automatically and alert you to problems, or warn you about potential problems. It does this via the "Job Alerts" view. The kinds of things it can catch are:

* **Misconfigured parts.** In some scenarios we can see when you have entered a part in the wrong component or if the part has some wrong settings
* **Missing system components.** For instance, if you have glass next to an entrance, but there is no pocket filler configured for the door jamb, we'll give you a warning about it.
* **Issues with elevation commands.** For example, if you add an entrance and a later change to the elevation causes a conflict with the entrance.
* **And more!**

Want an alert added for something? Send us suggestions at https://feedback.winbidpro.com/
