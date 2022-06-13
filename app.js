let sel = selector => document.querySelector(selector);

/* .....edit..... */

sel('.buttons__edit').addEventListener('click', () => {
    sel('.bottom__edit').classList.toggle('hide');
    sel('.bottom__edit-area').value = sel('.top').innerHTML;
    sel('.bottom__style').classList.add('hide');

});

sel('.bottom__edit-save').addEventListener('click', () => {
    sel('.bottom__edit').classList.toggle('hide');
    sel('.top').innerHTML = sel('.bottom__edit-area').value;
    document.forms[1].reset();
    document.forms[2].reset();
});



/* .....end-edit..... */



/* .....style..... */

sel('.buttons__style').addEventListener('click', () => {
    sel('.bottom__edit').classList.add('hide');
    sel('.bottom__style').classList.toggle('hide');

});

function fontSize() {
    if (event.target.className == 'bottom__style-size') {
        sel('.top').style.fontSize = event.target.value;
    }

};

sel('.bottom__style-fontFamile').addEventListener('change', function () {
    sel('.top').style.fontFamily = this.value;
});

sel('.bottom__style-bold').addEventListener('click', () => {
    sel('.top').classList.toggle('bold');
});

sel('.bottom__style-cursive').addEventListener('click', () => {
    sel('.top').classList.toggle('oblique');
});

sel('.bottom__style-btn-color').addEventListener('click', () => {
    sel('.bottom__box-colors').classList.toggle('hide');
    sel('.bottom__box-bgs').classList.add('hide');
});
sel('.bottom__style-btn-bg').addEventListener('click', () => {
    sel('.bottom__box-bgs').classList.toggle('hide');
    sel('.bottom__box-colors').classList.add('hide');
});

let color = ['red', 'blue', 'green', 'black', 'yellow', 'pink', 'white', 'indigo', 'teal'];
for (let i = 0; i < color.length; i++) {
    sel('.bottom__box-colors').children[i].style.backgroundColor = color[i];
    sel('.bottom__box-bgs').children[i].style.backgroundColor = color[i];
    sel('.bottom__box-colors').children[i].addEventListener('click', () => {
        sel('.top').style.color = sel('.bottom__box-colors').children[i].style.backgroundColor;
    });
    sel('.bottom__box-bgs').children[i].addEventListener('click', () => {
        sel('.top').style.backgroundColor = sel('.bottom__box-bgs').children[i].style.backgroundColor;
    });
}

/* .....end-style..... */


/* .....table and list..... */

sel('.bottom__edit-add').addEventListener('click', function () {
    sel('.add').classList.toggle('hide');
    sel('.wrapper').classList.toggle('hide');
});

sel('.add__choose-table').addEventListener('click', function () {
    sel('.add__table').classList.remove('hide');
    sel('.add__list').classList.add('hide');
});

sel('.add__choose-list').addEventListener('click', function () {
    sel('.add__list').classList.remove('hide');
    sel('.add__table').classList.add('hide');
});


sel('.add__table-btn').addEventListener('click', function () {

    let table = `<table>`;
    for (let i = 0; i < sel('.countTR').value; i++) {
        table += '<tr>';

        for (let j = 0; j < sel('.countTD').value; j++) {
            table += `<td style="width: ${sel('.widthTD').value}; height: ${sel('.heightTD').value}; border: ${sel('.widthBorder').value} ${sel('.typeBorder').value} ${sel('.colorBorder').value};">`;
            table += 'TD';
            table += '</td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    sel('.bottom__edit-area').value += table;
    sel('.add').classList.toggle('hide');
    sel('.wrapper').classList.toggle('hide');

});

sel('.add__list-btn').addEventListener('click', function () {
    let list = `<ul style="list-style-type:${sel('.typeLi')};">`;;
    for (let i = 0; i < sel('.countLi').value; i++) {
        list += `<li>item  ${i}</li>`

    }
    list += '</ul>';
    sel('.bottom__edit-area').value += list;
    sel('.add').classList.toggle('hide');
    sel('.wrapper').classList.toggle('hide');

});

/* .....end table and list..... */