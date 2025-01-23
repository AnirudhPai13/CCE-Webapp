// Pop-up window
function showMoreInfo(popupId){
    const popup = document.getElementById(popupId);
    popup.showModal();
}

function closeMoreInfo(popupId) {
    const popup = document.getElementById(popupId);
    popup.close();
}

// Close popup when clicking outside the content
document.querySelectorAll('dialog').forEach((popup) => {
    const wrapper = popup.querySelector(".wrapper");
    popup.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
            popup.close();
        }
    });
});