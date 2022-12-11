console.log(document.all);
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
