const hamburger = document.querySelector(".hamburger_icon");
const toggle_menu = document.querySelector(".small_screen_menu");

hamburger.addEventListener("click", () => {
	if (toggle_menu.style.display === "none") {
		toggle_menu.style.display = "block";
		hamburger.src = "./src/images/close.png";
	} else {
		toggle_menu.style.display = "none";
		hamburger.src = "./src/images/hamburger.png";
	}
});

// Auto Generated Number
let valueDisplays = document.querySelectorAll(".generated_number");
let interval = 5000;
valueDisplays.forEach((value) => {
	let startValue = 0;
	let endValue = parseInt(value.getAttribute("data-val"));
	let duration = Math.floor(interval / endValue);
	console.log(duration);
	let counter = setInterval(function () {
		startValue += 1;
		value.textContent = startValue;
		if (startValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});

// Left Cards Intersection Observer
const left_x_card_appear = document.querySelectorAll(".translate_left_x");

const observer = new IntersectionObserver(
	function (entries) {
		entries.forEach((entry) => {
			console.log(entry.target.classList[0]);
			if (entry.isIntersecting) {
				if (entry.target.id === "utility_container") {
					entry.target.classList.add("opacity_0_to_1_inview");
				} else {
					entry.target.classList.add("inview");
				}
			} else {
				if (entry.target.id === "utility_container") {
					entry.target.classList.remove("opacity_0_to_1_inview");
				} else {
					entry.target.classList.remove("inview");
				}
			}
		});
	},
	{
		threshold: 0.2,
	}
);
left_x_card_appear.forEach((entry) => observer.observe(entry));

// Right Cards Intersection Observer
const right_x_card_appear = document.querySelectorAll(".translate_right_x");
right_x_card_appear.forEach((entry) => observer.observe(entry));

// Opacity Observer For Utility Container
const utility_container = document.querySelector(".opacity_0_to_1");
observer.observe(utility_container);

function changeContentOfUseCaseCard1() {
	setTimeout(() => {
		document.getElementById(
			"common_use_cases_inner_cards_container_first_image"
		).src = "src/images/globe.png";
		title.innerHTML =
			"Get the details of business location and contact information of a company, organization, or individual with a domain name that is operating a website or other publicly accessible web services using a domain name, for commercial or other purposes.";
		title.style.fontSize = "16px";
		title.style.fontWeight = "normal";
		title.style.textAlign = "justify";
	}, 1000);
	const title = document.getElementById(
		"common_use_cases_inner_cards_container_first_heading"
	);
}
function revertContentOfUseCaseCard1() {
	setTimeout(() => {
		document.getElementById(
			"common_use_cases_inner_cards_container_first_image"
		).src = "src/images/globalization.png";
	});
	const title = document.getElementById(
		"common_use_cases_inner_cards_container_first_heading"
	);
	title.innerHTML = "Real World Identity";
	title.style.fontSize = "22px";
	title.style.fontWeight = "bold";
	title.style.textAlign = "center";
}
