let focusMinutes = 45;
let lastReminderTime = Date.now();

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    focusMinutes: 45,
    isEnabled: true
  });

  chrome.idle.setDetectionInterval(60);
});

chrome.storage.local.get(["focusMinutes"], (data) => {
  focusMinutes = data.focusMinutes || 45;
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.focusMinutes) {
    focusMinutes = changes.focusMinutes.newValue;
    lastReminderTime = Date.now();
  }
});

setInterval(() => {
  chrome.storage.local.get(["isEnabled"], (data) => {
    if (!data.isEnabled) return;

    chrome.idle.queryState(60, (state) => {
      if (state === "active") {
        const minutesPassed = (Date.now() - lastReminderTime) / 1000 / 60;

        if (minutesPassed >= focusMinutes) {
          chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "Focus Ping ⏰",
            message: `You've been focused for ${focusMinutes} minutes. Take a quick break!`
          });

          lastReminderTime = Date.now();
        }
      } else {
        lastReminderTime = Date.now();
      }
    });
  });
}, 60000);