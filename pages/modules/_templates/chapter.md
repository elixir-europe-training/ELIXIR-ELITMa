---
# CHAPTER TEMPLATE - copy to pages/modules/<nn-module>/<nn>-<short-name>.md (e.g. 03-dm-content.md)
# and add it to the module's sidebar file with a two-digit number (see How to contribute).
# Jekyll ignores this _templates folder, so nothing here is published.
title: Short chapter title                     # also used in the sidebar, cards and breadcrumbs
description: One sentence for tiles and the chapter list.
summary: "A longer intro shown under the title. Quote it if it contains a colon: like this."
page_id: mod_dm_3                              # unique: mod_<module>_<chapter number>
type: Data Management                          # the module's type (same for all its chapters)
sidebar: module-data-management                # the module's file in _data/sidebars/
page_img: /icons/icon-module-data-management.svg
time: 30 minutes                               # minutes; totals are calculated from these
status: in development                         # ready | in development
audience: [Node Coordinators, Data Stewards]
learning_outcomes:
  - First thing the reader will be able to do
  - Second thing
related_pages:                                 # shown at the end of the chapter, in this order:
  Dive_deeper:                                 #   "Dive deeper" cards (magnifying glass)
  - dm-dd-gorc-framework
  Real_world_example:                          #   "See it in practice" cards (lightbulb) -
  - dm-ex-rdm-portfolio                        #   only examples not already carded in the text
ref_to_main_resources:                         #   then the "Further resources" table
  - google-analytics                           #   ids from _data/tool_and_resource_list.yml
---

Open with two or three sentences: what this chapter helps the reader do, and why it matters for a Node.

{% include example-card.html page_id="dm-all-examples" label="Real-world examples" lead="Use these for inspiration while you work through this chapter." %}

## First section

Teach one idea. Keep paragraphs short.

{% include example-card.html page_ids="dm-ex-sweden-clarifying-the-node-remit" compact=true %}

<div class="exercise-box" markdown="1">
## Exercise: a short, active title

1. **First step**
   What to do, in one or two sentences.
2. **Second step**
   ...

</div>

{% include quick-check.html question="A question about the idea you just taught?" options="Answer one|Answer two|Answer three" correct="2" explain="One or two sentences on why." %}

## What's next

One or two sentences linking to the next chapter.
