const I18N = {
    EN: { chooseLanguage: 'CHOOSE A LANGUAGE', back: 'BACK', home: '⌂ HOME', kitchen: 'KITCHEN', bar: 'BAR', kitchenTag: 'THE ONLY REVIEW THAT MATTERS', ingredients: 'INGREDIENTS', aboutDish: 'ABOUT THIS DISH', nightBar: 'NIGHT • DRINKS • GOOD VIBES', selected: 'Language selected: ' },
    AZ: { chooseLanguage: 'DİLİ SEÇİN', back: 'GERİ', home: '⌂ ANA SƏHİFƏ', kitchen: 'MƏTBƏX', bar: 'BAR', kitchenTag: 'ƏN VACİB RƏY', ingredients: 'İNQREDİYENTLƏR', aboutDish: 'BU YEMƏK HAQQINDA', nightBar: 'GECƏ • İÇKİLƏR • ƏLA AB-HAVA', selected: 'Dil seçildi: ' },
    RU: { chooseLanguage: 'ВЫБЕРИТЕ ЯЗЫК', back: 'НАЗАД', home: '⌂ ГЛАВНАЯ', kitchen: 'КУХНЯ', bar: 'БАР', kitchenTag: 'ВАЖНО ТОЛЬКО ВАШЕ МНЕНИЕ', ingredients: 'ИНГРЕДИЕНТЫ', aboutDish: 'О БЛЮДЕ', nightBar: 'НОЧЬ • НАПИТКИ • ХОРОШИЙ ВАЙБ', selected: 'Язык выбран: ' }
};

let lang = 'EN', stack = ['languageScreen'], activeKitchen = 'sandwiches', selectedDish = null, activeBar = 'draft-beer', toastTimer;
const $ = id => document.getElementById(id);
let data;

const screens = ['languageScreen', 'loadingScreen', 'hubScreen', 'kitchenScreen', 'dishDetail', 'barScreen', 'barListScreen'];

function show(id, push = true) {
    if (push && stack[stack.length - 1] !== id) stack.push(id);
    screens.forEach(s => $(s).classList.toggle('active', s === id));
    if (id === 'dishDetail') $('dishDetail').scrollTop = 0;
}

function back() {
    if (stack.length > 1) stack.pop();
    show(stack[stack.length - 1], false);
}

function home() {
    stack = ['languageScreen'];
    show('languageScreen', false);
}

function toast(msg) {
    const t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1500);
}

function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.dataset.i18n;
        if (I18N[lang][k]) el.textContent = I18N[lang][k];
    });
}

function chooseLanguage(next) {
    lang = next;
    applyLanguage();
    toast(I18N[lang].selected + lang);
    stack = ['languageScreen'];
    show('loadingScreen');
    const p = $('.progress span');
    p.style.animation = 'none';
    void p.offsetWidth;
    p.style.animation = 'load 1.75s ease-in-out forwards';
    setTimeout(() => {
        if (stack[stack.length - 1] === 'loadingScreen') {
            stack = ['languageScreen', 'hubScreen'];
            show('hubScreen', false);
        }
    }, 1800);
}

function renderChips() {
    const wrap = $('kitchenChips');
    wrap.innerHTML = '';
    data.kitchenCategories.forEach(c => {
        const b = document.createElement('button');
        b.className = 'chip' + (c.id === activeKitchen ? ' active' : '');
        b.textContent = c.name;
        b.onclick = () => {
            activeKitchen = c.id;
            renderKitchen();
        };
        wrap.appendChild(b);
    });
}

function renderKitchen() {
    const cat = data.kitchenCategories.find(c => c.id === activeKitchen) || data.kitchenCategories[0];
    $('kitchenRibbon').textContent = cat.name;
    renderChips();
    const list = $('dishList');
    list.innerHTML = '';
    cat.items.forEach(item => {
        const b = document.createElement('button');
        b.className = 'item-card';
        b.innerHTML = `<img src="${item.image}" alt=""><span class="item-name"></span><span class="price">${item.price === '—' ? '—' : item.price + ' ₼'}</span><span class="item-arrow">›</span>`;
        b.querySelector('.item-name').textContent = item.name;
        b.onclick = () => openDish(item, cat);
        list.appendChild(b);
    });
}

function openDish(item, cat) {
    selectedDish = { item, cat };
    $('detailCategory').textContent = cat.name;
    $('dishTitle').textContent = item.name;
    $('dishPrice').innerHTML = (item.price === '—' ? '—' : item.price) + '<small> ₼</small>';$('dishHero').style.backgroundImage = `url('${item.image}')`;
    const ing = $('dishIngredients');
    ing.innerHTML = '';
    const lines = item.ingredients?.[lang] || item.ingredients?.EN || [lang === 'RU' ? 'Состав уточняйте у персонала' : lang === 'AZ' ? 'Tərkib barədə əməkdaşdan soruşun' : 'Please ask our staff for ingredients'];
    lines.forEach(line => {
        const li = document.createElement('li');
        li.textContent = line;
        ing.appendChild(li);
    });
    $('dishAbout').textContent = (item.about?.[lang] || item.about?.EN || (lang === 'RU' ? 'Описание уточняйте у персонала.' : lang === 'AZ' ? 'Təsvir üçün əməkdaşımıza müraciət edin.' : 'Please ask our staff for the dish description.'));
    show('dishDetail');
}

function renderBar() {
    const grid = $('barGrid');
    grid.innerHTML = '';
    const photos = ['assets/photos/bar-categories-left.jpg', 'assets/photos/bar-categories-right.jpg', 'assets/photos/bar-shelf-hero.jpg'];
    data.barCategories.forEach((cat, i) => {
        const b = document.createElement('button');
        b.className = 'bar-tile';
        b.style.setProperty('--photo', `url('${photos[i % photos.length]}')`);
        const name = document.createElement('strong');
        name.textContent = cat.name;
        const arrow = document.createElement('span');
        arrow.textContent = '›';
        b.append(name, arrow);
        b.onclick = () => openBarCategory(cat);
        grid.appendChild(b);
    });
}

function openBarCategory(cat) {
    activeBar = cat.id;
    $('barListTitle').textContent = cat.name;
    const list = $('drinkList');
    list.innerHTML = '';
    cat.items.forEach((item, i) => {
        const card = document.createElement('article');
        card.className = 'bar-list-card';
        card.style.backgroundImage = `linear-gradient(0deg,#02071155,#02071155),url('${i % 2 ? 'assets/photos/bar-categories-right.jpg' : 'assets/photos/bar-shelf-hero.jpg'}')`;
        const info = document.createElement('div');
        info.className = 'drink-info';
        const h = document.createElement('h3');
        h.textContent = item.name;
        const p = document.createElement('p');
        p.textContent = item.price === '—' ? '—' : item.price + ' ₼';
        info.append(h, p);
        card.append(info);
        list.append(card);
    });
    show('barListScreen');
}

document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => chooseLanguage(b.dataset.lang)));
document.querySelectorAll('[data-nav="back"]').forEach(b => b.addEventListener('click', back));
document.querySelectorAll('[data-nav="home"]').forEach(b => b.addEventListener('click', home));
$('kitchenHub').onclick = () => { renderKitchen(); show('kitchenScreen'); };$('barHub').onclick = () => { renderBar(); show('barScreen'); };

fetch('menu-data.json')
    .then(r => { if (!r.ok) throw new Error('no data'); return r.json(); })
    .then(json => { data = json; renderKitchen(); renderBar(); })
    .catch(() => { $('dishList').innerHTML = '<p class="empty-note">Menu data could not be loaded. Open this project through a web server.</p>'; });
