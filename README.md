# Hein Yoghurt

A one-page shop for a neighbour who makes yoghurt at home. Vanilla and strawberry, in 250 ml
and 500 ml pots. Two cards, the prices in plain sight, and one green button that opens WhatsApp.

## The three details (already filled in)

All three are on the **first line of `index.html`**, inside the `<html>` tag:

```html
<html lang="en" class="no-js" data-whatsapp="254106761832" data-area="Rongai" data-days="Any time, 24/7">
```

| Attribute | What it is | Current value |
|---|---|---|
| `data-whatsapp` | Hein's number, **digits only**, with country code, no `+` or spaces | `254106761832` |
| `data-area` | Where he delivers, or where to collect | `Rongai` |
| `data-days` | When orders can be collected | `Any time, 24/7` |

To change one, edit that attribute. Leave one blank (`data-area=""`) and the page goes back to
showing a visible "area to fill in" blank for the owner instead of inventing a value.

The WhatsApp number is written out **twice** on purpose: once in `data-whatsapp`, and once as the
text inside the `Hein's WhatsApp` row near the bottom of the page. Scripting uses the attribute to
turn that row into a tappable link; without scripting the page falls back to the written-out text.
If you change the number, change both.

Put your address in front of the path on this line too, so the link preview looks right when
someone shares the page in a WhatsApp group:

```html
<meta property="og:image" content="assets/og.png">
```

## Changing a price

Prices appear in two files, and they have to agree:

- **`index.html`** — the four `.pot` rows. The size is in `.pot__size`, the price in `.pot__price`.
  There is also an `aria-label` on each stepper (for screen readers) that says the price out loud.
- **`assets/app.js`** — the `POTS` object at the top, which does the adding up.

```
"vanilla-250": { label: "Vanilla", size: "250 ml", price: 60 },
```

If you only change one of the two, the card and the running total will disagree.

## Putting it online

Any static host will do and there is no build step. Copy the whole folder up. `index.html` also
opens straight from a double click if you just want to look at it on your own machine.

## What is in here

| File | What it is |
|---|---|
| `index.html` | The whole page |
| `assets/styles.css` | The whole design |
| `assets/app.js` | The steppers, the total, and the WhatsApp message |
| `assets/outfit-var-latin.woff2` | The one font, self-hosted so it works offline |
| `assets/og.png` | The card WhatsApp shows when the link is shared |
| `DESIGN.md` | The design decisions, if you want to change them |
| `PRODUCT.md` | Who this is for, and what the page is not allowed to claim |
