// ---- Preparation Page Client Script ----
const prepTabBtns = document.querySelectorAll('.prep-tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

prepTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    prepTabBtns.forEach(b => b.classList.remove('active'));
    tabPanes.forEach(p => p.classList.add('hidden'));

    btn.classList.add('active');
    const tabTarget = btn.dataset.tab;
    const targetPane = document.getElementById(`tab-${tabTarget}`);
    if (targetPane) targetPane.classList.remove('hidden');
  });
});
