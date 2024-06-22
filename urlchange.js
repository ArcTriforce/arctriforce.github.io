document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners to button links
    const buttons = document.querySelectorAll('#headerDropdown a');

    buttons.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
              window.location.hash = targetId;
            }
        });
    });

    // Check if the URL contains a fragment identifier and trigger the corresponding button click
    window.addEventListener('load', function() {
        const fragmentIdentifier = window.location.hash.substring(1);
        if (fragmentIdentifier === 'home') {
            const homeButton = document.getElementById('homeButton');
            if (homeButton) {
                homeButton.click();
            }
        }
        if (fragmentIdentifier === 'people') {
            const peopleButton = document.getElementById('peopleButton');
            if (peopleButton) {
                peopleButton.click();
            }
        }
        if (fragmentIdentifier === 'dni') {
            const dniButton = document.getElementById('dniButton');
            if (dniButton) {
                dniButton.click();
            }
        }
        if (fragmentIdentifier === 'blog') {
            const blogButton = document.getElementById('blogButton');
            if (blogButton) {
                blogButton.click();
            }
        }
        if (fragmentIdentifier === 'info') {
            const infoButton = document.getElementById('infoButton');
            if (infoButton) {
                infoButton.click();
            }
        }
        
    });
});