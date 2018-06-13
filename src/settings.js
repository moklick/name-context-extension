const defaultSettings = {
  highlight: true,
  amount: "5"
};

const storageAPI = (() => {
  if (chrome && chrome.storage) return chrome.storage;
  if (window.storage) return window.storage;
  if (browser && browser.storage) return browser.storage;
  return browser.extension.storage;
})();

const storage = storageAPI.sync || storageAPI.local;

function getSettings(callback) {
  storage.get(defaultSettings, callback);
}
