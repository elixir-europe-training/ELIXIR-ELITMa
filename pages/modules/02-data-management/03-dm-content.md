---
title: What to include in your Node data management strategy
description: Use the Global Open Research Commons (GORC) model to structure your Node data management strategy.
page_id: mod_dm_3
page_img: /icons/icon-module-data-management.svg
type: Data Management
audience: [Node Coordinators, Data Stewards]
time: 45 minutes
status: ready
sidebar: module-data-management
summary: Data management activities often develop separately across governance, services and support structures. This chapter helps you bring these elements together, identify the areas most relevant to your Node and draft a simple strategy outline, using a shared framework called the Global Open Research Commons (GORC) model.
related_pages:
  Real_world_example:
  - dm-ex-rdm-portfolio
learning_outcomes:
    - Identify the main elements to include in a Node data management strategy
    - Use the Global Open Research Commons model to structure the content of your strategy
    - Select relevant areas and draft a simple outline for your strategy
ref_to_main_resources:
  - ds-handbook-maturity-model
  - gorc-model-1-1
  - gorc-typology
---

{% include module-metadata.html %}

In Chapter 1, you set out why your Node needs a data management strategy and identified a starting point. In Chapter 2, you developed a first overview of your Node context and identified the people who can help move the work forward. In this chapter, you will use that overview to identify and organise the main areas to include in your strategy.

## Two complementary frameworks

This module uses two complementary frameworks:

* **Structuring the content of your strategy** using the [Global Open Research Commons (GORC) International Model]({{ site.baseurl }}/dm-deeper-gorc-framework), developed through a Research Data Alliance (RDA) working group. The GORC model describes *what areas the strategy should cover, and how they relate to each other?*
* **Assessing selected areas** using the [Maturity Model](https://elixir-europe.github.io/ds-handbook/maturity-model) from the Data Stewardship Handbook. The Maturity Model describes *how well is each area currently developed, and where is there room for improvement?*

In this chapter, you will use the GORC model to structure the content of your strategy and identify the areas that are most relevant to your Node. In the next chapter, you will use the Maturity Model to assess how well selected areas are developed and identify possible improvements.

## Why defining the content matters

- A Node data management strategy works best when it focuses on the areas that are relevant to the Node. It does not need to cover everything, but it should make clear what belongs in the strategy and how the different areas connect.

- Defining the content means deciding which topics belong in the strategy and how they relate to each other. This helps turn a broad overview of services, roles and activities into a manageable set of strategic areas.

- Without a clear scope, important areas may be overlooked or too many topics may be addressed at once. A defined scope helps you connect existing work and identify where greater clarity or coordination may be needed.

- It also makes the strategy easier to discuss with the people involved. They can see which areas are included, why they matter and where their input is needed.

{% include callout.html type="note" content="You do not need to cover everything. A focused strategy that reflects your Node context is more useful than a complete but unrealistic overview." %}

## Using the GORC framework

The Global Open Research Commons (GORC) model provides a common language and structure for describing the technical, organisational and human elements of a research commons.

You will use its essential elements to review your Node context overview, identify relevant areas and organise them within your strategy.

{% include callout.html type="note" content="GORC's own top-level building block is the essential element, ten in total since version 1.1 split Interoperability and Standards & Conventions into two separate elements. Each element is broken down further into (sub)categories, attributes and features. Below, we group the ten elements into three broader clusters for this module; these clusters are our own simplification, not official GORC terminology." %}

The essential elements can be grouped as follows:

| Cluster | Elements | Example |
| --- | --- | --- |
| Technical elements | Compute, storage, network and authentication and authorisation infrastructure (AAI); services and tools; research objects | A national compute cluster, a metadata catalogue, a shared data platform |
| Interoperability and standards | Interoperability; Standards & Conventions | Common metadata schemas, persistent identifiers, shared vocabularies |
| Organisational and human elements | Governance structures; rules of participation and access; engagement; human capacity; sustainability | A Node Coordinator role, a data access policy, training for researchers |

The elements are connected. Services depend on infrastructure, standards support interoperability and governance and human capacity shape how the commons works in practice.

Using the framework helps you:

* group related activities and responsibilities
* see connections between different areas
* identify which areas are relevant to your strategy

{% include callout.html type="important" content="The GORC model is not prescriptive, focus on the elements that are most relevant to your Node and strategy. Read the Understanding the GORC framework page in detail before starting the exercises below, it explains the essential elements you will need." %}

{% include example-card.html page_ids="dm-dd-gorc-framework, dm-dd-gorc-elixir" compact=true %}

## Example: mapping GORC elements

The example below shows how the GORC elements could be mapped. It is illustrative and is not based on a specific ELIXIR Node.

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

{% include callout.html type="note" content="This is an illustrative example. You do not need to map every element. Select the elements that are most relevant to your Node and strategy." %}

<div class="exercise-box" markdown="1">
## Reflection: recognise the GORC elements

Review the Node context overview you developed in Chapter 2.

Consider the following questions:

* Which GORC elements are already visible in your overview?
* Which activities, services or roles relate to more than one element?
* Are there elements that you have not yet considered?
* Which elements seem most relevant to your strategy?

Record your initial observations. You will use them in the next exercise.

</div>

{% include callout.html type="tip" content="Not sure what counts as a GORC element? Use the examples in the table above as a starting point. Focus on how the different parts of your Node connect, you do not need to describe every activity in detail." %}

<div class="exercise-box" markdown="1">
## Exercise: map selected GORC elements

Select two or three GORC elements that seem relevant to your strategy.

For each element, describe what is already in place and how it connects to other parts of your Node context.

| GORC element | Current situation | Connections |
| --- | --- | --- |
| Select an element | Add relevant roles, services, activities or resources | Note links with other GORC elements |

</div>

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

{% include callout.html type="note" content="Aim for a focused outline rather than a complete strategy. Include the areas that are relevant to your Node and useful to address in the strategy." %}

## What’s next

You have identified the main areas to include in your strategy and created a first outline. In the next chapter, you will use the Maturity Model from the Data Stewardship Handbook to assess how well selected areas are developed and identify possible improvements.
