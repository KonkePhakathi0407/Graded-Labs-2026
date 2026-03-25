document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.getElementById("pics");
    const favSection = document.getElementById("favorites");
    const logList = document.getElementById("actions");
    const imgElements = gallery.querySelectorAll("img");
    const imgTotal = imgElements.length;

    let favCount = 0;

    imgElements.forEach(function (img, index) {
        img.dataset.index = index;
        img.style.width = "120px";
        img.style.height = "120px";
        //img.style.objectFit = "cover";
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            handleClick(img);
        });
    });

    updateCounter();

    function handleClick(img) {
        const isFav = img.dataset.favorited === "true";
        if (!isFav) {
            moveToFav(img);
        } else {
            removeFromFav(img);
        }
    }

    function moveToFav(img) {
        favCount++;
        img.dataset.favorited = "true";
        img.style.border = "3px solid green";
        favSection.appendChild(img);
        addLog("Moved " + img.src + " to favorites");
        const imgNum = parseInt(img.dataset.index) + 1;
        addLog("Image " + imgNum + " selected as favorite number " + (favCount - 1));
        updateCounter();
        if (favCount === imgTotal) {
            addLog("All images have been selected!");
        }
    }

    function revertImg(img) {
        img.dataset.favorited = "false";
        img.style.border = "";
        favCount--;
        const targetIdx = parseInt(img.dataset.index);
        const remaining = gallery.querySelectorAll("img");
        let placed = false;
        for (let i = 0; i < remaining.length; i++) {
            if (parseInt(remaining[i].dataset.index) > targetIdx) {
                gallery.insertBefore(img, remaining[i]);
                placed = true;
                break;
            }
        }
        if (!placed) {
            gallery.appendChild(img);
        }
        addLog("Reverted " + img.src + " back to the main list");
        updateCounter();
    }

    function addLog(message) {
        const li = document.createElement("li");
        li.textContent = message;
        logList.appendChild(li);
    }

    function updateCounter() {
        const remaining = imgTotal - favCount;
        const counterP = document.querySelector("p");
        counterP.textContent = "Remaining images to select: " + remaining;
    }
});
