/* Lesson progress tracker — persists "done" state in localStorage.
 *
 * Markup contract (index page):
 *   <div class="toc-item" data-lesson="l1"> … <button class="done-toggle"></button> </div>
 *   <div id="progress-summary"> <div class="progress-track"><div class="progress-fill"></div></div>
 *        <span class="progress-count"></span> <button id="progress-reset">…</button> </div>
 *
 * Only elements with [data-lesson] count toward progress. No backend, no build.
 */
(function () {
  var KEY = "architect-path:progress:v1";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var state = load();
    var items = [].slice.call(document.querySelectorAll("[data-lesson]"));

    function render() {
      var done = 0;
      items.forEach(function (item) {
        var id = item.getAttribute("data-lesson");
        var isDone = !!state[id];
        if (isDone) done++;
        item.classList.toggle("done", isDone);
        var btn = item.querySelector(".done-toggle");
        if (btn) {
          btn.textContent = isDone ? "✓ Done" : "Mark done";
          btn.classList.toggle("is-done", isDone);
          btn.setAttribute("aria-pressed", String(isDone));
          btn.title = isDone ? "Готово — click to undo" : "Отбележи като готово";
        }
      });
      var total = items.length;
      var count = document.querySelector("#progress-summary .progress-count");
      var fill = document.querySelector("#progress-summary .progress-fill");
      if (count) count.textContent = done + " / " + total + " lessons done · уроци";
      if (fill) fill.style.width = (total ? Math.round((done / total) * 100) : 0) + "%";
    }

    items.forEach(function (item) {
      var btn = item.querySelector(".done-toggle");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var id = item.getAttribute("data-lesson");
        if (state[id]) delete state[id]; else state[id] = true;
        save(state);
        render();
      });
    });

    var reset = document.getElementById("progress-reset");
    if (reset) {
      reset.addEventListener("click", function () {
        Object.keys(state).forEach(function (k) { delete state[k]; });
        save(state);
        render();
      });
    }

    render();
  });
})();
