(() => {
  "use strict";

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    const copied = document.execCommand("copy");
    input.remove();
    if (!copied) throw new Error("Copy command failed");
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const russian = document.documentElement.lang === "ru";
      try {
        await copyText(button.dataset.copy);
        button.textContent = "✓";
        button.setAttribute("aria-label", russian ? "Скопировано" : "Copied");
      } catch (_) {
        button.textContent = "×";
        button.setAttribute("aria-label", russian ? "Не скопировано" : "Copy failed");
      }
      window.setTimeout(() => {
        button.textContent = "⧉";
        button.setAttribute("aria-label", document.documentElement.lang === "ru" ? "Скопировать команду" : "Copy command");
      }, 1200);
    });
  });
})();
