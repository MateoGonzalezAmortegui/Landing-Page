const menuMobile = document.querySelector('.mobile-menu');

function menu_mobile(){
    menuMobile.classList.toggle('inactive');
}

const result = document.querySelector('.results');
const errors = document.querySelector('.search-box__text');
function searching(){
    const input = document.querySelector('.search-box__input').value;
    if (
      input != "" &&
      /^(?:(?:(?:http|https|ftp):)\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        input
      )){
    const article = document.createElement('article');
    article.classList.add('results-box');
    const div = document.createElement('div');
    div.classList.add('results-box__link');
    const p = document.createElement('p');
    p.innerText=input;
    div.appendChild(p);


    const div2 = document.createElement('div');
    div2.classList.add('results-box__copy');
    const a = document.createElement('a');
    a.innerText="https://rel.ink/";
    div2.appendChild(a);

    const div3 = document.createElement('div');
    div3.classList.add('results-box__button');
    const btn = document.createElement('button');
    btn.classList.add('results_button');
    btn.innerText="Copy";
    div3.appendChild(btn);

    article.append(div, div2, div3);
    result.appendChild(article);
  }else{
    errors.classList.toggle('inactive');
  }
}


