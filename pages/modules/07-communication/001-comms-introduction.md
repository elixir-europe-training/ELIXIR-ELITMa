---
title: Foundations of communication in research infrastructures
description: Communication is already happening in your Node – the question is whether it's working. Find out the answer and how to improve it.
page_id: mod_comm_1
page_img: /icons/icon-module-communication.svg
type: Communication
audience: [Node Coordinators, Project Managers, Communications Officers]
time: 15 minutes
status: ready
summary: Communication is already happening in your Node – the question is whether it's working. This section helps you understand the difference between internal and external communication, why both matter in a distributed infrastructure like ELIXIR, and how to take stock of where your Node currently stands.
task_list: true
learning_outcomes:
    - Distinguish between internal and external communication and identify which applies to a given situation in your Node
    - Recognise communication as a shared responsibility across all roles, not just dedicated comms staff
    - Audit your Node's current communication practices against a simple five-point framework
---

{% include module-metadata.html %}

You may not have "communications" in your job title. But if you coordinate a project, lead a work package, manage a team, or represent your Node in any capacity – you are already communicating on behalf of ELIXIR. The question is not whether you communicate, but how intentionally you do it.

In a distributed network like ELIXIR, where 22 Nodes operate across different countries, cultures, and institutional contexts, communication is the connective tissue. When it works well, it's invisible. When it doesn't, the costs are real: duplicated effort, missed opportunities, missed authority in research grants, misaligned expectations and outputs that never reach the people who needed them.

This module won't turn you into a communications expert. It will help you communicate more deliberately – and know when to ask for help.

## Internal vs external: two different jobs
All communication in ELIXIR falls into one of two categories, and confusing them is one of the most common mistakes:

* **Internal communication** is the flow of information within your Node or across the consortium — project updates, shared decisions, meeting outputs, cross-Node coordination. Its goal is alignment. When it fails, people duplicate work, miss deadlines, or pull in different directions.
* **External communication** is how you present your work to the world – to funders, policymakers, researchers outside ELIXIR, and the public. Its goal is impact. When it fails, good work goes unnoticed and opportunities are missed.

The same output often needs both. A new service your Node launches needs internal communication so the consortium knows about it – and external communication so potential users find it or to gain visibility for funding and sustainability. 

{% include callout.html type="note" content="Node Coordinators, Work Package Leads, Task Leads, and any other coordination roles within the consortium play a key role in shaping the communication culture, especially for internal communication." %}

## A scenario you'll recognise

Two Work Package leads in a multi-Node project each spent months producing what turned out to be near-identical outputs. Neither knew the other was doing it. There was no shared update mechanism, no agreed communication touchpoint, and no moment where someone asked: who else needs to know what we're doing?

This isn't rare. It's the default when communication is treated as something that happens after the work, rather than alongside it.

{% include callout.html type="note" content="Considering communication strategies before a project begins is the first step towards avoiding duplicated efforts and team misalignment. Considering which outputs will be relevant to people outside the project will also position your work as a success for future funding avenues for your Node and the consortium at large." %}


## Examples

* How did a Node communicate an opportunity that reached the entire consortium – BioHackathon Germany comms
* How a deliverable was turned into an impact/outreach story – ELEAD imapct case study


## Quick exercise: your communication audit

Reflect on a current or recent project.

- [ ]  Do all active members know where to find the latest updates?
- [ ] Have I identified which outputs are worth communicating beyond the project team?
- [ ] Is there a clear process for sharing successes and lessons learned?
- [ ] Are our members aware of current objectives?
- [ ] Are the channels I'm using actually working?

{% include callout.html type="warning" content="If you didn't clik to two or more, this module is for you – keep going." %}


## Existing resources

Communicating research and, in particular, inside Research Infrastructures, is complex, but the end communications piece should not reflect that complexity. This short module will help you understand how to take action on some of the easy steps and give you cues for ELIXIR-specific applications. 

If you want to delve deeper, there are numerous resources you can use to communicate more clearly. Here are a few key ones to highlight:
* [Communication Toolkit for Research Infrastructures](https://ri-vis.eu/network/rivis/news/launch-of-communication-toolkit-for-research-infrastructures/)
* [Communication Toolkit for European Projects](https://eic.ec.europa.eu/communication-toolkit_en)


<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.task-list-item input[type="checkbox"]').forEach(function (cb, i) {
      var key = 'task-' + window.location.pathname + '-' + i;
      cb.removeAttribute('disabled');
      cb.checked = localStorage.getItem(key) === 'true';
      cb.addEventListener('change', function () {
        localStorage.setItem(key, cb.checked);
      });
    });
  });
</script>