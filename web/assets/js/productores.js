document.querySelectorAll("[data-story]").forEach(storyTrigger => {
  const storyDialog = document.getElementById(storyTrigger.dataset.story);
  if (!storyDialog || typeof storyDialog.showModal !== "function") return;
  storyTrigger.setAttribute("role", "button");
  storyTrigger.setAttribute("aria-haspopup", "dialog");
  storyTrigger.setAttribute("aria-controls", storyDialog.id);
  storyTrigger.addEventListener("click", event => {
    event.preventDefault();
    storyDialog.showModal();
    storyDialog.scrollTop = 0;
    document.body.classList.add("story-open");
  });
  storyDialog.querySelector(".story-close").addEventListener("click", () => storyDialog.close());
  storyDialog.addEventListener("click", event => {
    if (event.target === storyDialog) storyDialog.close();
  });
  storyDialog.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      event.preventDefault();
      storyDialog.close();
    }
  });
  storyDialog.addEventListener("close", () => {
    if (!document.querySelector(".story-dialog[open]")) document.body.classList.remove("story-open");
  });
});
