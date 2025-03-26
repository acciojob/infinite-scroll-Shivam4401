//your code here!
let list = document.getElementById("infi-list");
let lastItem = 10
for(let i=1 ; i<=10 ; i++){
	let listItem = document.createElement("li");
	listItem.textContent = `Item${i}`;
	list.appendChild(listItem);
}

list.addEventListener("scroll",()=>{
	if(list.scrollTop + list.clientHeight >= list.scrollHeight){
		for(let i=1 ; i<=2 ; i++){
		let listItem = document.createElement("li");
	    lastItem++;
		listItem.textContent = `Item${lastItem}`;
		list.appendChild(listItem);
}
	}
})