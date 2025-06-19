class ProgressBar {
    constructor(container) {
        this.container = container;
        this.container.classList.add('progressCircle');
        this.state = {
            value: 0,
            isHidden: false,
            isAnimating: false
        }
        this.circleRadius = 60
        this.circumference = 2 * Math.PI * this.circleRadius
        this._init()
    }

    _init() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('viewBox', '0 0 160 160')
        svg.setAttribute('height', '160')
        svg.setAttribute('width', '160')

        const circleBg = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circleBg.setAttribute('cx', '80')
        circleBg.setAttribute('cy', '80')
        circleBg.setAttribute('r', '60')
        circleBg.setAttribute('fill', 'none')
        circleBg.setAttribute('stroke', '#e6eef6')
        circleBg.setAttribute('stroke-width', '10')

        this.circleProgress = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        this.circleProgress.setAttribute('cx', '80')
        this.circleProgress.setAttribute('cy', '80')
        this.circleProgress.setAttribute('r', '60')
        this.circleProgress.setAttribute('fill', 'none')
        this.circleProgress.setAttribute('stroke', '#0860fc')
        this.circleProgress.setAttribute('stroke-width', '10')
        this.circleProgress.setAttribute('stroke-dasharray', this.circumference)
        this.circleProgress.setAttribute('stroke-dashoffset', this.circumference)
        this.circleProgress.setAttribute('transform', 'rotate(-90 80 80)')

        svg.appendChild(circleBg)
        svg.appendChild(this.circleProgress)
        this.container.appendChild(svg)
    }
    setValue(value) {
        const percent = Number(value)
        if (isNaN(percent)) {
            console.warn(`значение: ${value} не является числом`)
            return
        } else if (percent > 100 || percent < 0) {
            console.warn(`значение: ${percent} должно быть от 0 до 100`)
            return
        }
        this.state.value = percent
        const offset = this.circumference * (1 - percent / 100)
        this.circleProgress.setAttribute("stroke-dashoffset", offset);
    }
    setIsAnimating(value) {
        if (typeof value === 'boolean') {
            if (value) {
                this.container.classList.add('is-animated')
            } else {
                this.container.classList.remove('is-animated')
            }
        } else {
            console.warn('setIsAnimating: значение должно быть типа Boolean')
        }
    }
    setIsHidden(value) {
        if (typeof value === 'boolean') {
            value ?
                this.container.classList.add('is-hidden') :
                this.container.classList.remove('is-hidden')
        } else {
            console.warn('setIsHidden: значение должно быть типа Boolean')
        }
    }
}