let img = document.getElementsByClassName("img")


let slider = {
    slides: img,
    frame: 0,
    indexZ: "1",
    init: function () {
        this.slides[this.frame].style.zIndex = this.indexZ
    },

    right: function () {
        this.frame++;
        this.indexZ++
        if (this.frame >= this.slides.length){
            this.frame = 0;
            for (let i=0; i < this.slides.length; i++){
                this.slides[i].style.zIndex = "0"
                this.indexZ = "1"
            }
        }
        this.slides[this.frame].style.zIndex = this.indexZ;
        console.log(this.frame)
    },
    left: function () {
        this.frame--;
        this.indexZ++
        if (this.frame < 0){
            this.frame = this.slides.length - 1
            for (let i=0; i < this.slides.length; i++){
                this.slides[i].style.zIndex = "0"
                this.indexZ = "1"
            }
        }
        this.slides[this.frame].style.zIndex = this.indexZ
    }
}
window.onload = function () {
    slider.init();
    setInterval(function () {
        slider.right();
    }, 5000)
}
console.log(slider.indexZ)
