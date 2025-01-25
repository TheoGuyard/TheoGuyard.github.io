document.addEventListener("DOMContentLoaded", () => {
    
    // Load head elements
    fetch("head.html")
        .then((response) => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error(`Failed to load head.html: ${response.statusText}`);
            }
        })
        .then((data) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;

            // Append each element from head.html to the document's head
            tempDiv.querySelectorAll("*").forEach((el) => document.head.appendChild(el));
        })
        .catch((error) => console.error(error));

    // Load data-include elements
    document.querySelectorAll("[data-include]").forEach(async (element) => {
        const file = element.getAttribute("data-include");
        if (file) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    element.innerHTML = await response.text();
                } else {
                    console.error(`Error: Unable to load ${file} - ${response.statusText}`);
                }
            } catch (error) {
                console.error(`Error: Unable to fetch ${file} - ${error.message}`);
            }
        }
    });
});