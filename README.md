[![theme badge](https://img.shields.io/badge/ELIXIR%20toolkit%20theme-jekyll-blue?color=0d6efd)](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme)

# ELITMa – ELIXIR Training Programme in Management

**Website: <https://elixir-europe-training.github.io/ELIXIR-ELITMa/>**

ELITMa gives ELIXIR Node staff the skills, practical guidance and onboarding they need to plan and deliver Node activities – coordination, training, service provision, infrastructure management, events and communication. It was established in 2019 and is developed *by the Nodes, for the Nodes*, with support from the EU-funded [ELIXIR-STEERS](https://elixir-europe.org/about-us/how-funded/eu-projects/steers) project and the internal ELIXIR project [PeoplePulse](https://elixir-europe.org/internal-projects/commissioned-services/people).

The programme has ten modules at different stages of development. This repository holds the online course materials; modules with content so far include **Node data management strategy** and **Communication**. For the full programme, see [ELITMa on the ELIXIR website](https://elixir-europe.org/platforms/training/elitma).

## Contributing

Contributions from across the Nodes are welcome.

* **Writing or improving content:** start with [How to contribute](https://elixir-europe-training.github.io/ELIXIR-ELITMa/how-to-contribute) – chapter structure, front matter and a copy-paste kit of page components.
* **Changing how the site works:** read [Site components](https://elixir-europe-training.github.io/ELIXIR-ELITMa/site-components) first – it documents the custom includes, the theme overrides and the data files.
* **Getting credited:** add yourself to `_data/CONTRIBUTORS.yml` (see [Crediting contributions](https://elixir-europe-training.github.io/ELIXIR-ELITMa/how-to-contribute#crediting-contributions)).

To help develop a new module, contact Celia van Gelder (celia.vangelder@health-ri.nl).

## Running the site locally

The site is built with Jekyll on the [ELIXIR Toolkit Theme](https://elixir-belgium.github.io/elixir-toolkit-theme/) (ETT).

```bash
bundle install
bundle exec jekyll serve
```

Then open the address it prints. Restart the server after editing `_config.yml`. For first-time setup, or to use Docker instead, see the ETT README on [running locally](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme#locally-using-jekyll).

## Where things are

| Path | What it holds |
| --- | --- |
| `pages/modules/<module>.md` | A module's main page (its orientation page) |
| `pages/modules/<nn-module>/` | The module's chapters and real-world example pages |
| `_data/sidebars/` | One file per module: chapter order – a title starting with two digits (`01 …`) makes a page a chapter |
| `_data/pathways/` | Learning pathways per module |
| `_data/module_types.yml` | The module tiles on the home and Modules pages |
| `_data/tool_and_resource_list.yml` | Resources for the "Further resources" tables |
| `_data/CONTRIBUTORS.yml` | Module leads and contributors |
| `_includes/`, `_layouts/` | Custom components and theme overrides – documented in [Site components](https://elixir-europe-training.github.io/ELIXIR-ELITMa/site-components) |
| `_sass/` | Colours and custom styles |
| `assets/downloads/` | Templates learners can download |
| `images/` | Images, one folder per module |

Chapter lists, times, previous/next links and breadcrumbs are generated from the sidebar files and each chapter's front matter, so there are no totals or lists to update by hand.
