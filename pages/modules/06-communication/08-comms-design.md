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

Let's be honest about who this is for. You're a researcher or a coordinator, not a designer. You make a flyer or a slide a few times a year, usually in PowerPoint or a free tool like Adobe Express. This chapter won't make you a designer, and doesn't try to.

What it will do is make you **good enough to direct tools and judge the result**: templates and AI do the production, and your job is to know what good looks like, so you can ask for it and recognise it.

{% include callout.html type="important" content="You can't prompt for, or assess, what you can't recognise. \"Make it look more professional\" is a useless instruction – to you or to an AI – unless you know that professional usually means fewer fonts, more whitespace, stronger hierarchy and tighter alignment. The eye comes first; the tools come second." %}

<details markdown="1">
<summary>Prefer to watch? The whole chapter as a talk</summary>

Most of this chapter comes from the CONVERGE workshop series talk *Design made easy for communicators*.

{% include video.html youtube="fFAlT51EPZQ" title="Design made easy for communicators (CONVERGE workshop series)" %}

</details>

<p class="lesson-label">Lesson 1 of 5 · about 3 minutes</p>

## What "good" looks like
{: #what-good-looks-like}

You don't need design theory. A handful of tells separate amateur from professional: **one message**, a clear **hierarchy**, generous **whitespace**, things that **line up**, and **colour used with intention**. Design exists to make your message land – if the content doesn't fit the format, change the format rather than cramming.

<figure class="figure-diagram">
  <img src="{{ '/images/communication/design-before-after.svg' | relative_url }}" alt="The same webinar flyer made two ways. Left, amateur: yellow background, five colours, four fonts, every line centred and the same size, a project work-package line, four speaker names and a long topic list, so nothing stands out and the date is hard to find. Right, professional: royal blue background with a single orange accent, one font, a large headline 'Data stewardship, made simple', one supporting line, the date and time, and one 'Register now' button, all aligned to the left edge with plenty of empty space.">
  <figcaption>Left: tries to say everything, so it says nothing. Right: one message, clear hierarchy, two brand colours, one font, one call to action.</figcaption>
</figure>

{% include quick-check.html question="On which flyer can you find the date in under two seconds?" options="The yellow one|The navy one|Both" correct="2" explain="On the navy flyer the date sits on its own line, in bold, with space around it. On the yellow one it competes with five colours and four fonts." %}

<details markdown="1">
<summary>Go deeper: the full amateur vs professional checklist</summary>

| Looks amateur | Looks professional |
| --- | --- |
| Tries to say five things at once | Says **one** thing; everything else supports it |
| Everything the same size | Clear **hierarchy** – the most important thing is the biggest |
| Three or four fonts | **One or two** fonts, combined with purpose (for ELIXIR: Open Sans for print and slides, Lato for the web) |
| Every corner filled | Generous **whitespace**; the design can breathe |
| Elements floating randomly | **Alignment, spacing and distribution** – things line up on a clear grid |
| A rainbow of colours | Colour used **with intention, not a traffic light** – one or two ELIXIR colours that mean something, with enough contrast to read |
| Looks like no other ELIXIR material | **Consistent** with the ELIXIR brand (see [Chapter 7: Branding](07-comms-branding)) |
</details>

<details markdown="1">
<summary>Spot the problems: what's wrong with the left one?</summary>

* **No hierarchy** – every line is roughly the same size, so the eye has nowhere to land.
* **Four fonts and five colours** – it looks noisy, and none of the colours means anything.
* **Process, not value** – "WP3 / Task 3.2" tells a researcher nothing about why they should attend.
* **Everything included** – four speakers and eight topics belong on the registration page, not the flyer.
* **Text on bright colours** – white on light green and yellow on red are hard to read (see [Chapter 5: Accessibility](05-comms-accessibility)).
* **Logo soup** – a row of logos competes with the message. One logo, in a corner, is enough.

</details>

<p class="lesson-label">Lesson 2 of 5 · about 3 minutes</p>

## Colour
{: #colour}

**Two colours and one accent.** In ELIXIR materials, royal blue and white do most of the work; orange is the accent – use it once, on the thing that matters. And every text colour has to pass a contrast check.

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

{% include quick-check.html question="Orange text on a white background – does it pass the contrast check?" options="Yes – it's an ELIXIR colour|No – it's too pale for text" correct="2" explain="At 2.7:1 it's well below the 4.5:1 that normal text needs. Use orange for large or decorative elements, and bold to emphasise words in body text." %}

<details markdown="1">
<summary>Go deeper: the ELIXIR palette and which colour pairs work</summary>

From the [ELIXIR Brand Guidelines (2025)](https://elixir-europe.org/sites/default/files/documents/elixir-brand-guidelines-2025.pdf). Royal blue is the primary colour and grey the neutral; orange and olive green are accents. Copy these hex codes into any design tool or AI prompt.

<div class="palette-swatches">
  <div class="swatch"><span class="swatch-chip" style="background:#023452"></span><b>Royal blue</b><code>#023452</code><small>Primary</small></div>
  <div class="swatch"><span class="swatch-chip" style="background:#4d4848"></span><b>Neutral grey</b><code>#4d4848</code><small>Primary / text</small></div>
  <div class="swatch"><span class="swatch-chip" style="background:#f47d20"></span><b>Bright orange</b><code>#f47d20</code><small>Accent</small></div>
  <div class="swatch"><span class="swatch-chip" style="background:#bebf32"></span><b>Olive green</b><code>#bebf32</code><small>Accent</small></div>
</div>

* Use **tints of the same colour** rather than reaching for new ones – the Brand Guidelines give official tints at 75%, 50% and 25%.
* **Don't be afraid of dark backgrounds** – they can look striking and professional.
* The Brand Guidelines suggest bright orange for highlighting text. On white, use it for large or decorative elements and bold for emphasis in body text, because orange text on white doesn't meet contrast requirements.
* Test any other combination with the [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/) (recommended by the Brand Guidelines); [Coolors](https://coolors.co/), [Adobe Color](https://color.adobe.com/create) and [Buttonbuddy](https://buttonbuddy.dev/) also check colour-blindness.

Normal text needs at least 4.5:1:

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
</details>

<p class="lesson-label">Lesson 3 of 5 · about 3 minutes</p>

## Type
{: #type}

**One font; hierarchy from size and weight.** For ELIXIR that's **Open Sans** for slides, documents and print, and **Lato** for websites. Make the most important thing the biggest, and let everything else step down.

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

{% include quick-check.html question="Your slide needs a title, a subtitle and body text. How many fonts should it use?" options="One – vary the size and weight|Two – a different one for the title|Three – one per level" correct="1" explain="One font is enough: size, weight and colour create the order. If you ever pair two, pair a sans-serif with a serif – never three." %}

<details markdown="1">
<summary>Go deeper: recommended sizes from the Brand Guidelines</summary>

For documents and slides, the [Brand Guidelines](https://elixir-europe.org/sites/default/files/documents/elixir-brand-guidelines-2025.pdf) (p. 16) recommend:

| Text | Size | Style |
| --- | --- | --- |
| Document title | 28 pt | Bold, royal blue |
| Headings | 14 pt and 12 pt | Bold, royal blue |
| Body text | 10–11 pt, at least 1.15 line spacing | Regular, dark grey |
| Smallest text (e.g. a copyright line) | Never below 8 pt | Regular |
| Slides | At least 18 pt | – |

When you do need to pair fonts, a **sans-serif heading with a serif body (or vice versa)** is a reliable trick – [Fontjoy](https://fontjoy.com/) generates pairings for you.
</details>

<p class="lesson-label">Lesson 4 of 5 · about 3 minutes</p>

## Layout and the squint test
{: #layout-and-squint-test}

**Tidy beats fancy.** Most amateur-looking designs aren't ugly, just untidy: line things up, keep gaps even, use one text edge. Then check your hierarchy with the squint test.

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

**The squint test.** Squint at your design until it blurs – or step back from the screen. Whatever you can still make out is what people see first. If that isn't your key message, make it bigger, bolder or give it more space.
{: #squint-test}

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

{% include quick-check.html question="You squint at your flyer and the logo is the clearest thing on it. What does that tell you?" options="Good – the brand is visible|The hierarchy is wrong – your key message should stand out most|Nothing – squinting only tests colour" correct="2" explain="What survives the squint is what people see first. The message – the event, the date, the action – should win, not the logo." %}

<details markdown="1">
<summary>Go deeper: tidying a layout in PowerPoint</summary>

* Select your objects and use the **Align** and **Distribute** tools instead of eyeballing it.
* Align text blocks to the same edge, and give every paragraph the **same space before and after** it.
* Use **blank space to separate sections**, and make headings and links obvious through colour and position.
</details>

<!-- Optional (slide from CONVERGE talk): the layout pair above could be swapped for the CONVERGE alignment before-and-after.
<img src="{{ '/images/communication/design-alignment-before-after.png' | relative_url }}" alt="Before: a slide with a dense block of text and misaligned boxes. After: the same content tidied with aligned, evenly distributed boxes, clear headings and blank space between sections." class="img-fluid my-3">
-->

<p class="lesson-label">Lesson 5 of 5 · about 3 minutes</p>

## Let the tools do the production
{: #tools}

**Start from a template, and give AI constraints, not vibes.** A good template has already made the hard design decisions – use the official ELIXIR templates from the [intranet branding page](https://elixir-europe.org/documents/elixir-logos-and-other-visuals), or save your own ELIXIR-branded template in Adobe Express once and reuse it. When you use AI, tell it the purpose, the format, the one message, the brand colours and fonts, and the tone.

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

{% include callout.html type="warning" content="Never let AI generate the ELIXIR logo, and never trust text baked into an AI image. AI mangles logos and produces gibberish or misspelled text. Generate the background or layout with AI if you like, then add the official logo (from the intranet branding page) and the real text yourself." %}

{% include quick-check.html question="Your AI tool keeps producing banners in random blues and greens. What's the fix?" options="Ask it to make it look more on-brand|Give it the exact ELIXIR hex codes|Try a different AI tool" correct="2" explain="AI won't respect the ELIXIR palette unless you give it the hex codes – #023452 royal blue and #f47d20 orange. Vague requests get vague results." %}

<details markdown="1">
<summary>Go deeper: what to put in a prompt, and template tips</summary>

* **Purpose and audience** – "a webinar announcement for researchers"
* **Format and dimensions** – "LinkedIn post, square, 1080×1080"
* **The one key message** – the single thing it must communicate
* **Brand constraints** – the [ELIXIR palette](#colour) as exact hex codes and the font (Open Sans; Lato for web graphics)
* **Tone** – "clean and professional, lots of whitespace, not busy"

With templates, resist customising: every change to a good template is a chance to make it worse. Change the words and the image; leave the structure alone. And always check accessibility – contrast, ALT text and never leaving key information trapped inside an image (see [Chapter 5: Accessibility](05-comms-accessibility)).
</details>

<details markdown="1">
<summary>Go deeper: animated GIFs in PowerPoint (no AI)</summary>

You can make a smooth, looping GIF in PowerPoint alone – no AI and no video editor. Two things matter:

1. **Keep it native and light.** Animate with PowerPoint's own motion **paths** and shapes rather than importing video or lots of images – otherwise the file becomes too heavy to export well.
2. **Use Morph, and loop it.** Put each state on its own slide and use the **Morph transition** between them. Make the **last slide identical to the first** so the loop is seamless, then turn looping on when you export.

Export via *File → Export → Create Animated GIF*. Keep it short, never let it flash rapidly (a seizure risk), and give it ALT text or surrounding context (see [Chapter 5: Accessibility](05-comms-accessibility)).

<img src="{{ '/images/communication/RDMkit_square_small.gif' | relative_url }}" alt="Animated square made in PowerPoint: the words 'Do you work with … data?' beside a large question mark, with the highlighted word changing from research to plant sciences, metagenomics, COVID-19 and human. It then fades to the RDMkit logo, 'data management made simple', and the ELIXIR CONVERGE logo, and loops." width="320" height="320" class="img-fluid my-3">

*An RDMkit promo made in PowerPoint – five seconds, looping, under 0.5 MB.*
</details>

## Put it into practice

A workflow you can repeat every time:

- [ ] Define the **one message**, the **audience** and the **format/size** before opening any tool.
- [ ] Start from an **ELIXIR template**, or set your brand constraints (palette hex codes, Open Sans / Lato).
- [ ] Draft it – in Adobe Express or with an AI tool given a constraint-rich prompt.
- [ ] **Judge** it against the [What "good" looks like](#what-good-looks-like) table and the [squint test](#squint-test).
- [ ] Fix the **one or two biggest problems** (usually: too much text, weak hierarchy).
- [ ] Drop in the **official logo** and check **accessibility** (contrast, ALT, no text-as-image).
- [ ] Get **one other person** to glance at it before you publish.

<div class="exercise-box" markdown="1">
### Project: fix one real design
Take a recent slide or flyer from your Node.

1. Run it through [What "good" looks like](#what-good-looks-like). Which two things are weakest?
2. Either fix those two in your existing tool, **or** recreate it from an ELIXIR template (or an AI prompt with full brand constraints) and compare.
3. Do the [squint test](#squint-test) on both versions. Does the key message survive?

The goal isn't a perfect design – it's to build the habit of **judging before publishing**, which is the only design skill you really need.
</div>
