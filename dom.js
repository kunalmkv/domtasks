/*console.log(document.all);
var headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('list-group-item');
for (var i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold';
}
items[0].style.backgroundColor = '#80ffbf';
items[1].style.backgroundColor = '#ff8080';
items[2].style.backgroundColor = '#d2a679';
items[3].style.backgroundColor = '#ffff33';

var cla = document.getElementsByClassName('randomClass');
cla.style.fontWeight = 'bold';
cla.style.backgroundColor = '#80ffbf';*/

// var item = document.querySelector('.list-group-item');
// item[2].style.display = 'none';

/*var items = document.getElementsByClassName('list-group-item');
for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
}*/

var item = document.querySelector('.list-group-item:nth-child(2)');
item.style.display = 'none';
var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
}
//doubt