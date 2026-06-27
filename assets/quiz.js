/* Reusable quiz widget. Markup contract:
 *
 * <div class="quiz" data-answer="1">
 *   <p class="q">Question text?</p>
 *   <button class="opt">Option A</button>
 *   <button class="opt">Option B</button>   <- index 1 = correct (data-answer)
 *   <button class="opt">Option C</button>
 *   <div class="feedback" data-ok="Why right." data-no="Nudge toward the right idea."></div>
 * </div>
 *
 * Retrieval-practice friendly: no formatting tells, reveals reasoning on answer.
 */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quiz").forEach((quiz) => {
    const answer = parseInt(quiz.dataset.answer, 10);
    const opts = [...quiz.querySelectorAll(".opt")];
    const fb = quiz.querySelector(".feedback");
    opts.forEach((opt, i) => {
      opt.addEventListener("click", () => {
        opts.forEach((o) => (o.disabled = true));
        const right = i === answer;
        opt.classList.add(right ? "correct" : "wrong");
        if (!right) opts[answer].classList.add("correct");
        if (fb) {
          fb.textContent = right
            ? (fb.dataset.ok || "Correct.")
            : (fb.dataset.no || "Not quite — see the highlighted answer.");
          fb.classList.add("show", right ? "ok" : "no");
        }
      });
    });
  });
});
