const btnUp = {
  el: document.querySelector('.scroll-up'),
  show() {
    this.el.classList.remove('scroll-up__hide');
  },
  hide() {
    this.el.classList.add('scroll-up__hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
  }
}

btnUp.addEventListener();