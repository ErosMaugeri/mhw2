document.addEventListener("DOMContentLoaded", function() {
    /*Gestione tasto torna su*/
    const scrollTopLink = document.querySelector(".scroll-top");
    scrollTopLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* Gestione menu a tendina*/
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        const submenu = item.querySelector(".submenu");
        item.addEventListener("mouseenter", () => {
            if (submenu) submenu.style.display = "block";
        });
        item.addEventListener("mouseleave", (event) => { /*se esco con il mouse dal submenu, allora chiudilo*/
            if (submenu && !submenu.contains(event.relatedTarget)) {
                submenu.style.display = "none";
            }
        });
    });
    
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach(submenu => {
        submenu.addEventListener("mouseleave", () => {
            submenu.style.display = "none";
        });
    });

    /*Mostra la scritta quando si clicca vedi tutti su novità (non abbiamo ancora implementato il cambio di pagina)*/
    document.querySelectorAll(".vedi-tutti").forEach(button => {
        button.addEventListener("click", function() {
            const info = button.getAttribute("data-info");
            if (!info) return;
            

            const modal = document.createElement("div");
            modal.classList.add("modal");
            const modalContent = document.createElement("div");
            modalContent.classList.add("modal-content");
            const modalText = document.createElement("p");
            modalText.textContent = info;
            modalContent.appendChild(modalText);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            setTimeout(() => {
                modal.classList.add("visible");
            }, 10);
            
            modal.addEventListener("click", function(e) {
                if (e.target === modal) {
                    modal.classList.remove("visible");
                    setTimeout(() => {
                        modal.remove();
                    }, 300);
                }
            });
        });
    });
});


/*IMAGE SLIDER PER I 4 PRODOTTI*/
document.addEventListener("DOMContentLoaded", function () {
    const imageSets = {
      "nuovo1.jpg": ["nuovo1.jpg", "nuovo1_alt1.jpg", "nuovo1_alt2.jpg", "nuovo1_alt3.jpg"],
      "nuovo2.jpg": ["nuovo2.jpg", "nuovo2_alt1.jpg", "nuovo2_alt2.jpg", "nuovo2_alt3.jpg"],
      "nuovo3.jpg": ["nuovo3.jpg", "nuovo3_alt1.jpg", "nuovo3_alt2.jpg", "nuovo3_alt3.jpg"],
      "nuovo4.jpg": ["nuovo4.jpg", "nuovo4_alt1.jpg", "nuovo4_alt2.jpg", "nuovo4_alt3.jpg", "nuovo4_alt4.jpg"]
    };
  
    /*Utilizzo una lista di immagini così da potere scorrere in avanti o indietro per ottenere l'immagine con quel determinato src*/
    document.querySelectorAll(".image-slider").forEach(slider => {
      const img = slider.querySelector(".slide-image");
      const originalSrc = img.getAttribute("src");
      const images = imageSets[originalSrc];
      let index = 0;
  
      slider.querySelector(".arrow.left").addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        img.src = images[index];
      });
  
      slider.querySelector(".arrow.right").addEventListener("click", () => {
        index = (index + 1) % images.length;
        img.src = images[index];
      });
    });
  });
  
  



