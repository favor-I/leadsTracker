let myLeads = []
const inputEl = document.getElementById("input-el")
const resetBtn = document.getElementById("reset-btn")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage != null) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function() {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads)
})

function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
     // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a href ='${leads[i]}' target = '_blank'>${leads[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}


resetBtn.addEventListener("click", function(){
    localStorage.removeItem("myLeads")
    location.reload()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads)
})