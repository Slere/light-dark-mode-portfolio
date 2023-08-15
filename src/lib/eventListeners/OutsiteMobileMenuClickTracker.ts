export const clickedOutsiteMobileMenuDispatcher = (node:any) =>{
    const handleClick = (event:any) => {
		let eventTarget = event.target;
		let menuButton = document.getElementById("menuButton");
		if (!node.contains(event.target) && eventTarget != menuButton) {
			node.dispatchEvent(new CustomEvent("outclick",{detail:{eventTarget,wasButtonClicked:false},}));
		}
	};
	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};

}