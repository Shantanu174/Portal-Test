// ---- DSA Sheet Client Script ----
const checkboxes = document.querySelectorAll('.problem-checkbox');
const solvedTotalEl = document.getElementById('solvedTotal');
const totalQuestionsEl = document.getElementById('totalQuestions');
const progressRing = document.getElementById('progressRing');
const easyCountEl = document.getElementById('easySolvedCount');
const medCountEl = document.getElementById('medSolvedCount');
const hardCountEl = document.getElementById('hardSolvedCount');
const totalPercentEl = document.getElementById('totalPercent');
const searchInput = document.getElementById('dsaSearchInput');
const filterChips = document.querySelectorAll('#dsaFilterChips .chip');
const resetBtn = document.getElementById('resetProgressBtn');

const TOTAL_CIRCUMFERENCE = 471.24; // 2 * pi * 75

function getSolvedSet() {
  return JSON.parse(localStorage.getItem('portal_dsa_solved') || '[]');
}

function saveSolvedSet(arr) {
  localStorage.setItem('portal_dsa_solved', JSON.stringify(arr));
}

function updateProgress() {
  const solved = getSolvedSet();
  const total = checkboxes.length;

  let easyCount = 0;
  let medCount = 0;
  let hardCount = 0;

  checkboxes.forEach(cb => {
    const id = cb.dataset.id;
    const diff = cb.dataset.difficulty;
    const isSolved = solved.includes(id);
    cb.checked = isSolved;

    if (isSolved) {
      if (diff === 'Easy') easyCount++;
      else if (diff === 'Medium') medCount++;
      else if (diff === 'Hard') hardCount++;
    }
  });

  const solvedCount = solved.length;
  const percent = total > 0 ? Math.round((solvedCount / total) * 100) : 0;

  if (solvedTotalEl) solvedTotalEl.textContent = solvedCount;
  if (totalQuestionsEl) totalQuestionsEl.textContent = total;
  if (easyCountEl) easyCountEl.textContent = easyCount;
  if (medCountEl) medCountEl.textContent = medCount;
  if (hardCountEl) hardCountEl.textContent = hardCount;
  if (totalPercentEl) totalPercentEl.textContent = `${percent}%`;

  if (progressRing) {
    const offset = TOTAL_CIRCUMFERENCE - (percent / 100) * TOTAL_CIRCUMFERENCE;
    progressRing.style.strokeDashoffset = offset;
  }
}

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    const id = cb.dataset.id;
    let solved = getSolvedSet();

    if (cb.checked) {
      if (!solved.includes(id)) solved.push(id);
      showToast('Problem marked as Solved! 🎯', 'success');
    } else {
      solved = solved.filter(x => x !== id);
      showToast('Problem marked as Unsolved', 'info');
    }

    saveSolvedSet(solved);
    updateProgress();
  });
});

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all DSA progress?')) {
      saveSolvedSet([]);
      updateProgress();
      showToast('DSA progress reset', 'info');
    }
  });
}

// Filter problems
let currentDiff = 'all';

function filterDSA() {
  const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const rows = document.querySelectorAll('.problem-row');

  rows.forEach(row => {
    const name = row.dataset.name || '';
    const diff = row.dataset.difficulty || '';

    const matchesQ = !q || name.includes(q);
    const matchesDiff = currentDiff === 'all' || diff === currentDiff;

    row.style.display = matchesQ && matchesDiff ? 'flex' : 'none';
  });
}

if (searchInput) searchInput.addEventListener('input', filterDSA);

filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentDiff = chip.dataset.difficulty;
    filterDSA();
  });
});

// Initialize on page load
updateProgress();
