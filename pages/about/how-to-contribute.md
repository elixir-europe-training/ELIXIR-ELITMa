---
title: How to contribute
description: How to write and add a chapter to an ELITMa module, with a copy-paste kit of the page components.
page_img: /icons/icon-info.svg
contributors: [Xenia Perez Sitja]
---

ELITMa modules are written by people from the Nodes who have done the work. This page explains how a chapter is put together and gives you the building blocks to copy. For how the machinery behind them works, see [Site components](site-components).

The site is built on the [ELIXIR Toolkit Theme](https://elixir-belgium.github.io/elixir-toolkit-theme/) (ETT). This page covers what is specific to ELITMa; for general formatting – headings, tables, links, images, code – see the ETT [Markdown cheat sheet](https://elixir-belgium.github.io/elixir-toolkit-theme/markdown_cheat_sheet).

{% include callout.html type="tip" content="The fastest way to start is to copy an existing chapter and change it. Everything below works in any module – if you want to see a component in context, the Communication module has an example of each." %}

## Anatomy of a chapter

A module is a set of numbered **chapters** (`01`, `02`, …), plus optional **real-world example** pages and an **All resources** page. The module's main page is its orientation page: it introduces the module and lists the chapters, built automatically from the sidebar.

### Front matter

Every chapter starts with front matter like this:

```yaml
---
title: Understanding your audience
description: One sentence for tiles and the chapter list.   # keep it short
summary: A longer intro shown under the title.
page_id: mod_comm_2            # unique; used for links, pathways and examples
type: Communication            # the module type
sidebar: module-communication  # the module's sidebar file in _data/sidebars/
page_img: /icons/icon-module-communication.svg
time: 20 minutes               # used to calculate module and pathway totals
status: ready
status_badge: success
audience: [Communications Officers, Project Managers]
learning_outcomes:
  - Identify and prioritise your Node's key stakeholder groups
related_pages:
  Real_world_example: [comm-ex-matrix]   # example pages: shown as "See it in practice" cards
ref_to_main_resources:
  - converge-comms                       # ids from _data/tool_and_resource_list.yml
---
```

{% include callout.html type="warning" content="If a description or summary contains a colon followed by a space, wrap the whole value in double quotes, or the site will not build." %}

`related_pages` can also list other pages by type (for example `Data management: [mod_dm_3]`); most modules show these as "Related pages" tiles at the bottom. The Communication module deliberately doesn't, because its chapters are already connected by the previous/next buttons and links in the text.

The ETT documentation lists [every front matter field the theme understands](https://elixir-belgium.github.io/elixir-toolkit-theme/page_mechanics#possible-metadata-attributes-of-a-page).

Write `time` as minutes (`15 minutes`, `60 minutes`). The chapter list, the module tiles on the home page and the pathway cards all add these up, so there is no total to keep in sync by hand.

### Adding the chapter to the module

Add the chapter to the module's sidebar file in `_data/sidebars/`. **The number at the start of the title is what makes it a chapter:** it puts the page in the chapter list, the previous/next buttons and the breadcrumb.

```yaml
subitems:
  - title: 02 Understanding your audience   # two-digit number = a chapter
    url: /02-comms-audience
  - title: All resources                    # no number = an extra, outside the sequence
    url: /comms-all-resources
    hr: true                                # draws a divider line above this item
```

Renumber by editing the sidebar; nothing else needs to change. For all sidebar options, see [Sidebar](https://elixir-belgium.github.io/elixir-toolkit-theme/navigation_structures#sidebar) in the ETT documentation.

### The metadata box

You don't need to add it: every chapter gets the status, time, audience and learning-outcomes box at the top automatically, from its front matter. It appears on any module page with a `time` or `status` value, so example pages and a module's main page don't get one.

## Reusable components

Use these to give chapters structure. Each one below shows the code to copy, then how it renders.

### Links

Write links in normal Markdown. They are styled automatically – blue and underlined, so they are readable and don't rely on colour alone – so don't add colours or HTML to them.

* **Internal pages:** use the page's file name without `.md`, e.g. `(05-comms-accessibility)`. On a module's **main page** (which lives one folder deeper, at `/modules/<module>/`), write `({% raw %}{{ '/05-comms-accessibility' | relative_url }}{% endraw %})` instead, or the link will point to the wrong place.
* **External sites:** use the full address. An icon marking external links is added automatically.
* **Link text says where the link goes:** "read the ELIXIR Brand Guidelines", not "click here" or a bare URL. Screen-reader users often jump from link to link, so each one must make sense on its own.
* **Intranet pages:** say so in the text, because readers outside the consortium can't open them.

```markdown
See [Chapter 5: Accessibility](05-comms-accessibility) before you publish.
Download the [ELIXIR Brand Guidelines (PDF)](https://elixir-europe.org/sites/default/files/documents/elixir-brand-guidelines-2025.pdf).
```

**Renders as:**

See [Chapter 5: Accessibility](05-comms-accessibility) before you publish.
Download the [ELIXIR Brand Guidelines (PDF)](https://elixir-europe.org/sites/default/files/documents/elixir-brand-guidelines-2025.pdf).

For more link options, see [Links](https://elixir-belgium.github.io/elixir-toolkit-theme/markdown_cheat_sheet#links) in the ETT documentation.

### Callouts

Provided by the theme. Use `note`, `tip`, `important` or `warning`, and keep them rare – a page with one callout reads like a chapter; a page with six reads like an alarm system. The ETT documentation shows more options, such as [custom titles, longer content and nested callouts](https://elixir-belgium.github.io/elixir-toolkit-theme/markdown_cheat_sheet#callouts).

```liquid
{% raw %}{% include callout.html type="tip" content="Start from an approved template, not a blank page." %}{% endraw %}
```

**Renders as:**

{% include callout.html type="tip" content="Start from an approved template, not a blank page." %}

A callout's text is printed as-is, so Liquid written straight into it (anything in `{% raw %}{{ }}{% endraw %}`) won't work. To put a link built with `relative_url` in a callout, build the text first with `capture`:

```liquid
{% raw %}{% capture impact_tip %}Assessing impact is covered by the [Impact module]({{ '/modules/impact/' | relative_url }}).{% endcapture %}
{% include callout.html type="tip" content=impact_tip %}{% endraw %}
```

### Exercise box

Wrap every exercise in an exercise box so learners can spot it. The `markdown="1"` part lets you write normal Markdown inside.

```html
<div class="exercise-box" markdown="1">
### Quick exercise
Think of a recent project or result from your Node.

* Build a priority matrix for that particular case.
* For each group, write one sentence that would catch their attention.
</div>
```

**Renders as:**

<div class="exercise-box" markdown="1">
### Quick exercise
Think of a recent project or result from your Node.

* Build a priority matrix for that particular case.
* For each group, write one sentence that would catch their attention.
</div>

### Quick check

A one-question check with instant feedback, right after you've taught an idea – the learner answers, sees ✓ or ✗ and a one-line explanation. Give two to four answers separated by `|`, and say which one is right (1 = first). Keep the explanation to a sentence or two; it's shown after any answer.

```liquid
{% raw %}{% include quick-check.html question="Orange text on a white background – does it pass the contrast check?" options="Yes – it's an ELIXIR colour|No – it's too pale for text" correct="2" explain="At 2.7:1 it's well below the 4.5:1 that normal text needs." %}{% endraw %}
```

**Renders as:**

{% include quick-check.html question="Orange text on a white background – does it pass the contrast check?" options="Yes – it's an ELIXIR colour|No – it's too pale for text" correct="2" explain="At 2.7:1 it's well below the 4.5:1 that normal text needs." %}

Chapter 8 shows a whole chapter built as short lessons: an idea, one visual, a quick check, and the detail tucked into "Go deeper" panels.

### Checklists

Start list items with `- [ ]`. Readers can tick them, and their ticks are remembered in their browser.

```markdown
- [ ] Is the official logo present and correctly used?
- [ ] Are the colours and fonts from the ELIXIR palette?
```

**Renders as:**

- [ ] Is the official logo present and correctly used?
- [ ] Are the colours and fonts from the ELIXIR palette?

### Expandable panel

For a checklist, a worked answer or a how-to that not every reader needs. Keep the blank lines around the content. This is the theme's [collapsible text](https://elixir-belgium.github.io/elixir-toolkit-theme/markdown_cheat_sheet#a-collapsible-piece-of-text), styled for ELITMa.

```html
<details markdown="1">
<summary>News item checklist: check before you publish</summary>

- [ ] Does the first sentence tell the reader what happened and why it matters?
- [ ] Have I named the people involved?

</details>
```

**Renders as:**

<details markdown="1">
<summary>News item checklist: check before you publish</summary>

- [ ] Does the first sentence tell the reader what happened and why it matters?
- [ ] Have I named the people involved?

</details>

### Before and after

For showing a weak version next to a better one – a post, a sentence, a prompt. Change the two labels to suit; the ✗ and ✓ come with the classes. A single box can also stand on its own (for example a ✗ "The problem" box followed by a ✓ "The fix" box). If a box ends with a table or a list, leave a blank line before its closing `</div>`, or the table won't render.

```html
<div class="compare" markdown="1">
<div class="compare-item compare-item--dont" markdown="1">
<p class="compare-label"><i class="fa-solid fa-xmark" aria-hidden="true"></i>Weak prompt</p>

"Make a nice banner for our webinar."
</div>
<div class="compare-item compare-item--do" markdown="1">
<p class="compare-label"><i class="fa-solid fa-check" aria-hidden="true"></i>Strong prompt</p>

"A clean square banner announcing an ELIXIR webinar. One headline, the date, lots of whitespace."
</div>
</div>
```

**Renders as:**

<div class="compare" markdown="1">
<div class="compare-item compare-item--dont" markdown="1">
<p class="compare-label"><i class="fa-solid fa-xmark" aria-hidden="true"></i>Weak prompt</p>

"Make a nice banner for our webinar."
</div>
<div class="compare-item compare-item--do" markdown="1">
<p class="compare-label"><i class="fa-solid fa-check" aria-hidden="true"></i>Strong prompt</p>

"A clean square banner announcing an ELIXIR webinar. One headline, the date, lots of whitespace."
</div>
</div>

### Example card

A highlighted link to another page – usually a real-world example – placed where the reader needs it, rather than only at the bottom of the page. It uses the linked page's own title and description.

```liquid
{% raw %}{% include example-card.html page_id="comm-ex-elead" %}

{% include example-card.html page_id="comm-ex-elead" lead="Your own sentence instead of the page description." %}{% endraw %}
```

Optional settings: `lead` (your own sentence), `label` (a different small heading) and `icon` (a Font Awesome icon name).

**Renders as:**

{% include example-card.html page_id="comm-ex-elead" %}

### Figure with a caption

Always write ALT text that says what the image shows, not just what it is. Put images in `images/<module>/`. For other ways to add images, see [Images](https://elixir-belgium.github.io/elixir-toolkit-theme/markdown_cheat_sheet#images) in the ETT documentation.

```html
<figure class="figure-diagram">
  <img src="{% raw %}{{ '/images/communication/inverted-pyramid.svg' | relative_url }}{% endraw %}" alt="The inverted pyramid: most important information at the top, supporting detail in the middle, background at the tip.">
  <figcaption>Readers who stop early still get the point.</figcaption>
</figure>
```

**Renders as:**

<figure class="figure-diagram" style="max-width: 28rem;">
  <img src="{{ '/images/communication/inverted-pyramid.svg' | relative_url }}" alt="The inverted pyramid: most important information at the top, supporting detail in the middle, background at the tip.">
  <figcaption>Readers who stop early still get the point.</figcaption>
</figure>

### Video

Embeds a YouTube video at the full width of the text, with a direct link underneath. It uses YouTube's privacy-enhanced mode, so no tracking cookies are set until someone presses play. Use the id from the video's address (the part after `v=`) and a title that says what the video is – screen readers announce it.

```liquid
{% raw %}{% include video.html youtube="fFAlT51EPZQ" title="Design made easy for communicators (CONVERGE workshop series)" %}{% endraw %}
```

An optional `caption="..."` adds a line before the link.

### Download button

For templates and other files in `assets/downloads/`. Say what the file is and its format.

```html
<a href="{% raw %}{{ '/assets/downloads/news-item-template.docx' | relative_url }}{% endraw %}" class="btn-download" download>
  <i class="fas fa-download"></i>Download the news item template (Word)
</a>
```

**Renders as:**

<a href="{{ '/assets/downloads/news-item-template.docx' | relative_url }}" class="btn-download" download>
  <i class="fas fa-download"></i>Download the news item template (Word)
</a>

## Real-world example pages

An example page tells how a Node actually did something. Give it `type: Real_world_example`, its own `page_id`, the module's `sidebar`, and `back_to` with the chapter it belongs to – that adds a "Back to chapter" link at the bottom:

```yaml
---
title: "From deliverable to impact story: ELEAD"
description: One sentence on what the example shows.
page_id: comm-ex-elead
type: Real_world_example
back_to: mod_comm_10
sidebar: module-communication
---
```

Then link it from the chapter, either in the text with an [example card](#example-card), under "See it in practice" at the bottom of the page via `related_pages`, or both.

## Resources

Resources for the "Dive deeper" panels and the All resources page live in `_data/tool_and_resource_list.yml`. Add an entry once, then list its `id` under `ref_to_main_resources` in any chapter that should show it.

```yaml
- id: writing-in-sciences
  name: Writing in the Sciences (Stanford University)
  url: https://www.coursera.org/learn/sciwrite
  description: Free online course on clear scientific writing.
  category: external_resource     # template, internal_resource or external_resource
  module: mod_comm
```

Mark intranet resources clearly in the description (for example "intranet – consortium login required"). The ETT documentation explains the [tools and resources data file](https://elixir-belgium.github.io/elixir-toolkit-theme/resource_table) in more detail.

## Learning pathways

A pathway is a short route through some chapters for a particular reader, shown as a card on the module's main page. Once a reader picks one, each chapter shows their step and the next chapter on the route. Pathways live in one file per module, named after the module's sidebar – for example `_data/pathways/module-communication.yml`:

```yaml
- id: new-to-elixir                 # lowercase, no spaces; appears in links as ?path=new-to-elixir
  title: New to ELIXIR
  description: Find the people, channels and shared resources the network already has.
  chapters: [mod_comm_3, mod_comm_4]   # page_ids, in order
```

Chapter numbers, links and the total time are filled in automatically. A module without a pathways file simply shows no pathways.

## Crediting contributions

Everyone who contributes should be credited.

**On the Contributors page.** Add yourself to `_data/CONTRIBUTORS.yml`. Your `role` decides which group you appear in and the colour of your badge:

```yaml
Jane Doe:
  git: janedoe                      # GitHub username; also used for your photo
  orcid: 0000-0000-0000-0000
  affiliation: Example Institute / ELIXIR-XX
  role: Contributor                 # Lead or Contributor
```

**On a chapter.** List contributors by the same name in the chapter's front matter; they appear in the credits at the bottom of the page:

```yaml
contributors: [Jane Doe, Xenia Perez Sitja]
```

## Preview your changes

Run the site locally with `bundle exec jekyll serve` and open the address it prints. Most edits appear on reload; changes to `_config.yml` only take effect after you stop the server (Ctrl+C) and start it again.

First time? The ETT README explains how to [install Jekyll and run the site locally](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme#locally-using-jekyll), or [run it with Docker](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme#locally-using-docker) instead.
