---
title: Contributors
permalink: contributors
page_img: /icons/icon-idea.svg
description: The people who lead and contribute to ELITMa modules.
---

ELITMa is built by the Nodes, for the Nodes. These are the people who lead its modules and contribute to them. To add yourself, see [Crediting contributions](how-to-contribute#crediting-contributions).

## Module leads

{% include contributor-tiles-all.html role="Lead" %}

{%- assign contributor_count = 0 -%}
{%- for person in site.data.CONTRIBUTORS -%}
  {%- assign person_role = person[1].role | downcase -%}
  {%- if person_role == "contributor" -%}{%- assign contributor_count = contributor_count | plus: 1 -%}{%- endif -%}
{%- endfor -%}
{%- if contributor_count > 0 %}

## Contributors

{% include contributor-tiles-all.html role="Contributor" %}
{%- endif %}
