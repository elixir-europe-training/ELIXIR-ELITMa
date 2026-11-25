---
title: From service idea to implementation
description: Examples from ELIXIR Luxembourg on developing and implementing RDM services
type_img: /images/icons/icon-module-data-management.svg
sidebar: module-data-management
page_id: dm-dd-implementation
type: Dive_deeper
back_to: mod_dm_6
ref_to_main_resources:
  - rdmkit
  - rems
  - openid-connect
  - ds-pack-article
---

This case study is based on presentations by Pinar Alper from ELIXIR Luxembourg during the Espoo edition of the ELIXIR Node Data Management Strategy (NDMS) module in 2023. The original training materials and shared notes are available through the [ELITMa Espoo workshop materials](https://doi.org/10.5281/zenodo.10895080).

ELIXIR Luxembourg presented two examples of developing Research Data Management (RDM) services. The first was a Node service based on [RDMkit](https://rdmkit.elixir-europe.org/). The second was an end-to-end support service for controlled-access data sharing, which the team later described in an article on [DS-PACK](https://doi.org/10.1038/s41597-024-03326-9).

## Why is this relevant?

For the RDMkit-based service, ELIXIR Luxembourg wanted to make national RDM guidelines available and link them to RDMkit where appropriate. RDMkit already provided an overview of RDM and related resources, but national guidelines and grey literature did not always fit within the central resource. The Node was also starting a national RDM community and needed a place to capture and share the knowledge of that community.

The second example concerned controlled-access data sharing. ELIXIR Luxembourg already provided a data-hosting service for translational biomedicine projects approaching their end. As part of this service, the team supported controlled access, collected and published Ethical, Legal and Social Implications (ELSI) metadata, handled data access requests, coordinated review by the Data Access Committee and provided data to approved users.

As use of the hosting service increased, controlled-access support required more work. General Data Protection Regulation (GDPR) documentation was also an important part of the process, while data provision was moving from file download towards cloud access.

## What can Nodes learn from this?

- **Compare options before you decide.** For the RDMkit-based service, the team planned to outline implementation options, estimate implementation and maintenance costs, and use a formal Decision Analysis and Resolution process, followed by the Node's own decision process.
- **Reuse what already exists.** RDMkit offered reusable elements such as its site theme, its content and its open, documented processes. For controlled-access data sharing, the Node used the [Resource Entitlement Management System (REMS)](https://github.com/CSCfi/rems) from another ELIXIR Node and [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/), a standard for authentication.
- **Get the processes right first.** The controlled-access service developed over several years. The team first improved its processes and information models, and only then added more automation.
- **Work across teams.** Teams working on ELSI, data stewardship and technical infrastructure built the service together.
- **Expect integration to take time.** The effort to put the service together was underestimated. Connecting tools through connectors, parsers and mappers took time, and testing the assembled services was not straightforward.

## What can you do?

The Luxembourg presentations give you two concrete examples to compare with your own plans:

- **A service you are still considering:** compare implementation options and their expected implementation and maintenance costs before you decide.
- **A service that is already developing:** check your approach against the lessons above.

In both cases, the original slides can help you discuss similar choices in your own Node.
