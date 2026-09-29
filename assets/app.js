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
    "vanilla-250": { label: "Vanilla", size: "250 ml", price: 60 },
    "vanilla-500": { label: "Vanilla", size: "500 ml", price: 120 },
    "strawberry-250": { label: "Strawberry", size: "250 ml", price: 60 },
    "strawberry-500": { label: "Strawberry", size: "500 ml", price: 120 }
  };
  var STORE = "hein-yoghurt.tally";

  var counts = { "vanilla-250": 0, "vanilla-500": 0, "strawberry-250": 0, "strawberry-500": 0 };

  var buttons = [].slice.call(document.querySelectorAll(".pot"));
  var line = document.querySelector("[data-line]");
  var total = document.querySelector("[data-total]");
  var plates = document.querySelector("[data-plates]");
  var live = document.querySelector("[data-live]");
  var send = document.querySelector("[data-send]");
  var sumPots = document.querySelector("[data-sum-pots]");
  var sumTotal = document.querySelector("[data-sum-total]");
  var copy = document.querySelector("[data-copy]");
  var note = document.querySelector("[data-note]");
  var totalField = document.querySelector(".field--total");
  var announceTimer = 0;

  try {
    var saved = JSON.parse(window.localStorage.getItem(STORE) || "null");
    if (saved) {
      Object.keys(counts).forEach(function (key) {
        if (typeof saved[key] === "number" && saved[key] >= 0) counts[key] = Math.min(saved[key], 99);
      });
    }
  } catch (err) {
    /* a private window with storage off still orders by hand */
  }

  function tallyMarks(count) {
    var host = arguments.length > 1 ? arguments[1] : null;
    if (!host) return;
    var groups = Math.floor(count / 5);
    var rest = count % 5;
    var i = 0;
    var html = "";
    for (var g = 0; g < groups; g++) {
      for (var v = 0; v < 4; v++) html += '<span class="strike" style="--i:' + i++ + '"></span>';
      html += '<span class="strike strike--cross" style="--i:' + i++ + '"></span>';
    }
    for (var r = 0; r < rest; r++) html += '<span class="strike" style="--i:' + i++ + '"></span>';
    host.innerHTML = html;
  }

  function orderText() {
    var parts = [];
    var sum = 0;
    var pots = 0;
    Object.keys(POTS).forEach(function (key) {
      var n = counts[key];
      if (!n) return;
      var pot = POTS[key];
      parts.push(n + " × " + pot.label + " " + pot.size);
      sum += n * pot.price;
      pots += n;
    });
    return { parts: parts, sum: sum, pots: pots };
  }

  function messageFor(t) {
    if (!t.pots) return "Hello Hein, I would like to order some yoghurt.";
    return "Hello Hein, I would like " + t.parts.join(" and ") + ". That is KSh " + t.sum + " in total.";
  }

  function render() {
    buttons.forEach(function (button) {
      var key = button.dataset.flavour + "-" + button.dataset.size;
      var n = counts[key];
      var pot = POTS[key];
      button.setAttribute("aria-pressed", n > 0 ? "true" : "false");
      button.querySelector(".pot__mark").textContent = n > 0 ? "×" + n : "";
      button.querySelector(".pot__say").textContent = n > 0 ? " " + n + " marked." : " Not marked.";
      var host = button.querySelector(".pot__tally");
      host.dataset.count = String(n);
      tallyMarks(n, host);
    });

    var t = orderText();

    if (t.pots) {
      line.dataset.empty = "false";
      line.innerHTML = t.parts.map(function (part) {
        return "<em>" + part + "</em>";
      }).join(" · ");
    } else {
      line.dataset.empty = "true";
      line.textContent = "Nothing marked yet. Tap a pot above and it is written here.";
    }

    total.textContent = "KSh " + t.sum;
    plates.textContent = String(t.pots);
    sumPots.textContent = t.pots === 1 ? "1 pot" : t.pots + " pots";
    sumTotal.textContent = "KSh " + t.sum;
    totalField.dataset.set = t.pots ? "yes" : "no";

    var text = messageFor(t);
    var link = settings.whatsapp
      ? "https://wa.me/" + settings.whatsapp + "?text=" + encodeURIComponent(text)
      : "https://wa.me/?text=" + encodeURIComponent(text);
    send.setAttribute("href", link);

    copy.disabled = !t.pots;
    if (settings.whatsapp) {
      note.textContent = t.pots
        ? "Opens your chat with Hein, order already written."
        : "Opens your chat with Hein.";
    } else {
      note.textContent = "Hein's number is not on this page yet, so this opens WhatsApp for you to pick him.";
    }
    copy.textContent = copy.dataset.done === "yes" ? "Copied" : "Copy the order";

    window.clearTimeout(announceTimer);
    announceTimer = window.setTimeout(function () {
      live.textContent = t.pots
        ? t.pots + (t.pots === 1 ? " pot" : " pots") + " marked. Total KSh " + t.sum + "."
        : "No pots marked.";
    }, 420);

    try {
      window.localStorage.setItem(STORE, JSON.stringify(counts));
    } catch (err) {
      /* nothing to do: the order still works for this visit */
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var key = button.dataset.flavour + "-" + button.dataset.size;
      counts[key] = (counts[key] + 1) % 20;
      copy.dataset.done = "no";
      render();
    });
  });

  copy.addEventListener("click", function () {
    var text = messageFor(orderText());
    var done = function () {
      copy.dataset.done = "yes";
      copy.textContent = "Copied";
      note.textContent = settings.whatsapp
        ? "Order copied. It is also written into your chat with Hein when you send it."
        : "Order copied. Paste it to Hein on WhatsApp.";
    };
    var failed = function () {
      note.textContent = "This browser would not copy it for you. Select the order line above and copy it by hand.";
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {
        if (window.getSelection && window.document.execCommand) {
          var range = window.document.createRange();
          range.selectNodeContents(line);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          try {
            window.document.execCommand("copy") ? done() : failed();
          } catch (err) {
            failed();
          }
        } else {
          failed();
        }
      });
    } else {
      failed();
    }
  });

  [].slice.call(document.querySelectorAll("[data-show]")).forEach(function (node) {
    var key = node.dataset.show;
    var value = settings[key];
    var prompt = { whatsapp: "number to fill in", area: "area to fill in", days: "days to fill in" }[key];
    if (value) {
      node.textContent = key === "whatsapp" ? "+" + value : value;
    } else {
      node.dataset.prompt = prompt;
    }
  });

  render();
})();
