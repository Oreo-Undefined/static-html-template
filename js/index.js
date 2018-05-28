
	let a = document.querySelector('#app');
	let b = [];
	for(let i = 0; i < 40; i++){
		b.push(i);
	}
	let c = Array.from(b, x => 2 * x);
	a.innerHTML = c.map(item => `<div class="test-class">${item}</div>`).join("");

