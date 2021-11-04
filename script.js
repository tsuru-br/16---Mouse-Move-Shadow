const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const {
        offsetWidth: width,
        offsetHeight: height,
    } = hero;
    let {
        offsetX: x,
        offsetY: y
    } = e;

    console.log(this, e.target);
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = (x / width * walk) - (walk / 2)
    const yWalk = (y / height * walk) - (walk / 2)

}

hero.addEventListener('mousemove', shadow);