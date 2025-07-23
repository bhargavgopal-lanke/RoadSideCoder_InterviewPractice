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

    // creating UI for tab btns and content for the tabs inside this function.
    tabsButtons(tabContainer, tabContentContainer);

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

function tabsButtons(tabContainer, tabContentContainer) {
  // loop through existing data and create a button
  // add the title and id to this button
  // and append this buttons as a child to parent
  tabsData.forEach((tab) => {
    const tabButton = document.createElement("button");
    tabButton.classList.add("tabLinks");
    tabButton.textContent = tab.title;
    tabButton.setAttribute("data-tab", tab.id);
    tabContainer.appendChild(tabButton);

    // create a div and dynamic id and title and content to this div
    // add a class of tabContent to this div
    // append this div to a parent div.
    const tabContent = document.createElement("div");
    tabContent.id = tab.id;
    tabContent.classList.add("tabContent");
    tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
    tabContentContainer.appendChild(tabContent);
  });
}
