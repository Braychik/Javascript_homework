const newData = JSON.parse(data);
console.log(newData);

const divContentElem = document.querySelector('.content');

newData.forEach(element => {
divContentElem.insertAdjacentHTML('beforeend', `
<div class='wrapper'>
<h2>${element.camera.name}</h2>
<h3>${element.camera.full_name}</h3>
<p>${element.img_src}</p>
</div>
`)

});