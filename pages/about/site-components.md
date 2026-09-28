---
title: Site components
description: What ELITMa adds on top of the ELIXIR Toolkit Theme – custom includes, theme overrides, data files and in-browser behaviour – for whoever maintains the site.
page_img: /icons/icon-info.svg
contributors: [Xenia Perez Sitja]
---

ELITMa is built on the [ELIXIR Toolkit Theme](https://elixir-belgium.github.io/elixir-toolkit-theme/) (ETT). This page documents everything the site adds or changes on top of it, so it can be maintained and updated safely. For writing content, see [How to contribute](how-to-contribute).

## Design principle: calculate, don't copy

Lists and totals are **built from data that already exists** instead of being typed twice. Chapter lists, times, previous/next links, breadcrumbs and pathway steps all come from the module's sidebar file and each chapter's front matter. When adding a feature, prefer reading those sources to adding a new hand-maintained list.

The sidebar convention everything relies on: **a top-level sidebar item whose title starts with two digits (`01 …`) is a chapter.** Items without a number are extras outside the sequence; items nested under a chapter belong to it.

## Custom includes

These live in `_includes/` and are not part of ETT.

| Include | What it does | Used in | Parameters |
| --- | --- | --- | --- |
| `module-metadata.html` | Status, time, audience and learning-outcomes box at the top of a chapter | Every chapter | – (reads front matter) |
| `module-chapters.html` | Chapter timeline with the chapter count and total time | Module main pages | `sidebar` |
| `module-pathways.html` | Learning-pathway cards, plus a "full module" card | Communication main page | `sidebar` |
| `module-pager.html` | Previous/next chapter buttons with progress; "Back to chapter" on example pages; the pathway bar and its script; the shared checklist script | Bottom of every module page (called by `related-pages.html`) | – |
| `module-time.html` | Calculates a module's total time from its chapters | `module-navigation.html` | `url` (the module main page) |
| `module-navigation.html` | Module tiles with icon, description, status and calculated time | Home and Modules pages | `col` |
| `module-tiles.html` | Tiles for a list of pages | Other module main pages | `type`, `custom`, `col`, `sort` |
| `module-resources.html` | All resources for a module, grouped by category | "All resources" pages | `module_id` |
| `example-card.html` | Highlighted link card to another page | In text, and "See it in practice" | `page_id`, `lead`, `label`, `icon` |

`_layouts/home.html` is also custom: the home page layout with its hero image.

## Theme overrides

These files have the **same name as an ETT include**, so they replace the theme's version. When ETT is updated, compare each one with the new theme file and carry over any changes.

| Override | Why | What changed |
| --- | --- | --- |
| `related-pages.html` | Communication module layout | Communication pages show only real-world examples ("See it in practice") and no related-pages tiles; every module page ends with the pager. Other pages use the theme's code unchanged. |
| `breadcrumb.html` | Module permalinks are flat (`/01-comms-introduction`), so the theme's URL-based trail only gave "Home › page" | Module pages build Home › Modules › module › [chapter] › page from the sidebar. Other pages use the theme's code unchanged. |
| `contributor-card.html` | Different badge colours for leads and contributors | The role badge gets a `contributor-role--<role>` class. |
| `resource-table-page.html` | A simpler resources table for chapters | Replaces the theme's tools table (national resources, registry links) with a "Dive deeper" table – category, resource, description – for the ids in a page's `ref_to_main_resources`. |

The breadcrumb is switched on in `_config.yml` (`theme_variables: breadcrumb: true`). It replaces the theme's grey page-type label above the title.

## Data files

| File | Holds |
| --- | --- |
| `_data/sidebars/<module>.yml` | Chapter order and numbering (see the convention above); `title_url` points to the module main page; `hr: true` draws a divider |
| `_data/pathways/<module>.yml` | Learning pathways: `id`, `title`, `description`, `chapters` (page_ids). File name must match the sidebar file. |
| `_data/module_types.yml` | Module tiles: title, description, icon, status, order. Times are **not** stored here – they are calculated. |
| `_data/tool_and_resource_list.yml` | Resources for "Dive deeper" tables and All resources pages |
| `_data/CONTRIBUTORS.yml` | People; `role: Lead` or `role: Contributor` sets their group and badge |

## Styles

All custom styling is in `_sass/_custom_classes.scss`, in labelled sections. Theme colour and component settings are in `_sass/_bootstrap_variables.scss` and `_sass/_custom_variables.scss`. Notes that matter when changing them:

* The navigation bar is dark navy, so anything the theme draws in navy on it (the active menu item, the mobile-menu separator) needs a light colour instead – see "Top navigation" in `_custom_classes.scss` and `$topnav-break-color`.
* Text on orange (`#f47d20`) must be dark, not white: white on orange fails contrast.
* Content cards used in running text (like the example card) must not have a fixed `height: 100%`, or they stretch to the height of the whole page.

## What runs in the reader's browser

Two small scripts, both in `module-pager.html`, store data only in the reader's own browser (`localStorage`); nothing is sent anywhere.

* **Checklists** remember which boxes a reader ticked, per page.
* **Learning pathways** remember the chosen pathway (`pathway-<sidebar>`) and where to resume (`pathway-<sidebar>-next`). A link with `?path=<id>` starts a pathway and `?path=none` clears it. While a pathway is active, the pathway bar replaces the previous/next buttons.

With JavaScript switched off, checklists simply can't be ticked and the normal previous/next buttons are shown.

## Preview and testing

* Run `bundle exec jekyll serve`. Restart it after editing `_config.yml` – Jekyll only reads that file at start-up.
* The build must finish without errors; a YAML error in front matter (often an unquoted colon) stops the whole site.
