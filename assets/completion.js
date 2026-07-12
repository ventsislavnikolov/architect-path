/* Hardcoded lesson completion → badges + progress bar.
 *
 * Single source of truth: the `data-done="true"` attribute on each [data-lesson] item,
 * edited in the HTML source. No storage — identical on every device (phone, desktop, anywhere).
 * To mark a lesson done: set data-done="true" on its .toc-item and redeploy.
 */
document.addEventListener("DOMContentLoaded", function () {
  var items = [].slice.call(document.querySelectorAll("[data-lesson]"));
  var done = 0;

  items.forEach(function (item) {
    if (item.getAttribute("data-done") === "true") {
      done++;
      item.classList.add("done");
      var badge = item.querySelector(".done-badge");
      if (badge) badge.hidden = false;
    }
  });

  var total = items.length;
  var count = document.querySelector("#progress-summary .progress-count");
  var fill = document.querySelector("#progress-summary .progress-fill");
  if (count) count.textContent = done + " / " + total + " lessons done · уроци";
  if (fill) fill.style.width = (total ? Math.round((done / total) * 100) : 0) + "%";
});
