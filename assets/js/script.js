// hamburger
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navbar = document.querySelector(".navbar");

hamburgerBtn.addEventListener("click", () => {
	const currentState = hamburgerBtn.getAttribute("data-state");

	if (!currentState || currentState === "closed") {
		hamburgerBtn.setAttribute("data-state", "opened");
		hamburgerBtn.setAttribute("aria-expanded", "true");
		// toggle sidebar class
		navbar.classList.toggle("opened");
		//save state to session
		sessionStorage.setItem("sidebarState", "opened");
	} else {
		hamburgerBtn.setAttribute("data-state", "closed");
		hamburgerBtn.setAttribute("aria-expanded", "false");
		// toggle sidebar class
		navbar.classList.toggle("opened");
		//save state to session
		sessionStorage.setItem("sidebarState", "closed");
	}
});
