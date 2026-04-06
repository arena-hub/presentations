const team =
    [
        {
            name: "Max Semdner",
            email: "m.semdner@reply.de",
            gh_username: "fc-msemdner",
            role: "dev"
        },
        {
            name: "Jan Prien",
            email: "j.prien@reply.de",
            gh_username: "fc-jprien",
            role: "dev"
        },
        {
            name: "Alexander Dederer",
            email: "a.dederer@reply.de",
            gh_username: "fc-adederer",
            role: "dev"
        },
        {
            name: "Tim Raschmann",
            email: "t.raschmann@reply.de",
            gh_username: "fc-traschmann",
            role: "dev"
        },
        {
            name: "Florian Hagen",
            email: "f.hagen@reply.de",
            gh_username: "FC-FHagen",
            role: "dev"
        },
        {
            name: "Joey Rösner",
            email: "j.roesner@reply.de",
            gh_username: "fc-jroesner",
            role: "dev"
        },
        {
            name: "Mohamed Mukhtar",
            email: "m.mukhtar@reply.de",
            gh_username: "MamadoKeita",
            role: "dev"
        },
        {
            name: "Alex Bulach",
            email: "a.bulach@reply.de",
            gh_username: "fc-abulach",
            role: "architect"
        },
        {
            name: "Markus Johannsen",
            email: "m.johannsen@reply.de",
            gh_username: "TODOfc-mjohannsen",
            role: "support"
        },
        {
            name: "Julius Marx",
            email: "j.marx@reply.de",
            gh_username: "TODOfc-jmarx",
            role: "support"
        },
        {
            name: "Andreas Meling",
            email: "a.meling@reply.de",
            gh_username: "TODOfc-ameling",
            role: "support"
        },
        {
            name: "Quan Nguyen",
            email: "qu.nguyen@reply.de",
            gh_username: "TODOfc-qnyguyen",
            role: "support"
        },
        {
            name: "Christian Kröger",
            email: "c.kroeger@reply.de",
            gh_username: "ckroeger",
            role: "stakeholder"
        },
        {
            name: "Kai Rathlev",
            email: "k.rathlev@reply.de",
            gh_username: undefined,
            role: "stakeholder"
        },
        {
            name: "Sebastian Berg",
            email: "s.berg@reply.de",
            gh_username: undefined,
            role: "stakeholder"
        },
        {
            name: "Thorsten Rodenhäuser",
            email: "t.rodenhaeuser@reply.de",
            gh_username: "fc - trodenhaeuser",
            role: "productOwner"
        }
    ]

let dev = document.getElementById("dev");
for (let person of team) {
    if (person.role == "dev") {
        let listItem = document.createElement("li");
        listItem.textContent = person.name;
        dev.appendChild(listItem);
    }
}

let support = document.getElementById("support");
for (let person of team) {
    if (person.role == "support") {
        let listItem = document.createElement("li");
        listItem.textContent = person.name;
        support.appendChild(listItem);
    }
}

let productOwner = document.getElementById("productOwner");
for (let person of team) {
    if (person.role == "productOwner") {
        let listItem = document.createElement("li");
        listItem.textContent = person.name;
        productOwner.appendChild(listItem);
    }
}

let architect = document.getElementById("architect");
for (let person of team) {
    if (person.role == "architect") {
        let listItem = document.createElement("li");
        listItem.textContent = person.name;
        architect.appendChild(listItem);
    }
}