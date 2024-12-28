document.addEventListener("DOMContentLoaded", () => {
    const blogCards = document.quesrySelectorAll(".blog-card");

    blogCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "trasnlateY(-10px)";
            car
.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
d        });
        
        card.addEventListener("mouseleave", () => {
            card.style.transform = "trasnlateY(0)";
            card.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        });

card.addEventListener("click", () => {
    alert("Redirecting to the article...");

});
    });
});