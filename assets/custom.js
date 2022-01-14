class SleepinkSlider extends HTMLElement {
  constructor() {
    super()
    this.slider = this.querySelector("ul")
    this.sliderItems = this.querySelectorAll("li")
    this.pageCount = this.querySelector(".slider-counter--current")
    this.pageTotal = this.querySelector(".slider-counter--total")
    this.prevButton = this.querySelector('button[name="previous"]')
    this.nextButton = this.querySelector('button[name="next"]')

    if (!this.slider || !this.nextButton) return

    const resizeObserver = new ResizeObserver((entries) => this.initPages())
    resizeObserver.observe(this.slider)

    this.slider.addEventListener("scroll", this.update.bind(this))
    this.prevButton.addEventListener("click", this.onButtonClick.bind(this))
    this.nextButton.addEventListener("click", this.onButtonClick.bind(this))
  }

  initPages() {
    if (!this.sliderItems.length === 0) return
    this.slidesPerPage = Math.floor(
      this.slider.clientWidth / this.sliderItems[0].clientWidth
    )
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1
    this.update()
  }

  update() {
    if (!this.pageCount || !this.pageTotal) return
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1

    // if (this.currentPage === 1) {
    //   this.prevButton.setAttribute("disabled", true)
    // } else {
    this.prevButton.removeAttribute("disabled")
    // }

    // if (this.currentPage === this.totalPages) {
    //   this.nextButton.setAttribute("disabled", true)
    // } else {
    this.nextButton.removeAttribute("disabled")
    // }

    this.pageCount.textContent = this.currentPage
    this.pageTotal.textContent = this.totalPages
  }

  onButtonClick(event) {
    event.preventDefault()
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1
    const slideScrollPosition =
      event.currentTarget.name === "next"
        ? this.currentPage === this.totalPages
          ? this.slider.scrollLeft -
            (this.totalPages - 1) * this.sliderItems[0].clientWidth
          : this.slider.scrollLeft + this.sliderItems[0].clientWidth
        : this.currentPage === 1
        ? this.slider.scrollLeft +
          (this.totalPages - 1) * this.sliderItems[0].clientWidth
        : this.slider.scrollLeft - this.sliderItems[0].clientWidth
    this.slider.scrollTo({
      left: slideScrollPosition,
    })
  }
}

customElements.define("sleepink-slider", SleepinkSlider)

class PressSlider extends HTMLElement {
  constructor() {
    super()
    this.slider = this.querySelector("ul")
    this.sliderItems = this.querySelectorAll("li")
    this.pageCount = this.querySelector(".slider-counter--current")
    this.pageTotal = this.querySelector(".slider-counter--total")
    this.prevButton = this.querySelector('button[name="previous"]')
    this.nextButton = this.querySelector('button[name="next"]')

    if (!this.slider || !this.nextButton) return

    const resizeObserver = new ResizeObserver((entries) => this.initPages())
    resizeObserver.observe(this.slider)

    this.slider.addEventListener("scroll", this.update.bind(this))
    this.prevButton.addEventListener("click", this.onButtonClick.bind(this))
    this.nextButton.addEventListener("click", this.onButtonClick.bind(this))
  }

  initPages() {
    if (!this.sliderItems.length === 0) return
    this.slidesPerPage = Math.floor(
      this.slider.clientWidth / this.sliderItems[0].clientWidth
    )
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1
    this.update()
  }

  update() {
    if (!this.pageCount || !this.pageTotal) return
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1

    // if (this.currentPage === 1) {
    //   this.prevButton.setAttribute("disabled", true)
    // } else {
    this.prevButton.removeAttribute("disabled")
    // }

    // if (this.currentPage === this.totalPages) {
    //   this.nextButton.setAttribute("disabled", true)
    // } else {
    this.nextButton.removeAttribute("disabled")
    // }

    this.pageCount.textContent = this.currentPage
    this.pageTotal.textContent = this.totalPages
    const previousSlide =
      Number(this.pageCount.textContent) > 1
        ? this.sliderItems[Number(this.pageCount.textContent) - 2]
        : this.sliderItems[this.totalPages - 1]
    const prevSlideCont = document.getElementById("prevSlide")
    prevSlideCont.innerHTML = previousSlide.childNodes[1].innerHTML
    const nextSlide =
      Number(this.pageCount.textContent) === this.sliderItems.length
        ? this.sliderItems[0]
        : this.sliderItems[Number(this.pageCount.textContent)]
    const nextSlideCont = document.getElementById("nextSlide")
    nextSlideCont.innerHTML = nextSlide.childNodes[1].innerHTML
  }

  onButtonClick(event) {
    event.preventDefault()
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1
    const slideScrollPosition =
      event.currentTarget.name === "next"
        ? this.currentPage === this.totalPages
          ? this.slider.scrollLeft -
            (this.totalPages - 1) * this.sliderItems[0].clientWidth
          : this.slider.scrollLeft + this.sliderItems[0].clientWidth
        : this.currentPage === 1
        ? this.slider.scrollLeft +
          (this.totalPages - 1) * this.sliderItems[0].clientWidth
        : this.slider.scrollLeft - this.sliderItems[0].clientWidth
    this.slider.scrollTo({
      left: slideScrollPosition,
    })
  }
}

customElements.define("press-slider", PressSlider)

class AnimatedSlider extends HTMLElement {
  constructor() {
    super()
    this.slider = this.querySelector("ul")
    this.sliderItems = this.querySelectorAll("li")
    this.pageCount = this.querySelector(".slider-counter--current")
    this.pageTotal = this.querySelector(".slider-counter--total")
    this.prevButton = this.querySelector('button[name="previous"]')
    this.nextButton = this.querySelector('button[name="next"]')

    if (!this.slider || !this.nextButton) return

    const resizeObserver = new ResizeObserver((entries) => this.initPages())
    resizeObserver.observe(this.slider)

    this.slider.addEventListener("scroll", this.update.bind(this))
    this.prevButton.addEventListener("click", this.onButtonClick.bind(this))
    this.nextButton.addEventListener("click", this.onButtonClick.bind(this))
    this.initAnimation()
  }

  initAnimation() {
    window.setInterval(() => {
      this.onIntervalUpdate()
    }, 15000)
  }

  initPages() {
    if (!this.sliderItems.length === 0) return
    this.slidesPerPage = Math.floor(
      this.slider.clientWidth / this.sliderItems[0].clientWidth
    )
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1
    this.update()
  }

  update() {
    if (!this.pageCount || !this.pageTotal) return
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1

    // if (this.currentPage === 1) {
    //   this.prevButton.setAttribute("disabled", true)
    // } else {
    this.prevButton.removeAttribute("disabled")
    // }

    // if (this.currentPage === this.totalPages) {
    //   this.nextButton.setAttribute("disabled", true)
    // } else {
    this.nextButton.removeAttribute("disabled")
    // }

    this.pageCount.textContent = this.currentPage
    this.pageTotal.textContent = this.totalPages
  }

  onIntervalUpdate() {
    const time = new Date().getTime()
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1
    const slideScrollPosition =
      this.currentPage === this.totalPages
        ? this.slider.scrollLeft -
          (this.totalPages - 1) * this.sliderItems[0].clientWidth
        : this.slider.scrollLeft + this.sliderItems[0].clientWidth
    this.slider.scrollTo({
      left: slideScrollPosition,
    })
  }

  onButtonClick(event) {
    event.preventDefault()
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1
    const slideScrollPosition =
      event.currentTarget.name === "next"
        ? this.currentPage === this.totalPages
          ? this.slider.scrollLeft -
            (this.totalPages - 1) * this.sliderItems[0].clientWidth
          : this.slider.scrollLeft + this.sliderItems[0].clientWidth
        : this.currentPage === 1
        ? this.slider.scrollLeft +
          (this.totalPages - 1) * this.sliderItems[0].clientWidth
        : this.slider.scrollLeft - this.sliderItems[0].clientWidth
    this.slider.scrollTo({
      left: slideScrollPosition,
    })
  }
}

customElements.define("animated-slider", AnimatedSlider)

class DottedAnimatedSlider extends HTMLElement {
  constructor() {
    super()
    this.slider = this.querySelector("ul")
    this.sliderItems = this.querySelectorAll("li")
    this.pageCount = this.querySelector(".slider-counter--current")
    this.pageTotal = this.querySelector(".slider-counter--total")
    this.prevButton = this.querySelector('button[name="previous"]')
    this.nextButton = this.querySelector('button[name="next"]')
    this.dots = this.querySelectorAll(".dot")

    if (!this.slider || !this.nextButton) return

    const resizeObserver = new ResizeObserver((entries) => this.initPages())
    resizeObserver.observe(this.slider)

    this.slider.addEventListener("scroll", this.update.bind(this))
    this.prevButton.addEventListener("click", this.onButtonClick.bind(this))
    this.nextButton.addEventListener("click", this.onButtonClick.bind(this))

    for (let i = 0; i < this.dots.length; i++) {
      const dot = this.dots[i]
      dot.addEventListener("click", this.onDotClick.bind(this))
    }

    this.initAnimation()
  }

  initAnimation() {
    window.setInterval(() => {
      this.onIntervalUpdate()
    }, 15000)
  }

  initPages() {
    if (!this.sliderItems.length === 0) return
    this.slidesPerPage = Math.floor(
      this.slider.clientWidth / this.sliderItems[0].clientWidth
    )
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1
    this.update()
  }

  update() {
    if (!this.pageCount || !this.pageTotal) return
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1

    // if (this.currentPage === 1) {
    //   this.prevButton.setAttribute("disabled", true)
    // } else {
    this.prevButton.removeAttribute("disabled")
    // }

    // if (this.currentPage === this.totalPages) {
    //   this.nextButton.setAttribute("disabled", true)
    // } else {
    this.nextButton.removeAttribute("disabled")
    // }

    this.pageCount.textContent = this.currentPage
    this.pageTotal.textContent = this.totalPages
  }

  onIntervalUpdate() {
    const time = new Date().getTime()
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1
    const slideScrollPosition =
      this.currentPage === this.totalPages
        ? this.slider.scrollLeft -
          (this.totalPages - 1) * this.sliderItems[0].clientWidth
        : this.slider.scrollLeft + this.sliderItems[0].clientWidth
    this.slider.scrollTo({
      left: slideScrollPosition,
    })
  }

  onDotClick(event) {
    event.preventDefault()
    const number = Number(event.target.dataset.slide)
    const slideScrollPosition = number * this.sliderItems[0].clientWidth
    this.slider.scrollTo({
      left: slideScrollPosition,
    })
  }

  onButtonClick(event) {
    event.preventDefault()
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1
    const slideScrollPosition =
      event.currentTarget.name === "next"
        ? this.currentPage === this.totalPages
          ? this.slider.scrollLeft -
            (this.totalPages - 1) * this.sliderItems[0].clientWidth
          : this.slider.scrollLeft + this.sliderItems[0].clientWidth
        : this.currentPage === 1
        ? this.slider.scrollLeft +
          (this.totalPages - 1) * this.sliderItems[0].clientWidth
        : this.slider.scrollLeft - this.sliderItems[0].clientWidth
    this.slider.scrollTo({
      left: slideScrollPosition,
    })
  }
}

customElements.define("dotted-animated-slider", DottedAnimatedSlider)
