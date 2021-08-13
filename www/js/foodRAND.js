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
        const rand_b = Math.floor(Math.random() * 3);

        if (rand_a == 0) {
            menu.classList.add('hidden')
            ta.innerHTML = data.shopname[0].item.a[0].a
        } else if (rand_a == 1) {
            menu.classList.add('hidden')
            ta.innerHTML = data.shopname[0].item.a[1].a
        } else if (rand_a == 2) {
            menu.classList.add('hidden')
            ta.innerHTML = data.shopname[0].item.a[2].a
        } else if (rand_a == 3) {
            menu.classList.add('hidden')
            ta.innerHTML = data.shopname[0].item.a[3].a
        }

        if (rand_b == 0) {
            menu.classList.add('hidden')
            tb.innerHTML = data.shopname[0].item.b[0].a
        } else if (rand_b == 1) {
            menu.classList.add('hidden')
            tb.innerHTML = data.shopname[0].item.b[1].a
        } else if (rand_b == 2) {
            menu.classList.add('hidden')
            tb.innerHTML = data.shopname[0].item.b[2].a
        }
    }

    if (id == 1) {

    }

    document.getElementById('rand').classList.add('hidden')
    document.getElementById('re').classList.remove('hidden')
}