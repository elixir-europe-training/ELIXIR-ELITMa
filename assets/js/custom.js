// ELITMa site-wide scripts. The theme loads assets/js/custom.js on every page (in <head>),
// so this file replaces the theme's empty one. Small accessibility and interaction fixes:
//  - quick checks (quick-check.html) become clickable, with ✓/✗ feedback;
//  - the mobile sidebar button reads "Module navigation" / "Section navigation" instead of
//    the theme's label built from the sidebar file name ("Module-communication menu");
//  - checklist boxes (from "- [ ]" in Markdown) get their item text as a clickable label;
//  - code blocks and tables that scroll sideways can be reached with the keyboard.
// The pathway, visited-chapters and checklist-memory scripts live in module-pager.html
// (they need page data from Liquid).

// Lets CSS hide content that only matters without JavaScript (e.g. quick-check answers).
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.quick-check').forEach(function (box) {
    var correct = box.getAttribute('data-correct');
    var explain = box.getAttribute('data-explain') || '';
    var feedback = box.querySelector('.quick-check-feedback');
    var options = box.querySelectorAll('.quick-check-option');
    options.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var right = btn.getAttribute('data-index') === correct;
        options.forEach(function (b) {
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
          b.classList.remove('is-chosen', 'is-right', 'is-wrong');
        });
        btn.classList.add('is-chosen', right ? 'is-right' : 'is-wrong');
        if (!right) box.querySelector('.quick-check-option[data-index="' + correct + '"]').classList.add('is-right');
        feedback.className = 'quick-check-feedback ' + (right ? 'is-right' : 'is-wrong');
        feedback.textContent = (right ? '✓ Correct. ' : '✗ Not quite. ') + explain;
      });
    });
  });

  var sidebarButton = document.querySelector('button.sidebar-collapse');
  if (sidebarButton) {
    // The theme labels it from the sidebar file name ("Module-communication menu").
    var isModule = sidebarButton.textContent.trim().toLowerCase().indexOf('module-') === 0;
    var label = isModule ? 'Module navigation' : 'Section navigation';
    Array.prototype.forEach.call(sidebarButton.childNodes, function (n) {
      if (n.nodeType === 3 && n.textContent.trim()) n.textContent = label + ' ';
    });
  }
  document.querySelectorAll('.task-list-item').forEach(function (item, i) {
    var cb = item.querySelector('input[type="checkbox"]');
    if (!cb || cb.id) return;
    cb.id = 'task-' + i;
    var label = document.createElement('label');
    label.setAttribute('for', cb.id);
    while (cb.nextSibling) label.appendChild(cb.nextSibling);
    item.appendChild(label);
  });
});
// Code blocks and tables that scroll sideways get keyboard focus, so keyboard users can scroll
// them too. Once the web fonts are in, so widths are final.
function markScrollableCode() {
  document.querySelectorAll('#content .highlight, #content pre, #content .table-responsive').forEach(function (el) {
    if (el.scrollWidth > el.clientWidth && !el.hasAttribute('tabindex')) {
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'region');
      el.setAttribute('aria-label', el.classList.contains('table-responsive') ? 'Table' : 'Code example');
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(markScrollableCode); }
  else { markScrollableCode(); }
});
