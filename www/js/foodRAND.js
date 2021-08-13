//call url
const getURL = window.location.href
console.log(getURL)
const id = getURL.substr(37)
console.log(id)

// declair span id
const ta = document.getElementById('a')
const tb = document.getElementById('b')
const tc = document.getElementById('c')
const tfix = document.getElementById('fix')
const tmenu = document.getElementById('menu')

// fetch json
function congrat(){
    fetch("./db/main.json")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        dataFuc(data)
    })
    .catch((err) => {
        console.log("error : " + err);
    })
}

function dataFuc(data) {    
    // สำหรับสุ่มอาหาร
    if (id == 0) {
        const rand_a = Math.floor(Math.random() * 4)
        const rand_b = Math.floor(Math.random() * 3)
        const item = data.shopname[0].item

        if (rand_a == 0) {
            menu.classList.add('hidden')
            ta.innerHTML = item.a[0].a
        } else if (rand_a == 1) {
            menu.classList.add('hidden')
            ta.innerHTML = item.a[1].a
        } else if (rand_a == 2) {
            menu.classList.add('hidden')
            ta.innerHTML = item.a[2].a
        } else if (rand_a == 3) {
            menu.classList.add('hidden')
            ta.innerHTML = item.a[3].a
        }

        if (rand_b == 0) {
            menu.classList.add('hidden')
            tb.innerHTML = item.b[0].a
        } else if (rand_b == 1) {
            menu.classList.add('hidden')
            tb.innerHTML = item.b[1].a
        } else if (rand_b == 2) {
            menu.classList.add('hidden')
            tb.innerHTML = item.b[2].a
        }
    } else if (id == 1) {
        const rand_a = Math.floor(Math.random() * 5)
        const food = data.shopname[1]

        if (rand_a == 0) {
            menu.classList.add('hidden')
            ta.innerHTML = food.item[0].a
        } else if (rand_a == 1) {
            menu.classList.add('hidden')
            ta.innerHTML = food.item[1].a
        } else if (rand_a == 2) {
            menu.classList.add('hidden')
            ta.innerHTML = food.item[2].a
        } else if (rand_a == 3) {
            menu.classList.add('hidden')
            ta.innerHTML = food.item[3].a
        } else if (rand_a == 0) {
            menu.classList.add('hidden')
            ta.innerHTML = food.item[4].a
        }
    } else if (id == 2) {
        const rand_a = Math.floor(Math.random() * 7)
        const rand_b = Math.floor(Math.random() * 3)
        const rand_c = Math.floor(Math.random() * 4)

        const a = data.shopname[2]

        if (rand_a == 0) {
            menu.classList.add('hidden')
            ta.innerHTML = a.item[0]
        }
    }

    document.getElementById('rand').classList.add('hidden')
    document.getElementById('re').classList.remove('hidden')
}