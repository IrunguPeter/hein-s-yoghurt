(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");

  var settings = {
    whatsapp: (root.dataset.whatsapp || "").replace(/[^\d]/g, ""),
    area: root.dataset.area || "",
    days: root.dataset.days || ""
  };

  var POTS = {
    "vanilla-250": { label: "Vanilla", size: "250 ml", price: 65 },
    "vanilla-500": { label: "Vanilla", size: "500 ml", price: 120 },
    "strawberry-250": { label: "Strawberry", size: "250 ml", price: 65 },
    "strawberry-500": { label: "Strawberry", size: "500 ml", price: 120 }
  };
  var STORE = "hein-yoghurt.order";
  var MAX = 20;

  var counts = {
    "vanilla-250": 0,
    "vanilla-500": 0,
    "strawberry-250": 0,
    "strawberry-500": 0
  };
  /* frozen is an option on a pot, not a separate product: the price does not change */
  var frozen = {
    "vanilla-250": false,
    "vanilla-500": false,
    "strawberry-250": false,
    "strawberry-500": false
  };

  var rows = [].slice.call(document.querySelectorAll(".pot"));
  var bar = document.querySelector("[data-bar]");
  var sumPots = document.querySelector("[data-sum-pots]");
  var sumTotal = document.querySelector("[data-sum-total]");
  var send = document.querySelector("[data-send]");
  var copy = document.querySelector("[data-copy]");
  var live = document.querySelector("[data-live]");
  var hint = document.querySelector("[data-hint]");
  var announceTimer = 0;

  try {
    var saved = JSON.parse(window.localStorage.getItem(STORE) || "null");
    if (saved) {
      Object.keys(counts).forEach(function (key) {
        if (typeof saved[key] === "number" && saved[key] >= 0) {
          counts[key] = Math.min(Math.floor(saved[key]), MAX);
        }
        if (typeof saved[key] === "boolean") frozen[key] = saved[key];
      });
    }
  } catch (err) {
    /* a private window with storage off still orders by hand */
  }

  function orderText() {
    var parts = [];
    var sum = 0;
    var pots = 0;
    Object.keys(POTS).forEach(function (key) {
      var n = counts[key];
      if (!n) return;
      var pot = POTS[key];
      parts.push(n + " x " + pot.label + " " + pot.size + (frozen[key] ? " (frozen)" : ""));
      sum += n * pot.price;
      pots += n;
    });
    return { parts: parts, sum: sum, pots: pots };
  }

  function messageFor(t) {
    if (!t.pots) return "Hello Hein, I would like to order some yoghurt.";
    return (
      "Hello Hein, I would like " + t.parts.join(" and ") + ". That is KSh " + t.sum + " in total."
    );
  }

  function render() {
    rows.forEach(function (row) {
      var card = row.closest(".flavour");
      var key = card.dataset.flavour + "-" + row.dataset.size;
      var n = counts[key];
      row.dataset.qty = String(n);
      row.querySelector("[data-qty]").textContent = String(n);
      var box = row.querySelector("[data-frozen]");
      if (box.checked !== frozen[key]) box.checked = frozen[key];
      var minus = row.querySelector('[data-step="-1"]');
      minus.disabled = n === 0;
    });

    var t = orderText();

    sumPots.textContent = !t.pots
      ? "Nothing picked yet"
      : t.pots === 1
      ? "1 pot"
      : t.pots + " pots";
    sumTotal.textContent = "KSh " + t.sum;
    bar.dataset.has = t.pots ? "yes" : "no";

    var link = settings.whatsapp
      ? "https://wa.me/" + settings.whatsapp + "?text=" + encodeURIComponent(messageFor(t))
      : "https://wa.me/?text=" + encodeURIComponent(messageFor(t));
    send.setAttribute("href", link);

    if (hint) {
      hint.hidden = !!t.pots;
    }

    copy.disabled = !t.pots;
    copy.textContent = copy.dataset.done === "yes" ? "Copied to your clipboard" : "Copy the order instead";

    window.clearTimeout(announceTimer);
    announceTimer = window.setTimeout(function () {
      live.textContent = t.pots
        ? t.pots + (t.pots === 1 ? " pot" : " pots") + " in the order. Total KSh " + t.sum + "."
        : "The order is empty.";
    }, 500);

    try {
      window.localStorage.setItem(STORE, JSON.stringify(Object.assign({}, counts, frozen)));
    } catch (err) {
      /* nothing to do: the order still works for this visit */
    }
  }

  rows.forEach(function (row) {
    var card = row.closest(".flavour");
    var key = card.dataset.flavour + "-" + row.dataset.size;
    row.querySelectorAll(".step").forEach(function (button) {
      button.addEventListener("click", function () {
        var step = Number(button.dataset.step);
        counts[key] = Math.min(Math.max(counts[key] + step, 0), MAX);
        copy.dataset.done = "no";
        render();
      });
    });
  });

  rows.forEach(function (row) {
    var card = row.closest(".flavour");
    var key = card.dataset.flavour + "-" + row.dataset.size;
    row.querySelector("[data-frozen]").addEventListener("change", function (event) {
      frozen[key] = event.target.checked;
      copy.dataset.done = "no";
      render();
    });
  });

  copy.addEventListener("click", function () {
    var text = messageFor(orderText());
    var done = function () {
      copy.dataset.done = "yes";
      copy.textContent = "Copied to your clipboard";
    };
    var failed = function () {
      copy.textContent = "This browser would not copy it. Open WhatsApp and write your order there.";
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, failed);
    } else {
      failed();
    }
  });

  [].slice.call(document.querySelectorAll("[data-show]")).forEach(function (node) {
    var key = node.dataset.show;
    var value = settings[key];
    var prompt = { whatsapp: "number to fill in", area: "area to fill in", days: "days to fill in" }[key];
    if (!value) {
      /* clearing the attribute really does clear the row, so the owner can put a
         visible blank back by emptying it */
      node.textContent = "";
      node.dataset.prompt = prompt;
      return;
    }
    if (key === "whatsapp") {
      /* the number on the page is itself a way into WhatsApp, not just text */
      var link = document.createElement("a");
      link.className = "phone";
      link.href = "https://wa.me/" + value;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "+" + value;
      node.textContent = "";
      node.appendChild(link);
    } else {
      node.textContent = value;
    }
  });

  /* the bar is fixed, so the page has to reserve exactly as much room as it takes.
     measuring beats guessing, and it survives a phone set to large text. */
  if (bar && window.ResizeObserver) {
    var measure = function () {
      root.style.setProperty("--bar-real", Math.ceil(bar.offsetHeight) + "px");
    };
    new ResizeObserver(measure).observe(bar);
    measure();
  }

  render();
})();
