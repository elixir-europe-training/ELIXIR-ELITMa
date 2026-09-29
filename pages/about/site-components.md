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

These live in `_includes/` and are not part of ETT. **They are written for any module**, not for one in particular: a module picks them up as soon as it has the content they need (numbered chapters in its sidebar, a pathways file, example pages). If a module doesn't use one yet, it's because it doesn't have that content yet.

| Include | What it does | Where it goes | Parameters |
| --- | --- | --- | --- |
| `module-metadata.html` | Status, time, audience and learning-outcomes box at the top of a chapter | Added automatically by the `module-page` layout (see below); no need to include it by hand | – (reads front matter) |
| `module-chapters.html` | Chapter timeline with the chapter count and total time | A module's main page | `sidebar` |
| `module-pathways.html` | Learning-pathway cards, plus a "full module" card | A module's main page, once the module has a pathways file | `sidebar` |
| `module-pager.html` | A row of numbered chapter circles ending in a trophy (visited chapters marked), previous/next chapter cards (the next card ends in an orange arrow); "Back to chapter" on example pages (also inside a chapter's folder, e.g. Node examples); the pathway bar and its script; the shared checklist script | Added automatically at the bottom of every module page (via `related-pages.html`) | – |
| `module-time.html` | Calculates a module's total time from its chapters | Used by `module-tile.html` and the module main pages | `url` (the module main page) |
| `module-sections.html` | The modules in three groups – Ready to use, In development, Planned – each with a heading, a line of explanation and a grid of cards (no status label on the cards). The group is each module's `status` in `_data/module_types.yml` (ready, in development, planned) | Home page and Modules page | `heading_level` |
| `module-tile.html` | One module card: icon, title, description and total time | Used by `module-sections.html` | `module` |
| `module-tiles.html` | Tiles for a hand-picked list of pages | Any page (currently the main pages of modules still in planning) | `type`, `custom`, `col`, `sort` |
| `module-resources.html` | All resources for a module, grouped by category | A module's "All resources" page | `module_id` |
| `quick-check.html` | One-question check with instant ✓/✗ feedback (behaviour in `site-scripts.html`; the answer is shown without JavaScript) | After teaching an idea in a chapter | `question`, `options` (separated by `\|`), `correct`, `explain` |
| `video.html` | Embedded YouTube video (privacy-enhanced, lazy-loaded) with a direct link | Anywhere in a chapter's text | `youtube`, `title`, `caption` |
| `example-card.html` | Highlighted link card to another page: a lightbulb for real-world examples, a magnifying glass for Dive deeper pages, the module's icon and name for any other module page | Anywhere in a chapter's text; also used for "See it in practice" | `page_id` (or `page_ids` for several side by side), `lead`, `label`, `icon`, `compact` (title only, for in-text mentions) |
| `module-examples.html` | One grid of example cards for every page in a module's examples folder, sorted by title | A module's All examples page | `folder` |
| `example-topics.html` | The "Topics:" line on an example: its `topics` as links to the topic pages | On an example page, under Node and Authors | – |
| `topic-chips.html` | Topic links (chips) that filter a module's examples: All examples plus one per topic, grouped by chapter; the current one is filled | All examples page and topic pages | `sidebar`, `all_url`, `current` |
| `topic-page.html` | Body of a generated topic page: description, chips and a grid of the topic's examples | Used by `_plugins/topic_pages.rb` | – |

## Custom layouts

| Layout | What it does |
| --- | --- |
| `module-page.html` | The default layout for everything under `pages/modules/` (set in `_config.yml`). It adds the metadata box to chapters – pages with a `time` or `status` value – and otherwise uses the theme's `page` layout unchanged. If a page still includes `module-metadata.html` itself, the box isn't added twice. |
| `home.html` | The home page layout with its hero image. |

## Theme overrides

These files have the **same name as an ETT include**, so they replace the theme's version. When ETT is updated, compare each one with the new theme file and carry over any changes – see the ETT guide to [upgrading the theme](https://elixir-belgium.github.io/elixir-toolkit-theme/upgrading_theme).

| Override | Why | What changed |
| --- | --- | --- |
| `related-pages.html` | One kind of box for related pages on module pages, plus the pager | On every module page, in this order: Dive deeper pages under "Dive deeper", real-world examples under "See it in practice", the Further resources table, then any other related page (e.g. another module's chapter) under "Related pages" – all as example cards, the latter with that module's icon – then the pager. Non-module pages keep the theme's tiles. |
| `breadcrumb.html` | Module permalinks are flat (`/01-comms-introduction`), so the theme's URL-based trail only gave "Home › page" | Module pages build Home › Modules › module › [chapter] › [folder, e.g. Node examples] › page from the sidebar. Other pages use the theme's code unchanged. |
| `contributor-card.html` | Different badge colours for leads and contributors | The role badge gets a `contributor-role--<role>` class. |
| `resource-table-page.html` | A simpler resources table for chapters | Replaces the theme's tools table (national resources, registry links) with a compact "Further resources" table – category, resource, description – for the ids in a page's `ref_to_main_resources`, styled to sit quietly at the end of the page. |

The breadcrumb is switched on in `_config.yml` (`theme_variables: breadcrumb: true`). It replaces the theme's grey page-type label above the title. Other theme settings are described in [Configuring the theme](https://elixir-belgium.github.io/elixir-toolkit-theme/configuring_theme).

## Data files

| File | Holds |
| --- | --- |
| `_data/sidebars/<module>.yml` | Chapter order and numbering (see the convention above); `title_url` points to the module main page; `hr: true` draws a divider. See the ETT [navigation structures](https://elixir-belgium.github.io/elixir-toolkit-theme/navigation_structures) for all options. |
| `_data/pathways/<module>.yml` | Learning pathways: `id`, `title`, `description`, `chapters` (page_ids). File name must match the sidebar file. |
| `_data/module_types.yml` | Module tiles: title, description, icon, order. Time is **not** stored here, and `status` is only used until a module has chapters – after that, both are calculated from the chapters. |
| `_data/tool_and_resource_list.yml` | Resources for "Further resources" tables and All resources pages |
| `_data/topics/<sidebar>.yml` | Example topics (controlled vocabulary): `prefix`, then per topic `id`, `title`, `description`, `chapter`, `section`, `section_title`. `_plugins/topic_pages.rb` generates a page per topic (`/<prefix>-topic-<id>`), not in the sidebar. |
| `_data/CONTRIBUTORS.yml` | People; `role: Lead` or `role: Contributor` sets their group and badge |

## Styles

All custom styling is in `_sass/_custom_classes.scss`, in labelled sections. Theme colour and component settings are in `_sass/_bootstrap_variables.scss` and `_sass/_custom_variables.scss` – the ETT [custom branding](https://elixir-belgium.github.io/elixir-toolkit-theme/custom_branding) page lists the variables you can set. Notes that matter when changing them:

* The navigation bar is dark navy, so anything the theme draws in navy on it (the active menu item, the mobile-menu separator) needs a light colour instead – see "Top navigation" in `_custom_classes.scss` and `$topnav-break-color`.
* Text on orange (`#f47d20`) must be dark, not white: white on orange fails contrast.
* The brand orange and blue are too light for **small text** on white or grey. Use the text-safe versions defined in `_bootstrap_variables.scss`: `$link-blue` (`#02678C`) for links and `$accent-text` (`#A84E00`) for orange text such as the time chips. Brand orange stays fine for accents, icons and backgrounds with dark text.
* Links in running text are blue **and underlined**, so they don't rely on colour alone. Buttons, cards, tiles and menus are excluded because they already look clickable – see "Links in running text" in `_custom_classes.scss`.
* Level 3 headings in the page text are royal blue, as the Brand Guidelines ask for headings.
* Inline code (file names, front matter fields) is dark text on a light grey chip (`$code-color` plus "Inline code" in `_custom_classes.scss`) – neutral on purpose, so it can't be mistaken for a link.
* Content cards used in running text (like the example card) must not have a fixed `height: 100%`, or they stretch to the height of the whole page.

## What runs in the reader's browser

`site-scripts.html` (loaded on every page via the `scroll-top.html` override) makes small fixes: it labels checklist boxes for screen readers, makes wide code blocks keyboard-scrollable, and renames the mobile sidebar button to "Module navigation" / "Section navigation" (the theme builds that label from the sidebar file name).

Two small scripts, both in `module-pager.html`, store data only in the reader's own browser (`localStorage`); nothing is sent anywhere.

* **Checklists** remember which boxes a reader ticked, per page.
* **Chapter circles** remember which chapters a reader has opened (`visited-<sidebar>`), so those circles get a ring; the trophy lights up when all have been visited.
* **Learning pathways** remember the chosen pathway (`pathway-<sidebar>`) and where to resume (`pathway-<sidebar>-next`). A link with `?path=<id>` starts a pathway and `?path=none` clears it. While a pathway is active, the pathway navigation replaces the chapter navigation: the same row of circles (the pathway's steps only) and previous/next cards, on an orange "Your pathway" panel.

With JavaScript switched off, checklists simply can't be ticked and the normal previous/next buttons are shown.

## Preview and testing

* Run `bundle exec jekyll serve` (first-time setup: see the ETT README on [running the site locally](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme#locally-using-jekyll)). Restart it after editing `_config.yml` – Jekyll only reads that file at start-up.
* The build must finish without errors; a YAML error in front matter (often an unquoted colon) stops the whole site.
