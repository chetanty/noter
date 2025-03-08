document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("note");
    const saveButton = document.getElementById("save");
    const statusText = document.getElementById("status");
  
    // Load saved note for the current page
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = new URL(tabs[0].url).host;
      chrome.storage.local.get([url], (result) => {
        noteInput.value = result[url] || "";
      });
    });
  
    // Save note when the button is clicked
    saveButton.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = new URL(tabs[0].url).host;
        const note = noteInput.value;
        chrome.storage.local.set({ [url]: note }, () => {
          statusText.textContent = "Note saved!";
          setTimeout(() => (statusText.textContent = ""), 2000);
        });
      });
    });
  });
  