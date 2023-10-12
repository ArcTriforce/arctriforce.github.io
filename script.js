document.addEventListener("DOMContentLoaded", function () {
  // Get references to the buttons and other elements
  const peopleButton = document.getElementById("peopleButton");
  const homeButton = document.getElementById("homeButton");
  const dniButton = document.getElementById("dniButton");
  const blogButton = document.getElementById("blogButton");
  const infoButton = document.getElementById("infoButton");

  const people = document.getElementById("people");
  const dni = document.getElementById("dni");
  const blog = document.getElementById("blog");
  const info = document.getElementById("info");
  
  const htmlContent = document.getElementById("htmlContent");
  const contentBG = document.getElementById("contentBG");
  const contentMain = document.getElementById("contentMain")
  const content = document.getElementById("content");


  
  // Store the original content of contentBG
  const originalContentBG = contentBG.innerHTML;
  const originalhtmlContent = htmlContent.innerHTML;

  // Function to reset to the default state
  function resetToDefaultState() {
    content.style.gridTemplateRows = "";
    htmlContent.innerHTML = originalhtmlContent;
    htmlContent.innerHTML = originalhtmlContent; // Clear the htmlContent

    // Restore the original content of contentBG
    contentBG.innerHTML = originalContentBG;
  }

  homeButton.addEventListener("click", function (event) {
    event.preventDefault();
    contentBG.style.overflow = "auto";
    content.style.gridTemplateRows = "auto";
    contentMain.style.display = "block"; /* Remove second window */
    resetToDefaultState();
  });

  peopleButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const contentToCopy = people.innerHTML;
  
    htmlContent.innerHTML = contentToCopy;
  
    const linkParagraph = peopleButton.querySelector("a > p");
    if (linkParagraph) {
      const paragraphText = linkParagraph.textContent;
      contentBG.style.overflow = "hidden";
      contentBG.innerHTML = `<h1 class="contH1">${paragraphText}</h1>`;
      content.style.gridTemplateRows = 'calc(2em + 60px) auto';
      contentMain.style.display = "block";
    }
  });
  
  // Similar code for other buttons
  dniButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const contentToCopy = dni.innerHTML;
  
    htmlContent.innerHTML = contentToCopy;
  
    const linkParagraph = dniButton.querySelector("a > p");
    if (linkParagraph) {
      const paragraphText = linkParagraph.textContent;
      contentBG.style.overflow = "hidden";
      contentBG.innerHTML = `<h1 class="contH1">DNI - IWC - BYI</h1>`;
      content.style.gridTemplateRows = 'calc(2em + 60px) auto';
      contentMain.style.display = "block";
    }
  });
  
  //BLOG PART
  blogButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const contentToCopy = blog.innerHTML;
  
    htmlContent.innerHTML = contentToCopy;
  
    const linkParagraph = blogButton.querySelector("a > p");
    if (linkParagraph) {
      const paragraphText = linkParagraph.textContent;
      contentBG.style.overflow = "hidden";
      contentBG.innerHTML = `<h1 class="contH1">${paragraphText}</h1><br>
      <a href="https://discord.gg/eTtbzAa6qW" target="_blank">NESystems</a> &#183 <a href="https://dash.pluralkit.me/profile/s/dhhrf?tab=members&view=tiny" target="_blank">System</a> &#183 <a href="https://twitter.com/ArcTriforce" target="_blank">Twitter</a>`;
      content.style.gridTemplateRows = 'calc(3em + 84px) auto';
      contentMain.style.display = "block";
    }
  });
  
  infoButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const contentToCopy = info.innerHTML;
  
    htmlContent.innerHTML = contentToCopy;
  
    const linkParagraph = infoButton.querySelector("a > p");
    if (linkParagraph) {
      const paragraphText = linkParagraph.textContent;
      contentBG.style.overflow = "hidden";
      contentBG.innerHTML = `<h1 class="contH1">${paragraphText}</h1>`;
      content.style.gridTemplateRows = 'calc(2em + 60px) auto';
      contentMain.style.display = "block";
    }
  });
  });

        // Get a reference to the reload button by its id
        var reloadButton = document.getElementById("reloadButton");

        // Add a click event listener to the button
        reloadButton.addEventListener("click", function () {
            // Reload the webpage
            location.reload();
        });
