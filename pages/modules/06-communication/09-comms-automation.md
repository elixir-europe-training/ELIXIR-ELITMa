---
title: Automation and tools for efficient outreach
description: You don't have time to do everything by hand. A few free tools, set up once, buy back hours every week.
summary: "Communication work expands to fill all the time you give it. This chapter is about buying that time back: a handful of free tools and tricks - social scheduling, updates delivered to Slack and automated reporting - that you set up once and reuse. It's not a martech course; pick one or two and start there."
audience: [Communications Officers, Project Managers, Node Coordinators]
page_img: /icons/icon-module-communication.svg
time: 15 minutes
sidebar: module-communication
page_id: mod_comm_9
type: Communication
status: ready
status_badge: success
task_list: true
learning_outcomes:
  - Batch and schedule social media instead of posting manually every day
  - Get new training, news, jobs and sign-ups delivered to Slack automatically
  - Find out which tools other Nodes already use, and who to ask
  - Automate reporting so the numbers are ready when you need them
  - Set up a minimal automation toolkit for your Node in about an hour
ref_to_main_resources:
  - comms-tools-sheet
  - buffer
  - slack-rss
  - tess-feeds
  - tess-subscribe
  - zapier
  - google-apps-script
  - google-analytics
  - ga-setup
---


Communication work expands to fill all the time you give it – and in a Node, you rarely have much to give. The point of automation is not to do *more*; it's to spend the time you have on the things that actually need a human (judgement, relationships, good content) and let tools handle the repetitive rest.

This is not a comprehensive tools course. It's a short set of free options that save real time once set up. Don't try to adopt all of them – **pick one or two and start there**.

{% include callout.html type="important" content="Automation amplifies whatever you put in. Scheduling a week of weak posts just publishes weak posts faster. Set up the tools, but keep the quality bar where it was." %}

## Start with what other Nodes use
Before you pick a tool, see what's already working elsewhere. The ELIXIR Communications Group keeps a shared spreadsheet of the tools Nodes use for communications – and which Node uses what – so you can ask someone who has already set it up.

It lists around fifty tools – for graphics, video, newsletters, metrics, websites and project management – with whether each is free, freemium or paid, what it's used for and which Nodes use it. Found a tool that works for you? Add it, so the next Node doesn't start from scratch.

<a href="https://docs.google.com/spreadsheets/d/174WtL6yeIeVR8jIfDtDxvg0SZWDPsGHq9vvEA5SiEPw/edit?gid=0#gid=0" class="btn btn-primary" target="_blank" rel="noopener">Communication tools used by ELIXIR Nodes (Google Sheet)</a>

## Schedule social media in batches
The single biggest time saver. Instead of logging in to post every day, write a week or a month of posts in one sitting and schedule them. [Buffer](https://buffer.com/) is simple, free and enough for most Nodes.

Why it helps:

* **Consistency** – your channels stay active even in busy weeks.
* **Batching** – writing ten posts at once is far faster than ten posts on ten days.
* **Timing** – schedule for when your audience is actually online (see below).

{% include callout.html type="warning" content="Two LinkedIn caveats for scheduled posts. Schedulers cannot tag (@mention) other accounts on LinkedIn – and tagging is one of the best things you can do for reach – so publish posts that need tags natively and add the tags by hand. And organic posts with an external link in the text are shown to fewer people: put the link in the first comment instead (see Chapter 6: Writing for non-writers)." %}

**Find your own best times.** Generic "best time to post" guides are a starting point, but trends in your sector and audience matter more – researchers don't keep the same hours as consumer audiences. Treat timing as a small experiment: post the same or similar stories (two course announcements, say) on different days and at different times, and compare how they did (see [Reading your numbers](10-comms-storytelling#reading-your-numbers)). Only change the timing; if the stories differ too much, you won't know what made the difference. After a few rounds you'll know when *your* audience is listening.

Coordinate with the Hub's social media calendar where you can (see [Chapter 4: ELIXIR communications ecosystem](04-comms-ecosystem)). Posting on the same day as a consortium-wide push, and tagging other Nodes, multiplies reach for the same effort.

## Get updates delivered to Slack
Instead of checking five websites for news, let the information come to you. Most ELIXIR sources publish a feed, and Slack can post each new item into a channel automatically – new training on TeSS, ELIXIR news, new jobs.

### The easy way: RSS feeds
Slack's [RSS app](https://slack.com/help/articles/218688467-Add-RSS-feeds-to-Slack) posts new items from a feed into any channel. Once your workspace admin has added the app, type this in the channel:

```
/feed subscribe https://tess.elixir-europe.org/events.rss?country=Belgium
```

Feeds worth subscribing to:

| What you get | Feed |
| --- | --- |
| New training events on TeSS | `https://tess.elixir-europe.org/events.rss` |
| New training in your country | `https://tess.elixir-europe.org/events.rss?country=Belgium` (use your country) |
| New training on a topic | `https://tess.elixir-europe.org/events.rss?q=galaxy` (any keyword) |
| ELIXIR news | `https://elixir-europe.org/feeds/news.xml` |
| ELIXIR jobs | `https://elixir-europe.org/feeds/jobs.xml` |

TeSS also gives you a calendar feed – `https://tess.elixir-europe.org/events.ics`, with the same filters – that you can add to Outlook or Google Calendar.

{% include quick-check.html question="You want new TeSS training in your country to appear in your team's Slack channel. What's the quickest way?" options="Subscribe the channel to the TeSS RSS feed|Build a Zapier workflow|Write a Google Apps Script" correct="1" explain="TeSS already publishes a feed you can filter by country, so Slack's RSS app does it in one command. Save Zapier and scripts for sources that have no feed." %}

### Feed your newsletter from TeSS
The same feeds can do the legwork for your newsletter's "upcoming training" section:

* **TeSS email digests** – save a search on TeSS (your country, or a topic) and subscribe to it: TeSS emails you the new events daily, weekly or monthly. See [Subscribing to notifications](https://elixirtess.github.io/docs/search/subscribe/) in the TeSS documentation.
* **A weekly digest with Zapier** – Zapier's [RSS digest template](https://zapier.com/apps/rss/integrations/slack/14136/post-a-digest-of-rss-items-to-a-slack-direct-message-on-a-daily-weekly-or-monthly-schedule) collects new items from several feeds (TeSS training, ELIXIR news, ELIXIR jobs) and sends you one message a week – your newsletter shortlist, ready when you sit down to write.
* **Live listings on your website** – the [TeSS widgets](https://github.com/ElixirTeSS/TeSS_widgets) show an always-up-to-date list of TeSS events on your Node's site. See [Code and data for developers](https://elixirtess.github.io/docs/developers/code-data/).

### When there's no feed: Zapier, Make or Google Apps Script
For anything without a feed – a new sign-up in your Node's registration form, a new row in a shared sheet, a new registration for an event – a small automation can post it to Slack for you:

* **[Zapier](https://zapier.com/) or [Make](https://www.make.com/)** – point and click, no code: pick a trigger ("new form response", "new row", "new item in feed") and an action ("send a Slack message"). Their free plans cover a few simple workflows.
* **[Google Apps Script](https://developers.google.com/apps-script)** – free and built into Google Forms and Sheets, but it means writing code. If you're not comfortable with that, ask your Node's software engineer or research computing team to set it up with you.

Slack receives these messages through an [incoming webhook](https://api.slack.com/messaging/webhooks): a private web address your workspace admin can create for one channel.

<details markdown="1">
<summary>Go deeper: keep your automations secure</summary>

Anything that posts to Slack for you holds a key to your workspace, so set it up with the same care as a login:

* **Never use your own Slack login.** Connect through a dedicated credential – a webhook or Slack app for that one channel, or an app password – so it can be revoked without touching your account.
* **Keep keys out of the code.** Don't paste a webhook address or token into a script, sheet or document others can open. Apps Script has *Script properties* for this.
* **Limit access.** Only the people who maintain the form, sheet or Zap should be able to edit it; if a key leaks, ask your admin to regenerate it.
* **Forward only the data you need**, and tell people in the form that their details will be shared with your team.

If any of this is unfamiliar, that's the moment to bring in your software engineer or research computing team.
</details>

## Automated reporting
If you measure your communications (and you should – it's how you prove impact), don't pull the numbers by hand every month. Set up a [Google Analytics](https://analytics.google.com/) dashboard **once** to track website traffic, then check or share it whenever you need to.

To get started, follow Google's guide [Set up Analytics for a website](https://support.google.com/analytics/answer/9304153): you create an account and a property, then add a small tracking code to your site – most website systems (WordPress, Drupal) have a field or plugin for it. Prefer not to use Google? [Matomo](https://matomo.org/) is a free, self-hosted alternative some Nodes already use.

<!-- TODO: add a worked example of a Node's Google Analytics set-up and dashboard (screenshots). -->

Set it up to answer the questions you actually care about: which pages get visited, where visitors come from and what they do next – not every metric available. [Chapter 10](10-comms-storytelling#reading-your-numbers) walks through what to look at, with examples.

## The one-hour automation starter kit
You can put the essentials in place in about an hour. Tick them off as you go:

- [ ] Connect **one** social scheduler (Buffer is the quickest start) and schedule a week of posts.
- [ ] Subscribe a Slack channel to the **TeSS events feed** for your country, and to **ELIXIR jobs**.
- [ ] Add your Node's tools to the **Communication tools used by ELIXIR Nodes** sheet.
- [ ] Set up a **Google Analytics dashboard** for your main site or pages.
- [ ] Save all the tool logins somewhere your team can find them – automation only helps if it outlives one person.

<div class="exercise-box" markdown="1">
## Exercise
Pick **one** tool from this page and actually set it up now – don't read on, do it.

* If you chose a scheduler: write and schedule three posts for next week.
* If you chose Slack feeds: subscribe a channel to new TeSS training in your country and to ELIXIR jobs.
* If you chose TeSS digests: subscribe to a weekly digest of new training in your country, ready for your next newsletter.
* If you chose Analytics: create a dashboard with the three numbers you care about most.

The goal is to leave this page with one thing genuinely automated, not a list of tools you mean to try later.
</div>
