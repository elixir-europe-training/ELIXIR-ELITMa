---
title: Graphic design for non-designers
description: You won't become a designer – but with templates, AI tools and an eye for what "good" looks like, you don't need to.
summary: "You won't become a designer, and you don't have time to learn Adobe. You don't need to. This chapter is about directing tools - templates and AI - and judging the result. The one skill that makes that possible is knowing what good looks like, so you can prompt for it and assess what you get back."
audience: [Researchers, Project Managers, Node Coordinators]
page_img: /icons/icon-module-communication.svg
time: 15 minutes
sidebar: module-communication
page_id: mod_comm_8
type: Communication
status: ready
status_badge: success
task_list: true
learning_outcomes:
  - Recognise what makes a design look professional rather than amateur, well enough to judge and improve it
  - Use templates and AI tools to produce on-brand materials without design training
  - Write effective prompts for AI design tools by giving them the right constraints
  - Assess template or AI output against a simple quality and accessibility checklist
ref_to_main_resources:
  - adobe-express
  - coolors
  - adobe-color
  - buttonbuddy
  - fontjoy
  - elixir-brand-guidelines
  - elixir-logos
  - converge-design
---


Let's be honest about who this is for. You're a researcher or a coordinator, not a designer. You make a flyer or a slide a few times a year, usually in PowerPoint or a free tool like Adobe Express. You might have the full Adobe Creative Cloud suite, but learning it is not a good use of your time. If you want to become a designer, take a design course – this chapter won't make you one, and doesn't try to.

What it will do is make you **good enough to direct tools and judge the result**. Because that is what the job actually is now: templates and AI do the production, and your real skill is **knowing what good looks like** – so you can prompt for it, and tell whether what comes back is any good.

{% include callout.html type="important" content="You can't prompt for, or assess, what you can't recognise. \"Make it look more professional\" is a useless instruction - to you or to an AI - unless you know that professional usually means fewer fonts, more whitespace, stronger hierarchy and tighter alignment. The eye comes first; the tools come second." %}

## The only mindset you need
**You direct, the tool produces, you judge.** You are not drawing anything. You are making decisions – what it should say, who it's for, what matters most – and then checking the output against a standard. Everything below serves those two jobs: setting the standard, and checking against it.

## What "good" looks like
You don't need design theory. You need a handful of tells that separate amateur from professional. Learn to spot these and you can fix 90% of bad designs:

| Looks amateur | Looks professional |
| --- | --- |
| Tries to say five things at once | Says **one** thing; everything else supports it |
| Everything the same size | Clear **hierarchy** – the most important thing is the biggest |
| Three or four fonts | **One or two** fonts, combined with purpose (for ELIXIR: Open Sans for print and slides, Lato for the web) |
| Every corner filled | Generous **whitespace**; the design can breathe |
| Elements floating randomly | **Alignment, spacing and distribution** – things line up on a clear grid |
| A rainbow of colours | Colour used **with intention, not a traffic light** – one or two ELIXIR colours that mean something, with enough contrast to read |
| Looks like no other ELIXIR material | **Consistent** with the ELIXIR brand (see [Chapter 7: Branding](07-comms-branding)) |

### See the difference
Same event, same information, two results. Look at the left one first – then try to find the date. Now do the same on the right.

<figure class="figure-diagram">
  <img src="{{ '/images/communication/design-before-after.svg' | relative_url }}" alt="The same webinar flyer made two ways. Left, amateur: yellow background, five colours, four fonts, every line centred and the same size, a project work-package line, four speaker names and a long topic list, so nothing stands out and the date is hard to find. Right, professional: royal blue background with a single orange accent, one font, a large headline 'Data stewardship, made simple', one supporting line, the date and time, and one 'Register now' button, all aligned to the left edge with plenty of empty space.">
  <figcaption>Left: tries to say everything, so it says nothing. Right: one message, clear hierarchy, two brand colours, one font, one call to action.</figcaption>
</figure>

<details markdown="1">
<summary>Spot the problems: what's wrong with the left one?</summary>

* **No hierarchy** – every line is roughly the same size, so the eye has nowhere to land.
* **Four fonts and five colours** – it looks noisy, and none of the colours means anything.
* **Process, not value** – "WP3 / Task 3.2" tells a researcher nothing about why they should attend.
* **Everything included** – four speakers and eight topics belong on the registration page, not the flyer.
* **Text on bright colours** – white on light green and yellow on red are hard to read (see [Chapter 5: Accessibility](05-comms-accessibility)).
* **Logo soup** – a row of logos competes with the message. One logo, in a corner, is enough.

</details>

{% include callout.html type="important" content="Design is all about your content. The design exists to make your message land - it is never decoration for its own sake. If your content doesn't fit the format you imagined, change the format: if you need two pages, make two pages, rather than cramming or cutting vital information to force a layout." %}

<!-- TODO (slide from CONVERGE talk): add the "Problem / Clear answer" before-and-after flyer here.
<img src="{{ '/images/communication/design-content-before-after.png' | relative_url }}" alt="Two flyers side by side. Left: a cramped single-page flyer with tiny text forced into one page. Right: the same content given two pages, with clear sections and whitespace." class="img-fluid my-3">
-->


**The squint test.** Look at your design and squint until it blurs – or step back from the screen. Whatever you can still make out is what people see first. If that isn't your key message, your hierarchy is wrong: make the important thing bigger, bolder or give it more space.

<div class="compare compare--visual compare--stacked" markdown="1">
<div class="compare-item compare-item--dont" markdown="1">
<p class="compare-label"><i class="fa-solid fa-xmark" aria-hidden="true"></i>Nothing survives</p>

<img src="{{ '/images/communication/design/squint-dont.svg' | relative_url }}" alt="The busy yellow flyer, sharp and then blurred. Blurred, it turns into coloured stripes and blocks; nothing is readable and the date and the call to action disappear.">

Blurred, it's just coloured stripes – the date and the sign-up link are lost.
</div>
<div class="compare-item compare-item--do" markdown="1">
<p class="compare-label"><i class="fa-solid fa-check" aria-hidden="true"></i>The message survives</p>

<img src="{{ '/images/communication/design/squint-do.svg' | relative_url }}" alt="The navy flyer, sharp and then blurred. Blurred, the large white headline and the orange Register now button still stand out, so the key message survives.">

Blurred, you still see the headline and the orange button – exactly what matters.
</div>
</div>

### Getting the details right
Most of what follows comes from the CONVERGE workshop series talk *Design made easy for communicators*. It's worth watching in full – it covers colour, fonts and layout with plenty of examples.

{% include video.html youtube="fFAlT51EPZQ" title="Design made easy for communicators (CONVERGE workshop series)" %}

The specifics that fix most problems:

**Colour – pick two, with intention**

* Two colours are usually enough to create contrast. Use an **accent colour for one purpose only** (e.g. links), so it keeps its meaning.
* Use **tints of the same colour** rather than reaching for new ones. The Brand Guidelines give official tints of each ELIXIR colour at 75%, 50% and 25%.
* **Don't be afraid of dark backgrounds** – they can look striking and professional, not just white-on-white.
* Test your palette for contrast and colour-blindness before you commit – the Brand Guidelines recommend the [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/); [Coolors](https://coolors.co/), [Adobe Color](https://color.adobe.com/create) and [Buttonbuddy](https://buttonbuddy.dev/) also do this for free.

<div class="compare compare--visual" markdown="1">
<div class="compare-item compare-item--dont" markdown="1">
<p class="compare-label"><i class="fa-solid fa-xmark" aria-hidden="true"></i>Five colours, no meaning</p>

<img src="{{ '/images/communication/design/colour-dont.svg' | relative_url }}" alt="A slide using red, green, purple, blue and yellow for the title, text and boxes, so no colour means anything.">

Every element shouts, so nothing stands out – and the yellow and orange text is hard to read.
</div>
<div class="compare-item compare-item--do" markdown="1">
<p class="compare-label"><i class="fa-solid fa-check" aria-hidden="true"></i>Two colours and one accent</p>

<img src="{{ '/images/communication/design/colour-do.svg' | relative_url }}" alt="A navy slide with white text; one orange accent marks the key number, so the eye goes straight to it.">

Navy and white do the work; orange is used once, on the number that matters.
</div>
</div>

<p class="contrast-chips-intro"><b>Check the contrast of every text colour.</b> The ELIXIR palette works – in the right combinations. Normal text needs at least 4.5:1.</p>

<div class="contrast-chips">
  <div class="contrast-chip contrast-chip--ok">
    <div class="contrast-chip-sample" style="background:#ffffff"><svg viewBox="0 0 170 24" role="img" aria-hidden="true" focusable="false"><text x="0" y="17" fill="#023452" font-family="Lato, 'Open Sans', Arial, sans-serif" font-size="16" font-weight="700">Aa – Register now</text></svg></div>
    <p class="contrast-chip-text"><i class="fa-solid fa-check" aria-hidden="true"></i><b>13:1</b> navy on white<br><small>Body text, headings</small></p>
  </div>
  <div class="contrast-chip contrast-chip--ok">
    <div class="contrast-chip-sample" style="background:#ffffff"><svg viewBox="0 0 170 24" role="img" aria-hidden="true" focusable="false"><text x="0" y="17" fill="#4d4848" font-family="Lato, 'Open Sans', Arial, sans-serif" font-size="16" font-weight="700">Aa – Register now</text></svg></div>
    <p class="contrast-chip-text"><i class="fa-solid fa-check" aria-hidden="true"></i><b>9:1</b> grey on white<br><small>Body text</small></p>
  </div>
  <div class="contrast-chip contrast-chip--ok">
    <div class="contrast-chip-sample" style="background:#023452"><svg viewBox="0 0 170 24" role="img" aria-hidden="true" focusable="false"><text x="0" y="17" fill="#f47d20" font-family="Lato, 'Open Sans', Arial, sans-serif" font-size="16" font-weight="700">Aa – Register now</text></svg></div>
    <p class="contrast-chip-text"><i class="fa-solid fa-check" aria-hidden="true"></i><b>4.8:1</b> orange on navy<br><small>Headings and accents</small></p>
  </div>
  <div class="contrast-chip contrast-chip--ok">
    <div class="contrast-chip-sample" style="background:#f47d20"><svg viewBox="0 0 170 24" role="img" aria-hidden="true" focusable="false"><text x="0" y="17" fill="#023452" font-family="Lato, 'Open Sans', Arial, sans-serif" font-size="16" font-weight="700">Aa – Register now</text></svg></div>
    <p class="contrast-chip-text"><i class="fa-solid fa-check" aria-hidden="true"></i><b>4.8:1</b> navy on orange<br><small>Buttons, labels</small></p>
  </div>
  <div class="contrast-chip contrast-chip--fail">
    <div class="contrast-chip-sample" style="background:#ffffff"><svg viewBox="0 0 170 24" role="img" aria-hidden="true" focusable="false"><text x="0" y="17" fill="#f47d20" font-family="Lato, 'Open Sans', Arial, sans-serif" font-size="16" font-weight="700">Aa – Register now</text></svg></div>
    <p class="contrast-chip-text"><i class="fa-solid fa-xmark" aria-hidden="true"></i><b>2.7:1</b> orange on white<br><small>Too pale for text</small></p>
  </div>
  <div class="contrast-chip contrast-chip--fail">
    <div class="contrast-chip-sample" style="background:#f47d20"><svg viewBox="0 0 170 24" role="img" aria-hidden="true" focusable="false"><text x="0" y="17" fill="#ffffff" font-family="Lato, 'Open Sans', Arial, sans-serif" font-size="16" font-weight="700">Aa – Register now</text></svg></div>
    <p class="contrast-chip-text"><i class="fa-solid fa-xmark" aria-hidden="true"></i><b>2.7:1</b> white on orange<br><small>Too pale for text</small></p>
  </div>
  <div class="contrast-chip contrast-chip--fail">
    <div class="contrast-chip-sample" style="background:#ffffff"><svg viewBox="0 0 170 24" role="img" aria-hidden="true" focusable="false"><text x="0" y="17" fill="#bebf32" font-family="Lato, 'Open Sans', Arial, sans-serif" font-size="16" font-weight="700">Aa – Register now</text></svg></div>
    <p class="contrast-chip-text"><i class="fa-solid fa-xmark" aria-hidden="true"></i><b>2.0:1</b> olive on white<br><small>Decoration only</small></p>
  </div>
</div>


**Fonts – one or two, paired with purpose**

* Stick to one or two. For ELIXIR that's **Open Sans** for slides, documents, posters and print, and **Lato** for websites (and wherever Open Sans isn't available).
* Create hierarchy with **size and weight, not more fonts**. For documents and slides, the [Brand Guidelines](https://elixir-europe.org/sites/default/files/documents/elixir-brand-guidelines-2025.pdf) (p. 16) recommend:

| Text | Size | Style |
| --- | --- | --- |
| Document title | 28 pt | Bold, royal blue |
| Headings | 14 pt and 12 pt | Bold, royal blue |
| Body text | 10–11 pt, at least 1.15 line spacing | Regular, dark grey |
| Smallest text (e.g. a copyright line) | Never below 8 pt | Regular |
| Slides | At least 18 pt | – |

* When you do need to pair fonts, a **sans-serif heading with a serif body (or vice versa)** is a reliable trick. [Fontjoy](https://fontjoy.com/) generates pairings for you.

<div class="compare compare--visual" markdown="1">
<div class="compare-item compare-item--dont" markdown="1">
<p class="compare-label"><i class="fa-solid fa-xmark" aria-hidden="true"></i>Four fonts, one size</p>

<img src="{{ '/images/communication/design/fonts-dont.svg' | relative_url }}" alt="A slide mixing Impact, Comic Sans, Times and Courier, all at a similar size, so nothing stands out.">

Four personalities fighting, and with everything the same size you don't know where to start reading.
</div>
<div class="compare-item compare-item--do" markdown="1">
<p class="compare-label"><i class="fa-solid fa-check" aria-hidden="true"></i>One font, clear hierarchy</p>

<img src="{{ '/images/communication/design/fonts-do.svg' | relative_url }}" alt="The same slide in one font: a large bold title, a medium subtitle, regular body text and a small grey detail line.">

Size, weight and colour create the order: title, then subtitle, then detail.
</div>
</div>


**Layout – tidy beats fancy**

* The easiest win is **alignment, spacing and distribution**. Most amateur-looking designs aren't ugly, just untidy. In PowerPoint, select your objects and use the **Align** and **Distribute** tools instead of eyeballing it.
* Align text blocks to the same edge, and give every paragraph the **same space before and after** it.
* Use **blank space to separate sections**, and make headings and links obvious through colour and position.

<div class="compare compare--visual" markdown="1">
<div class="compare-item compare-item--dont" markdown="1">
<p class="compare-label"><i class="fa-solid fa-xmark" aria-hidden="true"></i>Untidy</p>

<img src="{{ '/images/communication/design/layout-dont.svg' | relative_url }}" alt="Three boxes of different sizes, out of line with each other, with uneven gaps and a mix of centred and left-aligned text.">

Nothing is technically wrong – it just looks careless. Boxes don't line up, gaps vary, text is centred in some boxes and not others.
</div>
<div class="compare-item compare-item--do" markdown="1">
<p class="compare-label"><i class="fa-solid fa-check" aria-hidden="true"></i>Tidy</p>

<img src="{{ '/images/communication/design/layout-do.svg' | relative_url }}" alt="The same three boxes at the same size, aligned in a row with equal gaps, all text aligned to the left edge.">

Same content: one size, equal gaps, one left edge. That's the Align and Distribute tools doing the work.
</div>
</div>


<!-- Optional (slide from CONVERGE talk): the layout pair above could be swapped for the CONVERGE alignment before-and-after.
<img src="{{ '/images/communication/design-alignment-before-after.png' | relative_url }}" alt="Before: a slide with a dense block of text and misaligned boxes. After: the same content tidied with aligned, evenly distributed boxes, clear headings and blank space between sections." class="img-fluid my-3">
-->


## Start from a template, not a blank page
A blank canvas is where non-designers come unstuck. A good template has already made the hard decisions – hierarchy, spacing, fonts, colours – so you only change the content.

* Use the official ELIXIR templates and visuals from the [intranet branding page](https://elixir-europe.org/documents/elixir-logos-and-other-visuals) wherever one exists – they're on-brand by default.
* In Adobe Express, find a clean template and **save your own ELIXIR-branded version** (correct colours, fonts, logo) once, then reuse it. The second flyer takes minutes.
* Resist customising. Every change you make to a good template is a chance to make it worse. Change the words and the image; leave the structure alone.

## Using AI tools well
AI design tools (Adobe Express's AI features and general image tools) are genuinely useful for first drafts, layout ideas, resizing, removing backgrounds and generating supporting imagery. But they only produce something good if **you** bring the standard.

### The ELIXIR palette – copy these into your prompt
From the [ELIXIR Brand Guidelines (2025)](https://elixir-europe.org/sites/default/files/documents/elixir-brand-guidelines-2025.pdf). Royal blue is the primary colour and grey the neutral; orange and olive green are accents.

<div class="palette-swatches">
  <div class="swatch"><span class="swatch-chip" style="background:#023452"></span><b>Royal blue</b><code>#023452</code><small>Primary</small></div>
  <div class="swatch"><span class="swatch-chip" style="background:#4d4848"></span><b>Neutral grey</b><code>#4d4848</code><small>Primary / text</small></div>
  <div class="swatch"><span class="swatch-chip" style="background:#f47d20"></span><b>Bright orange</b><code>#f47d20</code><small>Accent</small></div>
  <div class="swatch"><span class="swatch-chip" style="background:#bebf32"></span><b>Olive green</b><code>#bebf32</code><small>Accent</small></div>
</div>

{% include callout.html type="tip" content="Orange and olive green work as text colours on dark backgrounds (e.g. on royal blue), but not as text on white – the contrast is too low. On white, keep text in royal blue or grey." %}

### Prompt with constraints, not vibes
A vague prompt gives generic output. Tell the tool exactly what it needs:

* **Purpose and audience** – "a webinar announcement for researchers"
* **Format and dimensions** – "LinkedIn post, square, 1080×1080"
* **The one key message** – the single thing it must communicate
* **Brand constraints** – the ELIXIR palette as exact hex codes (see the palette below) and the font (Open Sans; Lato for web graphics)
* **Tone** – "clean and professional, lots of whitespace, not busy"

<div class="compare" markdown="1">
<div class="compare-item compare-item--dont" markdown="1">
<p class="compare-label"><i class="fa-solid fa-xmark" aria-hidden="true"></i>Weak prompt</p>

"Make a nice banner for our webinar."
</div>
<div class="compare-item compare-item--do" markdown="1">
<p class="compare-label"><i class="fa-solid fa-check" aria-hidden="true"></i>Strong prompt</p>

"A clean, professional square banner (1080×1080) announcing an ELIXIR webinar for researchers. Use ELIXIR royal blue #023452 as the background and bright orange #f47d20 as the only accent, Open Sans for all text, generous whitespace. One headline, the date and space for a logo in the corner. Minimal, not busy."
</div>
</div>

### The hard rules
{% include callout.html type="warning" content="Never let AI generate the ELIXIR logo, and never trust text baked into an AI image. AI mangles logos and produces gibberish or misspelled text. Generate the background or layout with AI if you like, then add the official logo (from the intranet branding page) and the real text yourself." %}

* **Set the colours – don't hope.** AI won't respect the ELIXIR palette unless you give it the hex codes.
* **Check accessibility.** Contrast, ALT text and never leave key information trapped inside the image – see [Chapter 5: Accessibility](05-comms-accessibility).
* **If it looks off but you can't say why,** run it past the "what good looks like" table. It's almost always too much text, weak hierarchy or not enough whitespace.

## A workflow you can repeat
- [ ] Define the **one message**, the **audience** and the **format/size** before opening any tool.
- [ ] Start from an **ELIXIR template**, or set your brand constraints (palette hex codes, Open Sans / Lato).
- [ ] Draft it – in Adobe Express or with an AI tool given a constraint-rich prompt.
- [ ] **Judge** it against the "what good looks like" table and the squint test.
- [ ] Fix the **one or two biggest problems** (usually: too much text, weak hierarchy).
- [ ] Drop in the **official logo** and check **accessibility** (contrast, ALT, no text-as-image).
- [ ] Get **one other person** to glance at it before you publish.

<div class="exercise-box" markdown="1">
## Exercise
Take a recent slide or flyer from your Node.

1. Run it through the "what good looks like" table. Which two things are weakest?
2. Either fix those two in your existing tool, **or** recreate it from an ELIXIR template (or an AI prompt with full brand constraints) and compare.
3. Do the squint test on both versions. Does the key message survive?

The goal isn't a perfect design – it's to build the habit of **judging before publishing**, which is the only design skill you really need.
</div>
