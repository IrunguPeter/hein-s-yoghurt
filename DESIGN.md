---
name: Hein Yoghurt
description: A squared exercise book read as a working order book, for ordering yoghurt over WhatsApp.
colors:
  paper: "#e6e8e3"
  paper-bright: "#f7f7f4"
  ink: "#1b2430"
  ink-quiet: "#5a6165"
  red: "#c0273c"
  red-deep: "#a32739"
  rule: "rgba(27, 36, 48, 0.26)"
  rule-strong: "rgba(27, 36, 48, 0.6)"
  grid: "rgba(27, 36, 48, 0.1)"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 18vw, 6.25rem)"
    fontWeight: 800
    fontVariation: "'wght' 800, 'wdth' 125"
    lineHeight: 0.86
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 5.6vw, 2.125rem)"
    fontWeight: 700
    fontVariation: "'wght' 700, 'wdth' 125"
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  price:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 6.4vw, 2rem)"
    fontWeight: 600
    fontVariation: "'wght' 600, 'wdth' 78"
    lineHeight: 1.15
  total:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.15
  order-line:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.35
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "0.01em"
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  control:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
  note:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
  wordmark-noun:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    fontVariation: "'wght' 600, 'wdth' 62"
    letterSpacing: "0.22em"
  skip:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    fontVariation: "'wght' 600, 'wdth' 62"
    letterSpacing: "0.14em"
  nav:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    fontVariation: "'wght' 600, 'wdth' 62"
    letterSpacing: "0.16em"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    fontVariation: "'wght' 600, 'wdth' 62"
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  field: "0.75rem"
  gap: "1rem"
  section: "1.5rem"
  plate: "0.4rem"
components:
  button-primary:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.paper-bright}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.8rem"
    height: "3.3rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  link-underline:
    textColor: "{colors.ink}"
  field-label:
    textColor: "{colors.ink-quiet}"
  nav-link:
    textColor: "{colors.ink-quiet}"
---

## Overview

**Creative North Star: "The Order Book."**

This page is a squared exercise book that happens to be open at the order page. Every
decision serves that: the surface is paper, the layout is a 30px (8mm) squared grid you can
see faintly through the page, and a red margin rule runs down the left edge like the one in a
notebook. Structure comes from pencil rules and column heads, not from boxes, shadows, or
rounded cards. There are no photographs anywhere, because the product is made in a home
kitchen and the book is the packaging.

The interface is the order form. Tapping a pot is the act of writing a line in the book, so
quantities are drawn as tally strokes rather than set as digits alone. The WhatsApp message is
composed and shown in full before it is sent, never hidden behind a basket, a checkout, or a
login. Money is real and visible at all times: every pot carries its price, and the total is
repeated in the pinned bar so it is never more than a glance away.

**Key Characteristics:**
- Paper first, ink second, exactly one red, used only where a hand would press harder.
- Hairline rules and column heads instead of cards, borders-with-radius, or drop shadows.
- Counts as tally strokes, because a book marks quantity by hand.
- The send key is always present and always says what it does.
- Nothing is invented: no photos, no stock claims, no reviews, no invented availability.

## Colors

Six values and three alpha rules. There is no second accent, no state green, no pastel set.

| Token | Value | Role |
| --- | --- | --- |
| `paper` | `#e6e8e3` | The page. A cool grey-green, not cream. |
| `paper-bright` | `#f7f7f4` | Text and symbols on red fills only. |
| `ink` | `#1b2430` | Body text, the top rule, the send key's hover fill. |
| `ink-quiet` | `#5a6165` | Secondary text, labels, field names. |
| `red` | `#c0273c` | The margin rule, tally strokes, links, selection. |
| `red-deep` | `#a32739` | The send key's fill. |
| `rule` | `rgba(27, 36, 48, 0.26)` | Hairlines: field rules, cell edges. |
| `rule-strong` | `rgba(27, 36, 48, 0.6)` | Interactive underline on hover/focus. |
| `grid` | `rgba(27, 36, 48, 0.1)` | The squared paper grid. |

**The One Red Rule.** Red is ink that was pressed hard. It marks the margin, the counts, and the
one action, and nothing else. If a new element is not one of those three, it is ink, not red.

**The Paper Is Cool Rule.** The background is a grey-green, never a warm cream or beige. Warm
off-white is the default "tasteful" surface; this book is ledger paper, and it stays cool.

**The Label Contrast Rule.** Uppercase labels are `ink-quiet` on paper only. On any red or ink
fill, text is `paper-bright`, never `paper` — `paper` reads as washed-out grey on colour.

## Typography

One family, Archivo, self-hosted as a variable font and used across its width axis. The stretch
axis carries most of the hierarchy: wide for display, default for reading, condensed for labels.
The ramp has fourteen steps and nothing sits off it.

- **Display** — the wordmark only. `clamp(3.5rem, 18vw, 6.25rem)`, weight 800, width 125%,
  line-height 0.86, tracking -0.035em. Never used twice.
- **Headline** — the three section headings. `clamp(1.5rem, 5.6vw, 2.125rem)`, weight 700,
  width 125%, line-height 1.1, tracking -0.025em, balanced, capped at 26ch.
- **Price** — the price in each pot cell. `clamp(1.5rem, 6.4vw, 2rem)`, weight 600, width 78%.
- **Total** — the running totals, 1.25rem weight 700, tabular numerals.
- **Order line** — 1.125rem weight 500. The message being composed is set larger than body copy
  because it is the point of the page.
- **Body** — 1.0625rem / 1.55. The standfirst is capped at 42ch, notes at 54ch.
- **Action** — 1rem weight 700, the send key.
- **Lead** — 0.9375rem, the board note, the details prose, and filled field values.
- **Control** — 0.875rem weight 600, the copy button.
- **Note** — 0.8125rem, the note beside the send key.
- **Wordmark noun** — 0.8125rem weight 600, width 62%, tracking 0.22em.
- **Skip** — 0.78rem, the skip link, revealed on focus.
- **Nav** — 0.75rem, the contents links.
- **Label** — 0.6875rem (11px floor), weight 600, width 62%, tracking 0.16em, uppercase. Used
  for column heads, field names, and the footer. Anything under 11px fails.

Uppercase is for short labels only. Sentence-case text never gets wide tracking, even in the
footer.

## Layout

One column, always. The sheet is a book page, not a dashboard: `min(100% - 3.5rem, 42rem)` on
phones widening to `44rem` at ≥40rem, with a 1.5rem red margin rule set inside the page's left
padding. The paper grid is 30px and stays aligned to the page edge at every width.

- **Mobile first.** Below 40rem everything is one column and the send bar is pinned to the
  bottom of the screen.
- **≥40rem** the title page becomes two columns (wordmark left, standfirst right), the measure
  widens to 44rem, and the outer margin grows from 0.875rem to 1.75rem.
- **The send bar is pinned at every width.** It is the only element that leaves the flow, it
  carries the running total and the send key, and it must be fully visible in the first
  viewport. The head is compressed at desktop widths specifically to guarantee this: the title
  page's two-column layout buys back the fold.
- **The bar is sized so it can never sit on the order line.** The composed order is the exact
  text the send key copies, so it has first claim on the fold. Below 40rem the bar is 71.9px
  (the key holds one line) and the order slip starts high enough that the line clears it by
  34.6px with three pots marked and 10.3px with all four; at ≥40rem the bar is 75.2px and the
  line clears by 68px. The bar may sit over the slip's `Total`/`Plates` row, because the bar
  repeats both values beside the key.
- **Exception, measured: viewports shorter than 700px.** At 360×640 and 375×667 the page cannot
  fit the ledger, the order heading, and a 72px bar at once — the ledger alone ends 584px down
  a 667px screen. So the first screen there shows the price list, the bar arrives with the order
  block below the fold, and about 100px of scroll pins it with the order line clear above it.
  The one visible artifact is the bar's leading edge crossing the 2-line order heading before
  that scroll. The alternative (moving the bar above the slip) was measured and rejected: it
  pushes the key off the first screen on exactly these heights.
- **The ledger** is a real `<table>` with a visible stub column, so prices line up as columns
  do in a book. Row heights are ≥64px; every pot is a ≥44×44px target.
- **The pinned bar reserves 6rem of page padding** at ≥40rem so the details and footer can
  always be scrolled clear of it.

## Elevation & Depth

The book is flat on purpose. There are no drop shadows on content, no cards, no raised panels.
Depth comes from rules and one exception:

- The send bar carries `0 -1px 0 var(--rule)` plus a soft `0 -18px 28px -22px` ink wash, so
  content passing under it reads as underneath rather than colliding with it.
- Nothing else is elevated. If something needs to sit above the page, it is a rule.

## Shapes

Zero radius, everywhere, with no exceptions. The vocabulary is straight: hairline rules,
square corners, and flat fills. The only non-rectangular geometry is the SVG arrow in the send
key and the 2px tally strokes.

- Rules are 1px `--rule` hairlines; the sheet's top rule is 2px `--ink`.
- Tally strokes are 2px wide, 1.05rem tall, square-ended, with a diagonal 5th stroke crossing
  each group of four.

## Components

### The pot (button)
- **Shape:** square, no radius, hairline cell edge, ≥44×44px.
- **Default:** transparent over the paper grid, price in `ink` at 1.25rem weight 700.
- **Marked:** `aria-pressed="true"`, price turns `red-ink`, a `×n` count appears top-right, and
  tally strokes grow from the baseline. Strokes animate `transform: scaleY()` with a 22ms
  per-stroke delay — never `height`.
- **Focus:** 2px `ink` outline, 2px offset.

### The send key
- **Shape:** square, full-width in the bar, ≥52.8px tall.
- **Fill:** `red-deep` background, `paper-bright` text, weight 700, an inline SVG arrow.
- **Hover:** fill becomes `ink` over 140ms.
- **Focus:** 2px `ink` outline at 2px offset, so it stays visible on its own red fill.

### The order slip
- **Shape:** square, a ruled field that overhangs the column by 0.75rem on each side, with 0.75rem
  of internal inset so nothing touches its own rule.
- **Fill:** `rgba(230, 232, 227, 0.72)` over the paper grid, top and bottom hairlines.
- **State:** the line turns `red-ink` once anything is marked; the Total field gets
  `data-set="yes"` and steps up in weight and size.

### The contents nav
- **Style:** 11px uppercase labels, `ink-quiet`, `rule-strong` underline 0.3em below.
- **Targets:** 0.45rem of horizontal padding with a matching negative margin, so each link is
  ≥44×44px without disturbing the 1.5rem visual gap.

### The copy control
- **Style:** a text button, no fill, no border, 0.875rem weight 600, underlined in `red`.
- **Disabled:** `ink-quiet` with a `rule` underline and `cursor: default` while the order is
  empty.
- **State:** reads "Copied" for the rest of the order's life once it succeeds.

### Without scripting
`html.no-js` strips the marks, the tally, the copy button, and the tap instruction, so the page
degrades to a price list and a working WhatsApp link instead of showing controls that do
nothing.

## Do's and Don'ts

### Do:
- **Do** keep the send key visible in the first viewport at every width, and compress the head
  rather than pushing the key down. The one measured exception is a viewport shorter than
  700px, where the price list takes the first screen and the bar arrives with the order block.
- **Do** set the running total in both the slip and the pinned bar; they are read in different
  places.
- **Do** use `paper-bright` for any text on a red or ink fill.
- **Do** keep functional text at 11px or larger, and uppercase labels at 0.16em tracking or less.
- **Do** animate `transform` and `opacity`, never `height` or `width`, on state changes.
- **Do** write prices into the ledger cells where the owner can see and change them.
- **Do** keep the page usable with scripting off: prices readable, send link working.

### Don't:
- **Don't** add a second accent, a state colour, a gradient, or a shadow on content.
- **Don't** add radius, cards, pill shapes, or a modal.
- **Don't** hide the order behind a basket, an account, a payment step, or a spinner.
- **Don't** warm the paper towards cream, or put grey `paper` text on the red fill.
- **Don't** set body or sentence-case text in uppercase with wide tracking.
- **Don't** invent facts to fill the page: no photos, no reviews, no delivery promises, no
  sourcing, no availability. Unset details stay visibly unset for the owner to fill in.
- **Don't** add a build step, framework, or third-party request. One folder, three files, a
  local font.
