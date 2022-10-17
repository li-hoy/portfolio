document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider')

    document.addEventListener('scroll', function () {
        if (window.pageYOffset) {
            document.querySelector('nav').classList.add('background-black')
        } else {
            document.querySelector('nav').classList.remove('background-black')
        }
    })

    slider.querySelector('.slider__background')
        .addEventListener('click', function () {
            this.parentElement.classList.add('hidden')
        })

    slider.querySelector('.slider__button_close')
        .addEventListener('click', function () {
            this.closest('.slider').classList.add('hidden')
        })

    slider.querySelector('.slider__button_arrow-left')
        .addEventListener('click', function () {
            const slider_screen = this.closest('.slider').querySelector('.slider__screen')

            const current_photo = document
                .querySelector('img[src="' + slider_screen.getAttribute('src') + '"]')
                .parentElement

            const prev_photo = current_photo.previousElementSibling

            let img_src = prev_photo ? prev_photo.firstChild.getAttribute('src') : ''

            if (img_src === '') {
                const last_photo = document.querySelector('.gallary').lastElementChild
                
                img_src = last_photo ? last_photo.firstChild.getAttribute('src') : ''
            }

            slider_screen.setAttribute('src', img_src)
        })


    slider.querySelector('.slider__button_arrow-right')
        .addEventListener('click', function () {
            const slider_screen = this.closest('.slider').querySelector('.slider__screen')

            const current_photo = document
                .querySelector('img[src="' + slider_screen.getAttribute('src') + '"]')
                .parentElement

            const next_photo = current_photo.nextElementSibling

            let img_src = next_photo ? next_photo.firstChild.getAttribute('src') : ''

            if (img_src === '') {
                const first_photo = document.querySelector('.gallary').firstElementChild
                
                img_src = first_photo ? first_photo.firstChild.getAttribute('src') : ''
            }

            slider_screen.setAttribute('src', img_src)
        })

    document.querySelectorAll('.gallary__photo img')
        .forEach(function (photo) {
            photo.addEventListener('click', function () {
                slider.querySelector('.slider__screen').setAttribute('src', this.getAttribute('src'))

                slider.classList.remove('hidden')
            })
        })
})
