---
title: From service idea to implementation
description: Examples from ELIXIR Luxembourg on developing and implementing RDM services
type_img: /images/icons/icon-module-data-management.svg
sidebar: module-data-management
page_id: dm-ex-implementation
type: Real_world_example
back_to: mod_dm_6
ref_to_main_resources:
  - rdmkit
  - rems
---

This case study is based on presentations by Pinar Alper from ELIXIR Luxembourg during the Espoo edition of the ELIXIR Node Data Management Strategy (NDMS) module in 2023. The original training materials and shared notes are available through the [ELITMa Epoo workshop materials](https://doi.org/10.5281/zenodo.10895079).

ELIXIR Luxembourg presented two examples of developing Research Data Management (RDM) services: an [RDMkit](https://rdmkit.elixir-europe.org/)-based Node service and an end-to-end support service for controlled-access data sharing.

## Why is this relevant?

For the RDMkit-based service, ELIXIR Luxembourg wanted to make national RDM guidelines available and link them to RDMkit where appropriate. RDMkit already provided an overview of RDM and related resources, but national guidelines and grey literature did not always fit within the central resource.

The Node was also starting a national RDM community and needed a place to capture and share the knowledge of that community.

Before deciding how to implement the service, the team planned to outline possible implementation options, estimate their implementation and maintenance costs and use a formal decision process to select an option.

The second example concerned controlled-access data sharing. ELIXIR Luxembourg already provided a data-hosting service for translational biomedicine projects approaching their end. As part of this service, the team supported controlled access, collected and published Ethical, Legal and Social Implications (ELSI) metadata, handled data access requests, coordinated review by the Data Access Committee and provided data to approved users.

As use of the hosting service increased, controlled-access support required more work. General Data Protection Regulation (GDPR) documentation was also an important part of the process, while data provision was moving from file download towards cloud access.

## What can Nodes learn from this?

The Luxembourg examples show how the Node approached implementation in practice.

### RDMkit-based Node service

For the proposed RDMkit-based service, the team planned to:

- outline possible implementation options
- estimate implementation and maintenance costs
- perform a formal Decision Analysis and Resolution process
- apply the Node's formal decision process if an RDMkit-based service was selected

The presentation also highlighted reusable elements of RDMkit, including its site theme, content and open, documented and reusable processes.

### Controlled-access data sharing

The controlled-access service developed over several years. ELIXIR Luxembourg gradually increased automation, with teams working on ELSI, data stewardship and technical infrastructure collaborating on the service.

Where possible, the Node reused existing tools and standards. This included the [Resource Entitlement Management System (REMS)](https://github.com/CSCfi/rems) from another ELIXIR Node and [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/), a standard used for authentication.

The team reported that focusing first on processes and information models worked well. These were improved before further automation was introduced.

They also identified several implementation challenges. The effort needed to develop the service assembly was underestimated. Connecting tools through components such as connectors, parsers and mappers took time, and testing assembled services was not straightforward.

## What can you do?

The Luxembourg presentations provide two concrete examples to compare with your own plans.

For a service that is still being considered, you can look at different implementation options and their expected implementation and maintenance costs before making a decision.

For a service that is already developing, the Luxembourg controlled-access example shows how processes, information models, collaboration between different teams, existing tools and technical standards all formed part of implementation.

The examples and original slides can be used as a starting point for discussing similar choices within your own Node.
