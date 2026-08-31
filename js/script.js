const menu = document.querySelector(".menu"),
    links = document.querySelector(".nav-links");
if (menu) menu.onclick = () => links.classList.toggle("open");
const data = [
    ["Your teacher catches you talking. You say…", ["I was just asking a doubt.", "It was an important discussion.", "Sir, technically I wasn't talking.", "I accept my fate."]],
    ["Your friend says: Let's go out tonight.", ["Where are we going?", "Bro, I'm already ready.", "Depends. Is there food?", "I'll decide at 8:59 PM."]],
    ["Your exam is tomorrow. You have…", ["A proper plan.", "Some notes.", "Positive vibes.", "Nothing but confidence."]],
    ["Pick your natural habitat.", ["Last bench, corner seat.", "Near the canteen.", "Back row with the gang.", "Wherever the fun is."]]
];
const results = [
    ["THE QUIET BACKBENCHER", "You look innocent. The evidence says otherwise."],
    ["THE CLASS CLOWN", "You were born with a punchline and zero fear of consequences."],
    ["THE LAST-MINUTE LEGEND", "Why prepare early when panic works perfectly?"],
    ["THE CHAOS MANAGER", "You don't find fun. Fun somehow finds you."]
];
let qi = 0,
    s = [0, 0, 0, 0];

function render() {
    let q = document.querySelector("#q"),
        a = document.querySelector("#a"),
        p = document.querySelector("#p");
    if (!q) return;
    q.textContent = data[qi][0];
    a.innerHTML = "";
    data[qi][1].forEach((x, i) => {
        let b = document.createElement("button");
        b.className = "answer";
        b.textContent = x;
        b.onclick = () => {
            s[i]++;
            qi++;
            if (qi < data.length) render();
            else {
                document.querySelector(".quiz-main").style.display = "none";
                let r = document.querySelector(".result");
                r.style.display = "block";
                let n = s.indexOf(Math.max(...s));
                r.querySelector("h3").textContent = results[n][0];
                r.querySelector("p").textContent = results[n][1]
            }
        };
        a.appendChild(b)
    });
    p.style.width = qi / data.length * 100 + "%"
}
render();
