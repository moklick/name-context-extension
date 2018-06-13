document
  .querySelector('[name="highlight"]')
  .addEventListener('change', e => storage.set({ highlight: e.target.checked }));

document
  .querySelectorAll('[name="amount"]')
  .forEach(node => node.addEventListener('change', e => storage.set({ amount: e.target.value })));

function restoreOptions() {
  getSettings(({ highlight, amount }) => {
    document.querySelector('[name="highlight"]').checked = highlight;
    document.querySelector(`[name="amount"][value="${amount}"]`).checked = true;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
