const tabsData = [
  {
    id: 1,
    title: "Tab1",
    content: "This is a content for tab 1",
  },
  {
    id: 2,
    title: "Tab2",
    content: "This is a content for tab 2",
  },
  {
    id: 3,
    title: "Tab3",
    content: "This is a content for tab 3",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let activeTab = tabsData[0].id;

  function rendertabs() {
    const tabContainer = document.getElementById("tab-container");
    const tabContentContainer = document.getElementById(
      "tab-content-container"
    );

    tabsData.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.classList.add("tabLinks");
      tabButton.textContent = tab.title;
      tabButton.setAttribute("data-tab", tab.id);
      tabContainer.appendChild(tabButton);

      const tabContent = document.createElement("div");
      tabContent.id = tab.id;
      tabContent.classList.add("tabContent");
      tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
      tabContentContainer.appendChild(tabContent);
    });

    tabContainer.addEventListener("click", (e) => {
      if (e.target.matches(".tabLinks")) {
        const tabId = e.target.getAttribute("data-tab");
        if (tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId;
        }
      }
    });

    function openTab(tabId) {
      const tabContents = document.querySelectorAll(".tabContent");
      const tabLinks = document.querySelectorAll(".tabLinks");

      tabContents.forEach((tab) => tab.classList.remove("active"));
      tabLinks.forEach((tab) => tab.classList.remove("active"));
      document.getElementById(tabId).classList.add("active");
      document
        .querySelector(`button[data-tab="${tabId}"]`)
        .classList.add("active");
    }
  }
  rendertabs();
  document.getElementById(activeTab).classList.add("active");
  document
    .querySelector(`button[data-tab="${activeTab}"]`)
    .classList.add("active");
});
