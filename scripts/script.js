// Variaveis 
const parallax = document.querySelector(".parallax");
const ring = document.querySelector(".ring");
const secoes = document.querySelectorAll("section");

// criei duas const com o mesmo valor pq eu quero e eu posso.
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

// Inicializar AOS
AOS.init();

// Efeito parallax ao mudar de seção
window.addEventListener("scroll", () => {
	let current = "";
	secoes.forEach(section => {
		const top = section.offsetTop - 260;
		const height = section.clientHeight;
		
		if (
			window.scrollY >= top &&
			window.scrollY < top + height
		) {
			current = section.id;
		}
	});
	
	
	
	if (current === ""){
		ring.classList.add("right");
		ring.classList.remove(
		"left");
	} else if (current === "hero") {
		ring.classList.add("right");
		ring.classList.remove("left");
	}
	else if (current === "services"){
		ring.classList.add("left");
		ring.classList.remove("right");
	}
	
	if (current == "hero" || current == "services"){
		ring.style.left = "";
		ring.style.transition = "1s ease";
	} else {
		ring.style.transition = "7s ease";
		ring.style.left = "1000%";
	}
});

// funcao de alerta embreve
function soon() {
	alert("Em Breve");
}

// Adicionar classe active para items da navbar
window.addEventListener("scroll", () => {
	let current = "";
	sections.forEach(section => {
		const top = section.offsetTop - 260;
		const height = section.clientHeight;
		
		if (
			window.scrollY >= top &&
			window.scrollY < top + height
		) {
			current = section.id;
		}
	});
	
	navItems.forEach(item => {
		item.classList.remove("active");
		
		const section = item.dataset.section;
		
		if (section === current){
			item.classList.add("active");
			console.log("ATIVOU:", section);
		}
	});
});

// função para alterar de secao
function goToSection(sectionId){
	document.getElementById(sectionId).scrollIntoView({
		behavior: "smooth"
	});
}