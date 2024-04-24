const cols = document.querySelectorAll("div.column");

cols.forEach(col => {
    // Update Find out more text
    let sectionTitle = col.querySelector("h3").textContent;
    let newLabel = `Find out more - ${sectionTitle}`;
    console.log(newLabel);

    // Update aria label of Find out more element
    let elem = col.querySelector("a.cta-link");
    elem.setAttribute("aria-label", newLabel);
});