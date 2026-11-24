---
title: What to include in your Node data management strategy
description: Use the Global Open Research Commons (GORC) model to structure your Node data management strategy.
page_id: mod_dm_3
page_img: /icons/icon-module-data-management.svg
type: Data Management
audience: [Node Coordinators, Data Stewards]
time: 60 minutes
status: ready
sidebar: module-data-management
summary: Data management work in a Node often grows in separate places. In this chapter you sort what you found in Chapter 2 with the GORC model, a framework from the Research Data Alliance. You end with a first outline of what your strategy should cover.
related_pages:
  Dive_deeper:
  - dm-dd-gorc-framework
  - dm-dd-gorc-elixir
  - dm-dd-rdm-portfolio
learning_outcomes:
    - Identify the main elements to include in a Node data management strategy
    - Use the Global Open Research Commons model to structure the content of your strategy
    - Select relevant areas and draft a simple outline for your strategy
ref_to_main_resources:
  - gorc-typology
  - gorc-model-1-1
---


In [Chapter 1]({{ site.baseurl }}/01-dm-intro), you set out why your Node needs a data management strategy and identified a starting point. In [Chapter 2]({{ site.baseurl }}/02-dm-node-context), you developed a first overview of your Node context and identified the people who can help move the work forward. In this chapter, you will use that overview to identify and organise the main areas to include in your strategy.

## Two complementary frameworks

This module uses two complementary frameworks:

* **Structuring the content of your strategy** using the [Global Open Research Commons (GORC) International Model]({{ site.baseurl }}/dm-deeper-gorc-framework), developed through a Research Data Alliance (RDA) working group. The GORC model describes *what areas the strategy should cover and how they relate to each other*.
* **Assessing selected areas** using the [Maturity Model](https://elixir-europe.github.io/ds-handbook/maturity-model) from the Data Stewardship Handbook. The Maturity Model describes *how well each area is developed now and where there is room for improvement*.

In this chapter, you will use the GORC model to structure the content of your strategy and identify the areas that are most relevant to your Node. In [Chapter 4]({{ site.baseurl }}/04-dm-assess), you use the Maturity Model to assess how well selected areas are developed.

## Why defining the content matters

A Node data management strategy works best when it focuses on the areas that matter for your Node and shows how they connect. Defining the content means deciding which topics belong in the strategy. That turns a broad overview of services and activities into a manageable set of strategic areas. Without a clear scope, you may overlook important areas or take on too much at once. A clear scope also helps you connect existing work and see where more coordination is needed.

Scope is also about who the strategy is for: only the people who work in the Node, or also the institutions and researchers it supports. Decide this early. A strategy written only for the Node team can end up with different rules than the rest of an institution. Scope also makes the strategy easier to discuss. People can see which areas are included, why they matter and where their input is needed.

{% include callout.html type="note" content="You do not need to cover everything. A focused strategy that reflects your Node context is more useful than a complete but unrealistic overview." %}

## Using the GORC framework

The Global Open Research Commons (GORC) model provides a common language for describing the technical, organisational and human elements of a research commons. GORC calls its main building blocks essential elements. The International Model has ten.

You will use these elements to review your Node context overview, identify relevant areas and organise them within your strategy. To make this easier, this module groups the ten elements into three clusters. The clusters are our own simplification, not official GORC terminology:

| Cluster | Elements | This could be |
| --- | --- | --- |
| Technical elements | Compute, storage, network and authentication and authorisation infrastructure (AAI); services and tools; research objects | A national compute cluster, a metadata catalogue, a shared data platform |
| Interoperability and standards | Interoperability; Standards & Conventions | Common metadata schemas, persistent identifiers, shared vocabularies |
| Organisational and human elements | Governance structures; rules of participation and access; engagement; human capacity; sustainability | A Node Coordinator role, a data access policy, training for researchers |

The elements are connected. Services depend on infrastructure, standards support interoperability and governance and human capacity shape how the commons works in practice.

The framework helps you group related activities and responsibilities, see how different areas connect and decide which areas are relevant to your strategy.

{% include callout.html type="important" content="The GORC model is not prescriptive. Focus on the elements that are most relevant to your Node and strategy. Before you start the exercises, read [Understanding the GORC framework]({{ site.baseurl }}/dm-deeper-gorc-framework). It explains the essential elements you will need." %}

## What your GORC mapping could look like

This is how the GORC elements could be mapped. The table is illustrative and not based on a specific ELIXIR Node.

| GORC element | Current situation | Connections |
| --- | --- | --- |
| Governance structures | Defined roles such as Node Coordinator, Training Coordinator and Technical Coordinator, with coordination embedded in national initiatives and European collaborations | Governance connects roles and responsibilities with decisions about services, priorities and resources |
| Rules of participation and access | National and European policies, FAIR principles and data access frameworks, with alignment to initiatives such as EOSC and national infrastructures | Rules and access connect policy requirements with governance, services, research objects and daily practice |
| Services and tools | Data platforms, workflow tools, FAIR support services and training registries such as TeSS, with contributions to shared service ecosystems | Services depend on infrastructure, standards, expertise and governance, and support researchers in managing and reusing data |
| Compute, storage, network and AAI | Compute, storage and data infrastructure distributed across institutions and connected to national infrastructures | Infrastructure supports services, research objects and data processing, and depends on coordination and sustainable resources |
| Research objects | Diverse datasets, metadata schemas and research outputs across domains, supported by FAIRification workflows and data stewardship practices | Research objects connect to services, standards, infrastructure and the communities that create and use them |
| Interoperability | Interoperability tools and FAIR workflows that support connections between systems, platforms and communities | Interoperability connects services, infrastructure and standards, and depends on shared standards being in place |
| Standards & Conventions | Metadata standards and identifier systems, with contributions to shared standards and platforms | Standards and conventions connect research objects, services and infrastructure and support reuse across projects and domains |
| Human capacity | Training programmes, data stewardship support and community networks | Human capacity supports the development, delivery and use of services and connects technical work with research communities |
| Engagement | Collaboration with research communities, participation in ELIXIR Platforms and other European networks, and community driven initiatives | Engagement connects community needs and feedback with services, training, governance and strategic priorities |
| Sustainability | Institutional, national and project based funding, with activities embedded in national and European infrastructures | Sustainability supports the continuity of services, infrastructure, expertise and coordination |

<div class="exercise-box" markdown="1">
## Reflection: recognise the GORC elements

Take your notes from [Chapter 2]({{ site.baseurl }}/02-dm-node-context) and sort them under the GORC elements. Using these shared elements gives your strategy a structure others recognise, and helps you spot areas you missed.

The table shows where most of your notes belong:

| Area in Chapter 2 | Look under these GORC elements |
| --- | --- |
| Policies, standards and wider initiatives | Rules of participation and access; Standards & Conventions; Engagement |
| Governance and responsibilities | Governance structures |
| Data and research landscape | Research objects |
| Services, tools and expertise | Services and tools; Compute, storage, network and AAI; Human capacity |
| Sustainability | Sustainability |

Two areas from [Chapter 2]({{ site.baseurl }}/02-dm-node-context) have no GORC element of their own, but you still need them:

1. Connections and dependencies show how the elements depend on each other. Keep these notes for the Connections column in the next exercise.
2. Needs and gaps show where your Node most needs attention. In the next exercise you select two or three elements to work on. Start with the ones where your needs and gaps are. For example, if researchers ask for more RDM training, Human capacity is a good place to start.

Consider the following questions:

* Which GORC elements are already visible in your overview?
* Which activities, services or roles relate to more than one element?
* Are there elements that you have not yet considered?
* Which elements seem most relevant to your strategy?

Record your initial observations. You will use them in the next exercise.

</div>

{% include callout.html type="tip" content="Not sure what counts as a GORC element? Use the examples in the table above as a starting point. Focus on how the different parts of your Node connect. You do not need to describe every activity in detail." %}

<div class="exercise-box" markdown="1">
## Exercise: map selected GORC elements

Select two or three GORC elements that seem relevant to your strategy.

For each element, describe what is already in place and how it connects to other parts of your Node context.

| GORC element | Current situation | Connections |
| --- | --- | --- |
| Select an element | Add relevant roles, services, activities or resources | Note links with other GORC elements |

</div>

{% include example-card.html page_ids="dm-ex-netherlands-mapping-strengths-and-gaps" compact=true %}

{% include callout.html type="tip" content="Keep your descriptions short and focused. The purpose is to understand the structure, not to assess how well each area is developed." %}

<div class="exercise-box" markdown="1">
## Exercise: draft your strategy outline

Use your mapping to identify the areas that should be included in your strategy.

For each selected area, record why it matters, what the strategy should address and who should contribute.

| Strategy area | Why it matters | What to address | Contributors |
| --- | --- | --- | --- |
| Add a selected area | Explain its relevance at Node level | Note the main topic or question to address | Add relevant roles or groups |

Use the completed table as a first outline for your strategy. You can add more detail as the strategy develops.

</div>

{% include example-card.html page_ids="dm-ex-netherlands-identifying-where-the-node-can-add-value" compact=true %}

{% capture outline_note %}
There is no single correct outline. When Nodes built their <a href="{{ site.baseurl }}/dm-deeper-rdm-portfolio">portfolios</a> during the <a href="https://doi.org/10.5281/zenodo.10895080">first edition of this training in Espoo in 2023</a>, each one looked different.
{% endcapture %}

{% include callout.html type="note" content=outline_note %}

## What’s next

You have identified the main areas to include in your strategy and created a first outline. [Chapter 4]({{ site.baseurl }}/04-dm-assess) helps you look at how well some of these areas work now, and [Chapter 5]({{ site.baseurl }}/05-dm-direction) helps you choose a direction for them.
