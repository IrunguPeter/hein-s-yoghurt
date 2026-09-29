---
name: Hein Yoghurt
description: A small shop window. Two flavour shelves, one price list, and a green door out to WhatsApp.
colors:
  bg: "#f2f3f1"
  card: "#ffffff"
  ink: "#16211d"
  ink-quiet: "#55605b"
  faint: "#7f8883"
  line: "#e2e5e1"
  line-soft: "#eef0ed"
  green: "#0f7a6d"
  green-dark: "#0b6258"
  green-tint: "#e6f4f2"
  vanilla-tint: "#fbf4e6"
  vanilla-line: "#eddfc2"
  berry-tint: "#fdeef1"
  berry-line: "#f4d3da"
typography:
  logo:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 9vw, 3.5rem)"
    fontWeight: 700
    letterSpacing: "-0.035em"
    lineHeight: 1
  logo-sub:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    letterSpacing: "0.16em"
  flavour-name:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    letterSpacing: "-0.02em"
  price:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    letterSpacing: "-0.02em"
  price-unit:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  sf-size:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
  total:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  action:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
  hint:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
rounded:
  card: "1rem"
  inner: "0.75rem"
  pill: "999px"
spacing:
  gap: "1rem"
  pad: "1.25rem"
  page: "68rem"
  touch: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.green-dark}"
  stepper-button:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    width: "2.5rem"
    height: "2.5rem"
  card:
    backgroundColor: "{colors.card}"
    borderColor: "{colors.line}"
    rounded: "{rounded.card}"
---

## Overview

**Creative North Star: "The Shop Window."**

This is the front of a small shop, seen from the street. Two shelves, one for each flavour, and
on each shelf two pots with the price written large beside them. It is a page anyone can read in
three seconds without being taught how: what is for sale, what it costs, and the green door you
walk through to order.

The whole vocabulary is borrowed from shops and marketplaces, because that is a shape nobody has
to learn. Cards, not rules. Steppers, not tally marks. One green button, not a colour system. The
previous design in this folder was an exercise book read as an order book; it was charming and it
was too clever, and a customer had to decode it before they could buy. Decoding is the enemy here.

**Key Characteristics:**
- Two cards, one per flavour, side by side on a wide screen, stacked on a phone.
- Every price visible immediately, with the size and the price on the same line.
- One accent: WhatsApp green, used for the way out and nothing else.
- The order button is fixed to the bottom of the screen, so it is never scrolled away from.
- The flavour is told apart by its name first; the tint is decoration behind the name.
- Nothing is invented: no photos, no reviews, no ingredient claims, no tasting notes.

## Colors

White cards on a light grey page, one green, two flavour washes that never carry meaning alone.

| Token | Value | Role |
| --- | --- | --- |
| `bg` | `#f2f3f1` | The page behind the cards. Cool grey, not cream. |
| `card` | `#ffffff` | Cards, the order bar, the stepper buttons. |
| `ink` | `#16211d` | Body text, names, prices. |
| `ink-quiet` | `#55605b` | Secondary text, labels, the empty state of a count. |
| `faint` | `#7f8883` | Disabled controls only. Deliberately the weakest thing on the page. |
| `line` | `#e2e5e1` | Card borders, the bar's top rule. |
| `line-soft` | `#eef0ed` | Divider between the two pots inside a card. |
| `green` | `#0f7a6d` | The order button, the "Yoghurt" word under the logo, selection. |
| `green-dark` | `#0b6258` | The button on hover. |
| `green-tint` | `#e6f4f2` | The stepper button on hover. |
| `vanilla-tint` / `vanilla-line` | `#fbf4e6` / `#eddfc2` | The vanilla card's head only. |
| `berry-tint` / `berry-line` | `#fdeef1` / `#f4d3da` | The strawberry card's head only. |

**The Green Contrast Rule.** The obvious WhatsApp green (`#128c7e`) fails WCAG AA both ways: it
gives only 4.14:1 for white text sitting on it, and 3.72:1 as text on this page's background. The
darker green used here, `#0f7a6d`, gives 5.22:1 and 4.69:1 respectively. Both pass. If the green is
ever changed, both of those numbers have to be checked again, not just the first one.

**The Name-First Rule.** Vanilla and strawberry are distinguished by their written names before
anything else. The tint is allowed to reinforce the flavour, never to be the only thing that says
which is which, because a tint does not survive a colour-blind reader or bright sunlight.

**The One Green Rule.** Green means "this goes to WhatsApp". It appears on the order button, the
hover state of a stepper button, and the small word under the logo. It is not used decoratively.

## Typography

One family, Outfit, self-hosted as a variable font, in three weights: 400, 600, 700.

- **Logo** — the only display type. `clamp(2.5rem, 9vw, 3.5rem)`, weight 700, tracking -0.035em.
- **Logo noun** — "Yoghurt", 0.95rem, weight 500, tracking 0.16em, uppercase, in `green`.
- **Flavour name** — 1.35rem weight 700, tracking -0.02em.
- **Price** — 1.5rem weight 700 with the `KSh` prefix at 0.8rem weight 600 in `ink-quiet`, so the
  number is what the eye lands on and the currency is confirmed rather than shouted.
- **Size** — 1.05rem weight 600, with the unit ("ml") at 400 in `ink-quiet`.
- **Body** — 1rem / 1.5. Prose capped between 46ch and 62ch.
- **Action** — 1.05rem weight 600 on the order button.

There is no eleven-pixel label tier in this design. The smallest text on the page is 0.8rem
(12.8px), and every piece of it is `ink-quiet` on white, which measures 6.5:1.

## Layout

One column on a phone, two on a wide screen. The page is capped at 68rem.

- **Below 44rem:** the two flavour cards stack, full width. The order bar is fixed to the bottom of
  the screen and wraps onto two lines: the order button, then the copy link beneath it.
- **At 44rem and above:** the cards sit side by side. The order bar becomes one row, with the copy
  link pushed to the right-hand end.
- The order bar is the only element outside the flow, and it is present at every width. It is
  fixed rather than sticky, so the way out of the page is always in the same place.

**The Measured Reserve Rule.** Because the bar is fixed, the page reserves room for it with
`padding-bottom: calc(var(--bar-real) + 1.25rem)`, and `--bar-real` is measured from the bar by a
`ResizeObserver` in `app.js` rather than guessed in CSS. This was a real bug: the first version
hard-coded a 5.25rem reserve, but the bar is 120px in two-line mobile form and 173px at 320px
wide, so the footer's last line sat underneath it. Measured reserves across the tested cases:
120px at 390px wide, 173px at 320px, 75px on desktop, and 237px when a phone's root font is set to
22px. All four now clear.

## Elevation & Depth

Almost flat. Two very shallow shadows, both tinted to the ink hue rather than black:

- Cards: `0 1px 2px rgba(22, 33, 29, 0.04)` — enough to lift the white off the grey, no more.
- Stepper buttons: `0 1px 2px rgba(22, 33, 29, 0.08)`, so the round button reads as a real key.
- The order bar: `0 -6px 24px -14px rgba(22, 33, 29, 0.4)`, so content passing under it reads as
  underneath rather than colliding.

## Shapes

A documented three-part radius scale, applied without exception:

- **Cards: `1rem`.** The flavour cards and the "collect it" panel.
- **Inner: `0.75rem`.** Reserved for elements nested inside a card.
- **Pills: `999px`.** Everything interactive: stepper buttons, the stepper track, the order button.

Rule: round things are things you press; square-ish things are things that hold content.

## Components

### The flavour card
- **Shape:** `1rem` radius, 1px `line` border, flat white body.
- **Head:** the flavour name on a tinted band with a matching border below it. Vanilla is cream,
  strawberry is pink. The band is the only place a flavour tint appears.
- **Rows:** the two pots, divided by a 1px `line-soft` rule, 76px minimum height each.

### The stepper
- **Shape:** a pill track in `bg` with a 1px border, holding a minus key, the count, and a plus key.
- **Keys:** 2.5rem round buttons, white, with the ink shadow. The plus key is `ink`; the minus key
  is `ink-quiet` and becomes `faint` when disabled.
- **Disabled minus:** at a count of zero the minus is `disabled`, so it leaves the tab order. A
  keyboard user tabs the plus keys, and the minus keys join the order as soon as there is
  something to remove.
- **Count:** tabular figures, weight 700 in `ink` once positive and weight 500 in `ink-quiet` at
  zero.
- **Cap:** 20 per pot, enforced in `app.js`.

### The order bar
- **Shape:** full-width, fixed, 1px `line` top border, tinted shadow below-into-the-page.
- **Contents:** the pot count and the running total on the left, divided by a hairline from the
  order button, with the copy link wrapped beneath on a phone and pushed right on a wide screen.
- **Empty state:** the count reads "Nothing picked yet", the total `KSh 0` sits in `ink-quiet`,
  and the copy link is disabled.
- **The button:** a green pill, 3.25rem tall, with the WhatsApp glyph drawn inline and the words
  "Order on WhatsApp". White on green at 5.22:1.

### The copy link
- **Style:** a text button, no fill, underlined in `line`, 0.85rem weight 500.
- **Role:** the fallback for an in-app browser that will not open a WhatsApp link. It copies the
  same message the button would have sent.
- **Disabled:** `faint`, no underline, while the order is empty.

### The fill-in slots
- **Style:** filled values are 600 weight in `ink`. Unfilled slots show the prompt text in
  `ink-quiet` (6.54:1) with a dashed underline, so an empty slot reads as a blank to be filled
  rather than a value.

### Without scripting
`html.no-js` hides the steppers, the hint, and the copy link, leaving a clean price list with two
cards that still show every size and every price. The order button still opens WhatsApp.

## Do's and Don'ts

### Do:
- **Do** keep every price on the first screen at every width. This is the page's whole job.
- **Do** keep the order button fixed and visible at all widths, and measure the bar to reserve
  space for it rather than hard-coding a height.
- **Do** check both directions of any colour change: text on the fill, and the fill as text.
- **Do** keep the smallest type at 0.8rem / 12.8px or larger.
- **Do** keep interactive targets at 40px minimum; the stepper keys are 40px and the order button
  52px.
- **Do** animate `transform` and `opacity` only, and honour `prefers-reduced-motion`.
- **Do** keep the page usable with scripting off.

### Don't:
- **Don't** add a second accent colour, a gradient, or an illustration.
- **Don't** let a flavour tint be the only thing distinguishing the flavours.
- **Don't** hide the order behind a basket, a cart page, an account, a payment step, or a spinner.
  WhatsApp is the checkout, and the page should never pretend otherwise.
- **Don't** invent product copy. No ingredient claims, no tasting notes, no health or nutrition
  claims, no sourcing, no reviews, no availability promises, no delivery promises.
- **Don't** use the bright `#128c7e` WhatsApp green for text or as a text background; it fails AA.
- **Don't** add a build step, framework, or third-party request. One folder, a local font.
