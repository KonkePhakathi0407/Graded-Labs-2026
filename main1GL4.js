const compareBtn = document.getElementById("compare-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("result");

compareBtn.addEventListener("click", function () {
    const expected = document.getElementById("expected").value;
    const actual = document.getElementById("actual").value;
    result.innerHTML = "";
    result.className = "";

    if (expected.trim() === "" && actual.trim() === "") {
        const itemli = document.createElement("li");
        itemli.textContent = "Enter text in both text areas before clicking compare";
        result.appendChild(itemli);
        return;
    }

    const expectedOutput = expected.split("\n");
    const actualOutput = actual.split("\n"); 
    const differences = [];

    if (expectedOutput.length == actualOutput.length) {
        differences.push("Lengths differ: < " + expectedOutput.length + ", > " + actualOutput.length);
    }

    const maxLines = Math.max(expectedOutput.length, actualOutput.length);
    for (let i = 0; i < maxLines; i++) {
        const expLine = expectedOutput[i];
        const actLine = actualOutput[i];
        if (expLine !== actLine) {
            if (expLine !== undefined && actLine !== undefined) {
                differences.push("Line " + (i + 1) + ":\n  < " + expLine + "\n  > " + actLine);
            }
        }
    }

    if (differences.length > 0) {
        result.className = "change";
        const header = document.createElement("li");
        header.textContent = "Texts are not the same";
        result.appendChild(header);

        differences.forEach(function (msg) {
            const li = document.createElement("li");
            li.textContent = msg;
            result.appendChild(li);
        });

    } else {
        result.className = "noChange";

        const itemli = document.createElement("li");
        itemli.textContent = "No differences found";
        result.appendChild(itemli);
    }
});

clearBtn.addEventListener("click", function () {
    document.getElementById("expected").value = "";
    document.getElementById("actual").value = "";
    result.className = "";
});
